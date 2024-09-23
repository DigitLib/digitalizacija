import rss from "@astrojs/rss";
import sanitizeHtml from "sanitize-html";

export async function GET(context) {
  const postImportResult = import.meta.glob("./**/*.mdx", { eager: true });
  const posts = Object.values(postImportResult);

  return rss({
    title: "Дигитализација",
    description:
      "Портал у форми подсетника при раду у процесу дигитализације културног наслеђа.",
    site: context.site,
    items: posts.map((post) => ({
      link: post.url,
      pubDate: post.frontmatter.step,
      content: sanitizeHtml(post.compiledContent()),
      title: post.frontmatter.title,
      ...post.frontmatter,
    })),
  });
}
