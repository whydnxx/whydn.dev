import { BlogLanding } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { LayoutLanding } from "@/components/Layout";
import { Projects } from "@/components/Projects";

import { useQuery } from "@apollo/react-hooks";
import { getDataFromTree } from "@apollo/react-ssr";
import withApollo from "@/lib/apollo";
import { GET_PINNED_REPOSITORIES } from "@/lib/graphql";

const Home = () => {
  const projects = useQuery(GET_PINNED_REPOSITORIES);

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

export default withApollo(Home, { getDataFromTree });
