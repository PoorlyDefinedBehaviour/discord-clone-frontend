import { IGraphQLRequest } from "../../types/IGraphQLRequest.d";

export const Users = (page: number): IGraphQLRequest => ({
  query: `
{
  users(page: 0) {
    status
    page
    errors {
      path
      message
    }
    users {
      _id
      createdAt
      updatedAt
      username
      email
      avatar
      friends {
        _id
        username
        email
        avatar
      }
      friend_requests {
        _id
        username
        email
        avatar
      }
      servers {
        _id
        name
        owner {
          _id
          username
          email
          avatar
        }
      }
    }
  }
}
`
});
