import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/login/Index";
import { isLoggedIn } from "./services/Authentication";
import Register from "./pages/register/Index";
import Lobby from "./pages/lobby/Index";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/lobby" component={Lobby} />
    </Switch>
  </BrowserRouter>
);

export default routes;
