import React from "react";
import { ReactNode } from "react";
import LoadingDialog from "./LoadingDialog";
import ErrorMessage from "./ErrorMessage";
import { GraphQLError } from "graphql";
import { ApolloError } from "apollo-boost";

interface UseQueryResult {
  error?: ApolloError;
  loading: boolean;
  data?: any;
}

interface Props {
  result: UseQueryResult;
  children: ReactNode;
}

export const QueryGuard = ({ result, children }: Props) => {
  const { loading, error, data } = result;
  if (loading) return <LoadingDialog message="Loading Playlist Details..." />;
  if (error || !data) return <ErrorMessage error={error} data={data} />;
  return <>{children}</>;
};

export default QueryGuard;
