import React from "react";
import { Button, Input } from "antd";
import { PlusOutlined, ExportOutlined } from "@ant-design/icons";
import ProjectCard from "./components/ProjectCard";
import ContainerFluid from "src/components/business/container/ContainerFluid";
import "./ProjectList.less";
const { Search } = Input;
function ProjectList() {
  const renderHeader = () => {
    return (
      <div className="project-list-header flex flex-row-between-center flex-wrap">
        <ul className="no-ul flex flex-row-start-center flex-wrap">
          <li>
            <Button type="primary" icon={<PlusOutlined />}>
              新建API项目
            </Button>
          </li>
          <li>
            <Button type="text" icon={<ExportOutlined />}>
              导出
            </Button>
          </li>
        </ul>
        <div>
          <Search placeholder="项目名称" enterButton="搜索" onSearch={value => console.log(value)} />
        </div>
      </div>
    );
  };
  return (
    <ContainerFluid className="project-list" spinning={false} header={renderHeader()}>
      <ProjectCard />
    </ContainerFluid>
  );
}
export default ProjectList;
