import { IGraphQLRequest } from "../../types/IGraphQLRequest.d";

export const DeactivateAccount = (): IGraphQLRequest => ({
  query: `
mutation {
  deactivate_account {
    status
    errors {
      path
      message
    }
  }
}
`
});
