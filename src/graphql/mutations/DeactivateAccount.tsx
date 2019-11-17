import IGraphQLRequest from "../../types/IGraphQLRequest.d";

const DeactivateAccount = (): IGraphQLRequest => ({
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

export default DeactivateAccount;
