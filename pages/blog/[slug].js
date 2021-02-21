import hydrate from "next-mdx-remote/hydrate";

import MDXComponents from "@/components/Commons/MDXComponents";
import { getFileBySlug, getFiles } from "@/lib/mdx";
import { LayoutBlogDetail } from "@/components/Layout";

export default function Post({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return (
    <LayoutBlogDetail frontMatter={frontMatter}>{content}</LayoutBlogDetail>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles("blog");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("blog", params.slug);

  return { props: post };
}
