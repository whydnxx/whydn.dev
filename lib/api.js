import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(file, fields = []) {
  const [year, month, date, ...slug] = file.split("-");
  const fullPath = join(postsDirectory, `${file}`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  let { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = slug.join("-").replace(/\.md$/, "");
    }

    if (field === "date") {
      items[field] = `${year}-${month}-${date}`;
    }

    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  return slugs.map((slug) => getPostBySlug(slug, fields));
}

export function getAllFeaturedPosts(fields = []) {
  const slugs = getPostSlugs();

  return (
    slugs
      .map((slug) => getPostBySlug(slug, fields))
      // filtering by featured post
      .filter((post) => post.isFeatured)
  );
}
