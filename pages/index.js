import { BlogLanding } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { LayoutLanding } from "@/components/Layout";
import { Projects } from "@/components/Projects";

import { GET_PINNED_REPOSITORIES } from "@/lib/graphql";
import { initializeApollo, addApolloState } from "@/lib/apollo";
import { getAllFeaturedPosts } from "@/lib/api";

const Home = (props) => {
  const { projects, featuredPost } = props;

  return (
    <LayoutLanding>
      <div className="w-3/4" id="projects">
        <Projects data={projects.data} isLoading={projects.loading} />
      </div>
      <div className="mt-12 w-3/4" id="blog">
        <BlogLanding posts={featuredPost} />
      </div>
      <div className="mt-14 w-3/4" id="contact">
        <Contact />
      </div>
    </LayoutLanding>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const projects = await apolloClient.query({
    query: GET_PINNED_REPOSITORIES,
  });

  const featuredPost = getAllFeaturedPosts([
    "title",
    "date",
    "slug",
    "hero",
    "excerpt",
    "isFeatured",
  ]);

  return addApolloState(apolloClient, {
    props: { projects, featuredPost },
  });
}

export default Home;
