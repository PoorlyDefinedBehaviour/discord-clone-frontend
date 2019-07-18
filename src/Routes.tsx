import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isLoggedIn } from "./services/Authentication";

import Login from "./pages/login/Index";
import Register from "./pages/register/Index";
import Lobby from "./pages/lobby/Index";
import Landing from "./pages/landing/Index";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/lobby" component={Lobby} />
    </Switch>
  </BrowserRouter>
);

export default routes;
