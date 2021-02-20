import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import readingTime from "reading-time";
import renderToString from "next-mdx-remote/render-to-string";

import MDXComponents from "@/components/Commons/MDXComponents";
import { get } from "lodash";

const root = process.cwd();
const postsDirectory = join(process.cwd(), "data/blog");

function getSlug(fileName) {
  return fileName.join("-").replace(/\.mdx$/, "");
}

export async function getFiles(type) {
  return fs.readdirSync(join(root, "data", type));
}

export async function getAllFilesFrontMatter(type) {
  const files = await getFiles(type);

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(join(root, "data", type, postSlug), "utf8");
    const [index, ...fileName] = postSlug.split("-");

    const { data, content } = matter(source);

    console.log(data);

    return [
      {
        id: index,
        ...data,
        slug: getSlug(fileName),
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
