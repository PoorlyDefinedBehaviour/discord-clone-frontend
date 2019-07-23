import { IGraphQLRequest } from "../../types/IGraphQLRequest.d";

export const JoinServer = (_id: string): IGraphQLRequest => ({
  query: `
  mutation {
    join_server(_id: "${_id}") {
      status
      errors {
        path
        message
      }
      server {
        _id
        name
        logo
        owner {
          _id
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
        members {
          _id
          username
          email
          avatar
        }
        staff {
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
