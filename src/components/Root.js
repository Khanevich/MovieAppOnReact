import React from "react";
import { Provider } from "mobx-react";
import { moviesPageStore } from "../stores/moviesPageStore";
import { loginFormStore } from "../stores/loginFormStore";
import { userStore } from "../stores/userStore";
import MoviesScreen from "./screens/MoviesScreen/MoviesScreen";
import LoginFormScreen from "./screens/LoginFormScreen/LoginFormScreen";
import FiltersScreen from "./screens/FiltersScreen/Filters";
import { Router, Stack, Scene } from "react-native-router-flux";

class Root extends React.Component {
  render() {
    return (
      <Provider
        moviesPageStore={moviesPageStore}
        loginFormStore={loginFormStore}
        userStore={userStore}
      >
        <Router>
          <Stack key="root">
            <Scene
              key="login"
              component={LoginFormScreen}
              title="Login"
              hideNavBar
              initial
            />
            <Scene key="movies" component={MoviesScreen} title="Movies" />
            <Scene key="filters" component={FiltersScreen} title="Filters" />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

export default Root;
