import { IGraphQLRequest } from "../../types/IGraphQLRequest.d";

export const Register = (
  username: string,
  email: string,
  password: string
): IGraphQLRequest => ({
  query: `
mutation {
  register(username: "${username}",email: "${email}", password: "${password}") {
    status
    errors {
      path
      message
    }
    token
    user{
      _id
      username
      email
      avatar
      servers {
        _id
        name
        logo
      }
    }
  }
}
`
});
