import "./App.scss";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import routes from "./config/routes";
import AuthProvider from "./providers/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <RouteWithSubroutes key={index} {...route} />
          ))}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

function RouteWithSubroutes(route) {
  // console.log(route)
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component routes={route.routes} {...props} />}
    />
  );
}

export default App;
