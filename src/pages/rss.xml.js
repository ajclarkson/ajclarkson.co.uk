import rss, { pagesGlobToRssItems} from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: 'ajclarkson.co.uk | Blog',
        description: 'Writing by Adam Clarkson',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`,
    });
}
