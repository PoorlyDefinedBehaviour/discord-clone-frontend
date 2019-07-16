import { IGraphQLRequest } from "../../types/IGraphQLRequest.d";

export const JoinServer = (_id: string): IGraphQLRequest => ({
  query: `
mutation {
  join_server(_id: "${_id}") {
    TODO
  }
}`
});
