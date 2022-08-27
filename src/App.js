import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
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
          <Route exact path={AppRoutes.home}>
            <Home />
          </Route>

          {/* Profile Screen Route */}
          <Route exact path={AppRoutes.profile}>
            <Profile />
          </Route>

          {/* View Screen Route */}
          <Route exact path={AppRoutes.view}>
            <View />
          </Route>

          {/* Another way of defining component for default route. */}
          <Redirect from="/" to={AppRoutes.login} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
