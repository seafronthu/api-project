import { RoutePartial } from "src/types/route";
const Login = {
  path: "/login",
  name: "Login",
  exact: true,
  component: () => import(/* webpackChunkName: "Login" */ "src/views/sign/Login")
};
const Error403 = {
  path: "/403",
  name: "Error403",
  exact: true,
  component: () => import(/* webpackChunkName: "Error403" */ "src/views/error/Error403")
};
const Error404 = {
  path: "*",
  name: "Error404",
  exact: false,
  component: () => import(/* webpackChunkName: "Error404" */ "src/views/error/Error404")
};
const baseRoutes: {
  [key: string]: RoutePartial;
} = {
  Login,
  Error403,
  Error404
};
export default baseRoutes;
