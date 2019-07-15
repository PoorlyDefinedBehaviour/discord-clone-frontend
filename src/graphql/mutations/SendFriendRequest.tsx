import { IGraphQLRequest } from "../../types/IGraphQLRequest.d";

export const SendFriendRequest = (_id: string): IGraphQLRequest => ({
  query: `
mutation {
  send_friend_request(_id: "_id") {
    status
    errors {
      path
      message
    }
  }
}
`
});
