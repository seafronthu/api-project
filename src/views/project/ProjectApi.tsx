import React from "react";
import SiderGroup from "src/components/business/sider/SiderGroup";
import { ContainerFluid, ContainerFluidChild } from "src/components/business/container";
import ApiListTable from "./components/ApiListTable";
import ApiListActionHeader from "./components/ApiListActionHeader";
import "./ProjectApi.less";
function ProjectApi() {
  return (
    <ContainerFluid className="project-api" scrollClassName="flex flex-row-start-stretch">
      <SiderGroup></SiderGroup>
      {/* <div className="flex-1">
        <div style={{ width: "2000px", height: "2000px" }}>Scroll me</div>
      </div> */}
      <ContainerFluidChild theme="white" header={<ApiListActionHeader />}>
        <ApiListTable></ApiListTable>
      </ContainerFluidChild>
    </ContainerFluid>
  );
}
export default ProjectApi;
