import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { AppRoutes } from "./router/routes";
import { Home, Login, Profile } from "./screen";


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
          <Route path={AppRoutes.login}>
            <Login />
          </Route>

          {/* Home Screen Route */}
          <Route path={AppRoutes.home}>
            <Home />
          </Route>

          {/* Profile Screen Route */}
          <Route path={AppRoutes.profile}>
            <Profile />
          </Route>

          {/* Another way of defining component for default route. */}
          <Redirect from="/" to={AppRoutes.login} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
