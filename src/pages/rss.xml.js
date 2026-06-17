import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection('writing');
    const sorted = posts.sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate));

    return rss({
        title: 'ajclarkson.co.uk | Writing',
        description: 'Writing by Adam Clarkson',
        site: context.site,
        items: sorted.map(post => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/writing/${post.id}/`,
        })),
        customData: `<language>en-gb</language>`,
    });
}
