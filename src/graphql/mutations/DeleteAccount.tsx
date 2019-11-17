import IGraphQLRequest from "../../types/IGraphQLRequest.d";

const DeleteAccount = (): IGraphQLRequest => ({
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

export default DeleteAccount;
