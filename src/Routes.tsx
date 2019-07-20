import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isLoggedIn, getUserId } from "./services/Authentication";

import Login from "./pages/login/Index";
import Register from "./pages/register/Index";
import Lobby from "./pages/lobby/Index";
import Landing from "./pages/landing/Index";

import api from "./services/Api";
import { User as UserQuery } from "./graphql/queries/User";
import { store } from "./store/Index";
import { Maybe } from "./types/Maybe.d";

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

export default function routes() {
  const refreshUser = async (): Promise<void> => {
    const _id: Maybe<string> = getUserId();

    if (!_id) return;

    try {
      const {
        data: {
          data: {
            user: { user }
          }
        }
      } = await api.post("", UserQuery(_id));

      store.dispatch({
        type: "SET_USER",
        user
      });
    } catch (ex) {
      console.error(ex);
    }
  };

  refreshUser();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/lobby" component={Lobby} />
      </Switch>
    </BrowserRouter>
  );
}
