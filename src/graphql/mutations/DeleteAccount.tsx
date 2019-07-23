import { IGraphQLRequest } from "../../types/IGraphQLRequest.d";

export const DeleteAccount = (): IGraphQLRequest => ({
  query: `
mutation {
  delete_account {
    status
    errors {
      path
      message
    }
  }
}
`
});
