import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import readingTime from "reading-time";
import renderToString from "next-mdx-remote/render-to-string";

import MDXComponents from "@/components/Commons/MDXComponents";

const root = process.cwd();

export async function getFiles(type) {
  return fs.readdirSync(join(root, "data", type));
}

export async function getFile(type, slug) {
  return slug
    ? fs.readFileSync(join(root, "data", type, `${slug}.mdx`), "utf8")
    : fs.readFileSync(join(root, "data", `${type}.mdx`), "utf8");
}

function getSlug(fileName) {
  return fileName.replace(/\.mdx$/, "");
}

export async function getAllFilesFrontMatter(type) {
  const files = await getFiles(type);

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(join(root, "data", type, postSlug), "utf8");
    const { data, content } = matter(source);
    return [
      {
        ...data,
        slug: getSlug(postSlug),
        readingTime: readingTime(content),
      },
      ...allPosts,
    ];
  }, []);
}

export async function getFeaturedPosts() {
  const posts = await getAllFilesFrontMatter("blog");
  return posts.filter((post) => post.isFeatured);
}

export async function getFileBySlug(type, slug) {
  const source = slug ? await getFile(type, slug) : await getFile(type);

  const { data, content } = matter(source);

  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [require("remark-slug")],
      rehypePlugins: [require("@mapbox/rehype-prism")],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      ...data,
      slug: slug || null,
      readingTime: readingTime(content),
    },
  };
}
