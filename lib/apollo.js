import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import withApollo from "next-with-apollo";
import { GITHUB_GRAPHQL } from "@/utils/constants";

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: GITHUB_GRAPHQL,
      cache: new InMemoryCache().restore(initialState || {}),
      headers: {
        authorization: `Bearer ${process.env.GITHUB_AUTH_TOKEN}`,
      },
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);
