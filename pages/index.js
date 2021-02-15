import { BlogLanding } from "@/components/Blog";
import { LayoutLanding } from "@/components/Layout";
import { Projects } from "@/components/Projects";

import { getAllFeaturedPosts } from "@/lib/api";
import Newsletter from "@/components/Newsletter";

const Home = (props) => {
  const { featuredPost } = props;

  return (
    <LayoutLanding>
      <div className="w-3/4" id="projects">
        <Projects
          title="WHYDN.DEV"
          language="Javascript"
          url="https://github.com/whydnxx/whydn.dev"
          description="🚀 The artcode and 'Behind The Scene' of whydn.dev . Build with Next.js and Tailwindcss"
        />
      </div>
      <div className="mt-12 w-3/4" id="blog">
        <BlogLanding posts={featuredPost} />
      </div>
      <div className="mt-14 w-3/4" id="newsletter">
        <Newsletter />
      </div>
    </LayoutLanding>
  );
};

export async function getStaticProps() {
  const featuredPost = getAllFeaturedPosts([
    "title",
    "date",
    "slug",
    "hero",
    "excerpt",
    "isFeatured",
  ]);

  return {
    props: {
      featuredPost,
    },
  };
}

export default Home;
