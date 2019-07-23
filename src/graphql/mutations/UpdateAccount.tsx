import { IGraphQLRequest } from "../../types/IGraphQLRequest.d";

export const UpdateAccount = (
  username: string,
  email: string,
  password: string
): IGraphQLRequest => ({
  query: `
mutation {
  update_account(username: "${username}", email: "${email}", password: "${password}") {
    status
    errors {
      path
      message
    }
    user {
      _id
      username
      email
    }
  }
}
`
});
