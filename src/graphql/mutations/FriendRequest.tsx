import IGraphQLRequest from "../../types/IGraphQLRequest.d";

const FriendRequest = (_id: string): IGraphQLRequest => ({
  query: `
mutation {
  send_friend_request(_id: "${_id}") {
    status
    errors {
      path
      message
    }
  }
}
`
});

export default FriendRequest;
