import { BlogLanding } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { LayoutLanding } from "@/components/Layout";
import { Projects } from "@/components/Projects";

import { GET_PINNED_REPOSITORIES } from "@/lib/graphql";
import { initializeApollo, addApolloState } from "@/lib/apollo";

const Home = (props) => {
  const { projects } = props;

  return (
    <LayoutLanding>
      <div className="w-3/4" id="projects">
        <Projects data={projects.data} isLoading={projects.loading} />
      </div>
      <div className="mt-12 w-3/4" id="blog">
        <BlogLanding />
      </div>
      <div className="mt-14 w-3/4" id="contact">
        <Contact />
      </div>
    </LayoutLanding>
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const projects = await apolloClient.query({
    query: GET_PINNED_REPOSITORIES,
  });

  return addApolloState(apolloClient, {
    props: { projects },
  });
}

export default Home;
