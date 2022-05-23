const { DateTime } = require("luxon");
const Image = require("@11ty/eleventy-img");
const path = require('path');
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const timeToRead = require('eleventy-plugin-time-to-read');

module.exports = (eleventyConfig) => {

    eleventyConfig.addPlugin(pluginSyntaxHighlight);
    eleventyConfig.addPlugin(timeToRead);

    eleventyConfig.addPassthroughCopy("src/**/*.jpg");
    eleventyConfig.addPassthroughCopy("src/**/*.jpeg");
    eleventyConfig.addPassthroughCopy("src/**/*.png");
    eleventyConfig.addPassthroughCopy("src/**/*.svg");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.setUseGitIgnore(false);
    // eleventyConfig.addWatchTarget("src/css");

    eleventyConfig.setBrowserSyncConfig({
		files: './_site/css/**/*.css'
	});

    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("LLLL dd, yyyy");
      });

    // function imageShortcode(src, alt, sizes="(min-width: 1024px) 100vw, 50vw") {
        const imageShortcode = async (
            fileName,
            relativeSrc,
            alt,
            className,
            widths = [null, 400, 900],
            formats = ['jpeg', 'webp'],
            sizes = '100vw'
          ) => {
            const { dir: imgDir } = path.parse(relativeSrc);
            const fullSrc = path.join('src', relativeSrc, fileName);
            console.log(imgDir, relativeSrc);
          
            const metadata = await Image(fullSrc, {
              widths,
              formats,
              outputDir: path.join('_site', relativeSrc),
              urlPath: relativeSrc,
            });
            const imageAttributes = {
                alt,
                sizes,
                loading: "lazy",
                decoding: "async",
            };
            return Image.generateHTML(metadata, imageAttributes);
        };

            
    eleventyConfig.addShortcode("image", imageShortcode);

    eleventyConfig.addCollection('blogTags', (collections) => {
      const uniqueTags = collections
        .getFilteredByTag('blog')
        .filter((item) => !item.data.hidden)
        .reduce((tags, item) => tags.concat(item.data.tags), [])
        .filter((tag) => !!tag)
        .filter((tag) => !!tag && !['blog'].includes(tag))
        .sort();
      return Array.from(new Set(uniqueTags));
    });

    return {
        dir: {
            input: 'src',
        },
    }
}