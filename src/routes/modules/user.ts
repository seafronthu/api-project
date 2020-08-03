const PersonalInfo = {
  name: "PersonalInfo",
  path: "/personal-info",
  exact: true,
  component: () => import(/* webpackChunkName: "PersonalInfo" */ "src/views/user/PersonalInfo")
};
export default [PersonalInfo];
