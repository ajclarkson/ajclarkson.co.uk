const { DateTime } = require("luxon");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (eleventyConfig) => {

    eleventyConfig.addPlugin(pluginSyntaxHighlight);

    eleventyConfig.addPassthroughCopy("src/**/*.jpg");
    eleventyConfig.addPassthroughCopy("src/**/*.jpeg");
    eleventyConfig.addPassthroughCopy("src/**/*.png");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.setUseGitIgnore(false);
    // eleventyConfig.addWatchTarget("src/css");

    eleventyConfig.setBrowserSyncConfig({
		files: './_site/css/**/*.css'
	});

    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("LLLL dd, yyyy");
      });

    return {
        dir: {
            input: 'src',
        },
    }
}