import React from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "antd";
import MenuGeneral from "./MenuGeneral";
import MenuProject from "./MenuProject";
import projects from "src/routes/modules/project";
const { Sider } = Layout;

function SliderMenu() {
  let location = useLocation();
  const isProject: boolean = React.useMemo(() => {
    const { pathname } = location;
    for (let i = 0; i < projects.length; ++i) {
      const { path } = projects[i];
      if (pathname !== "/project-list" && ~location.pathname.indexOf(path)) {
        return true;
      }
    }
    return false;
  }, [location]);
  function SwitchMenu(isProject: boolean) {
    if (isProject) {
      return <MenuProject />;
    }
    return <MenuGeneral />;
  }
  return (
    <Sider width={200} className="slider-menu">
      {SwitchMenu(isProject)}
    </Sider>
  );
}
export default SliderMenu;
