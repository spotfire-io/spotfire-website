import React from "react";
import { ApolloProvider } from "react-apollo";
import { client } from "./src/utils/apolloClient";

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
