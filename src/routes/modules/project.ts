const ProjectList = {
  name: "ProjectList",
  path: "/project-list",
  exact: true,
  component: () => import(/* webpackChunkName: "ProjectList" */ "src/views/project/ProjectList")
};
export default [ProjectList];
