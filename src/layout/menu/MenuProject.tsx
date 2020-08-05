import React from "react";
import { Menu, Button } from "antd";
import { useHistory } from "react-router-dom";
import { UserOutlined, LaptopOutlined, RollbackOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;
function MenuProject() {
  const history = useHistory();
  return (
    <div className="menu-project">
      <Button className="menu-project-return-btn" onClick={() => history.push("/project-list")} type="default" icon={<RollbackOutlined />}>
        返回项目列表
      </Button>
      <Menu mode="inline" defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} style={{ height: "100%", borderRight: 0 }}>
        <SubMenu key="sub1" icon={<UserOutlined />} title="项目">
          <Menu.Item key="1" onClick={() => history.push("/project-list/project-detail")}>
            项目概况
          </Menu.Item>
          <Menu.Item key="2" onClick={() => history.push("/project-list/project-version")}>
            项目版本
          </Menu.Item>
          <Menu.Item key="3" onClick={() => history.push("/project-list/project-api")}>
            API
          </Menu.Item>
          <Menu.Item key="4">状态码</Menu.Item>
          <Menu.Item key="5">项目动态</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="管理">
          <Menu.Item key="6">权限管理</Menu.Item>
          <Menu.Item key="7">日志</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
}
export default MenuProject;
