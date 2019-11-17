import IGraphQLRequest from "../../types/IGraphQLRequest.d";

const Login = (email: string, password: string): IGraphQLRequest => ({
  query: `
mutation {
  login(email: "${email}", password: "${password}") {
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
        logo
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

export default Login;
