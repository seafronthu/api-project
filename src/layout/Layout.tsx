import React from "react";
import { Layout } from "antd";
// import loadable from "@loadable/component";
// import { useSelector } from "react-redux";
import "./index.less";
import Header from "./header";
import Menu from "./menu";
const { Content } = Layout;
interface PropTypes {
  children: React.ReactNode;
}
function MainLayout(props: PropTypes) {
  const { children } = props;
  console.log(children);
  return (
    <Layout className="main-layout flex flex-column-start-stretch">
      <Header></Header>
      <Layout className="flex flex-row-start">
        <Menu />
        <Layout className="flex flex-column-start-stretch flex-1 main">
          <Content
            className="main-layout-content"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
export default MainLayout;
