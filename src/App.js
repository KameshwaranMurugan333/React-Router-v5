import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import PrivateRoute from "./router/privateRoute";
import { AppRoutes } from "./router/routes";
import { Home, Login, Profile, View } from "./screen";


const App = () => {
  return (
    <div>
      <Router>
        <Switch>

          {/* Default Route  */}

          {/* One way of defining component for default route. */}
          {/* <Route path={"/"}>
            <Login />
          </Route> */}

          {/* Login Screen Route */}
          <Route exact path={AppRoutes.login}>
            <Login />
          </Route>

          {/* Home Screen Route */}
          <PrivateRoute exact path={AppRoutes.home}>
            <Home />
          </PrivateRoute>

          {/* Profile Screen Route */}
          <PrivateRoute exact path={AppRoutes.profile}>
            <Profile />
          </PrivateRoute>

          {/* View Screen Route */}
          <PrivateRoute exact path={AppRoutes.view}>
            <View />
          </PrivateRoute>

          {/* Another way of defining component for default route. */}
          <Redirect from="/" to={AppRoutes.login} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
