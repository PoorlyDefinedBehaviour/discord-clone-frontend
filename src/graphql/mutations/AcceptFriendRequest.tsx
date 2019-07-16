import { IGraphQLRequest } from "../../types/IGraphQLRequest.d";

export const AcceptFriendRequest = (_id: string): IGraphQLRequest => ({
  query: `
mutation {
  accept_friend_request(_id: "${_id}") {
    status
    errors {
      path
      message
    }
    token
    user {
      _id
      username
      email
      avatar
      friends {
        _id
        username
        avatar
        email
      }
    }
  }
}`
});
