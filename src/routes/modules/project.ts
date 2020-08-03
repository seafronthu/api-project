const ProjectList = {
  name: "ProjectList",
  path: "/project-list",
  exact: true,
  component: () => import(/* webpackChunkName: "ProjectList" */ "src/views/project/ProjectList")
};
const ProjectDetail = {
  name: "ProjectDetail",
  path: "/project-list/project-detail",
  exact: true,
  component: () => import(/* webpackChunkName: "ProjectDetail" */ "src/views/project/ProjectDetail")
};

const ProjectApi = {
  name: "ProjectApi",
  path: "/project-list/project-api",
  exact: true,
  component: () => import(/* webpackChunkName: "ProjectApi" */ "src/views/project/ProjectApi")
};

const ProjectTestApi = {
  name: "ProjectTestApi",
  path: "/project-list/project-test-api",
  exact: true,
  component: () => import(/* webpackChunkName: "ProjectTestApi" */ "src/views/project/ProjectTestApi")
};
export default [ProjectList, ProjectDetail, ProjectApi, ProjectTestApi];
