import React from "react";
import { Menu } from "antd";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;
function MenuGeneral() {
  return (
    <Menu mode="inline" defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} style={{ height: "100%", borderRight: 0 }}>
      <SubMenu key="sub1" icon={<UserOutlined />} title="功能">
        <Menu.Item key="1">项目列表</Menu.Item>
        <Menu.Item key="2">API快速测试</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<LaptopOutlined />} title="数据分析">
        <Menu.Item key="5">分析报表</Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" icon={<NotificationOutlined />} title="公共资源">
        <Menu.Item key="9">数据结构</Menu.Item>
        <Menu.Item key="10">通用函数</Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" icon={<NotificationOutlined />} title="账户管理">
        <Menu.Item key="11">用户列表</Menu.Item>
        <Menu.Item key="12">权限列表</Menu.Item>
        <Menu.Item key="13">角色列表</Menu.Item>
        <Menu.Item key="14">个人信息</Menu.Item>
      </SubMenu>
    </Menu>
  );
}
export default MenuGeneral;
