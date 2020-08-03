import React from "react";
import { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { UserState } from "src/types/user";
import base from "./base";
import allRoutes from "src/routes/modules";
// import loadable from "@loadable/component";
// loadable(component, { fallback: <div>loading</div> })
import config from "src/configs";
import { UserStatus } from "src/types/user";
const type = config.mode;
const Layout = React.lazy(() => import(/* webpackChunkName: "Layout" */ "src/layout"));
const Login = React.lazy(base.Login.component);
const Error404 = React.lazy(base.Error404.component);
function onlineRoute() {
  return (
    <Switch>
      {[...allRoutes, base.Error403, base.Error404].map(items => {
        const { path, exact, component, name } = items;
        const LazyComponent = React.lazy(component);
        return (
          <Route
            key={name}
            path={path}
            exact={exact}
            strict={true}
            component={() => (
              <React.Suspense fallback={<div>loading……</div>}>
                <LazyComponent />
              </React.Suspense>
            )}
          ></Route>
        );
      })}
    </Switch>
  );
}
function renderRoute(status: UserStatus) {
  return (
    <React.Suspense fallback={<div>loading……</div>}>
      <Switch>
        <Route
          key={base.Login.name}
          path={base.Login.path}
          exact={base.Login.exact}
          strict={true}
          component={() => (
            <React.Suspense fallback={<div>loading……</div>}>
              <Login />
            </React.Suspense>
          )}
        ></Route>
        {status === "online" ? (
          <Route
            key="Layout"
            path="/"
            strict={true}
            component={() => (
              <React.Suspense fallback={<div>loading……</div>}>
                <Layout>{onlineRoute()}</Layout>
              </React.Suspense>
            )}
          ></Route>
        ) : null}
        <Route
          key={base.Error404.name}
          path={base.Error404.path}
          exact={base.Error404.exact}
          strict={true}
          component={() => (
            <React.Suspense fallback={<div>loading……</div>}>
              <Error404 />
            </React.Suspense>
          )}
        ></Route>
      </Switch>
    </React.Suspense>
  );
}
interface PropTypes {
  status: UserStatus;
}
function App(props: PropTypes) {
  // let location = useLocation();
  const { status } = props;
  // useEffect(() => {
  //   console.log(props);
  // });
  if (type === "hash") {
    return <HashRouter>{renderRoute(status)}</HashRouter>;
  }
  return <BrowserRouter>{renderRoute(status)}</BrowserRouter>;
}
export default connect((state: { userApp: UserState }) => {
  return state.userApp;
})(App);
