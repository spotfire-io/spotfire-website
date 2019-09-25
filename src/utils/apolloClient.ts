import ApolloClient from "apollo-boost";
import fetch from "isomorphic-fetch";

import auth from "./auth";

export const client = new ApolloClient<object>({
  uri: `${process.env["GATSBY_GRAPHQL_API_ENDPOINT"]}`,
  request: async operation => {
    const token = auth.getAccessToken();
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  fetch,
});
