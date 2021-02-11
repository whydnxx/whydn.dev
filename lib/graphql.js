import { gql } from "apollo-boost";

export const GET_PINNED_REPOSITORIES = gql`
  query GetPinnedRepositories {
    viewer {
      pinnedItems(first: 4, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            primaryLanguage {
              name
            }
            url
            forkCount
            stargazerCount
          }
        }
      }
    }
  }
`;
