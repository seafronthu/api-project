import React from "react";
import { Layout } from "antd";
import MenuGeneral from "./MenuGeneral";
const { Sider } = Layout;
function SliderMenu() {
  return (
    <Sider width={200} className="slider-menu">
      <MenuGeneral />
    </Sider>
  );
}
export default SliderMenu;
