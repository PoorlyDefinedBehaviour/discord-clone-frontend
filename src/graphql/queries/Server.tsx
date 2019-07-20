import { IGraphQLRequest } from "../../types/IGraphQLRequest.d";

export const Server = (_id: string): IGraphQLRequest => ({
  query: `
{
  server(_id: "${_id}") {
    status
    errors {
      path
      message
    }
    server {
      _id
      name
      owner {
        _id
        username
        email
        avatar
      }
      logo
      staff {
        _id
        username
        email
        avatar
      }
      members {
        _id
        username
        email
        avatar
      }
    }
  }
}
`
});
