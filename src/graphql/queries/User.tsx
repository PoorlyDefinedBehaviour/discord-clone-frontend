import { IGraphQLRequest } from "../../types/IGraphQLRequest.d";

export const User = (_id: string): IGraphQLRequest => ({
  query: `
{
  user(_id: "${_id}") {
    status
    errors {
      path
      message
    }
    user {
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
