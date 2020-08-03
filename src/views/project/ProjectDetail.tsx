import React from "react";
import { Descriptions, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
// import Chart from "src/plugins/chart/Chart";
import ContainerFluid from "src/components/business/container/ContainerFluid";
function ProjectDetail() {
  function renderTitle() {
    return (
      <Button className="text-bold heading-color font-size-lg" type="text">
        项目名称
        <EditOutlined />
      </Button>
    );
  }
  return (
    <ContainerFluid theme="white" padding>
      <Descriptions title={renderTitle()}>
        <Descriptions.Item label="API总数">5</Descriptions.Item>
        <Descriptions.Item label="协作人员数量">1人</Descriptions.Item>
        <Descriptions.Item label="版本号">V1.0</Descriptions.Item>
        <Descriptions.Item label="状态码总数">10</Descriptions.Item>
        <Descriptions.Item label="更新时间">2020-08-03 14:28:05</Descriptions.Item>
        <Descriptions.Item label="项目文档总数">1</Descriptions.Item>
      </Descriptions>
    </ContainerFluid>
  );
}
export default ProjectDetail;
