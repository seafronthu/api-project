import React from "react";
import { Descriptions, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import useChart from "src/plugins/chart/useChart";
import ContainerFluid from "src/components/business/container/ContainerFluid";
// import { Chart } from "@antv/g2";
function ProjectDetail() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [refChart] = useChart(ref, { autoFit: true, height: 500 });
  React.useEffect(() => {
    function renderChart() {
      const chart = refChart.current;
      if (chart) {
        const data = [
          { year: "已发布", value: 3 },
          { year: "设计", value: 4 },
          { year: "待定", value: 1 },
          { year: "开发", value: 5 },
          { year: "对接", value: 5 },
          { year: "测试", value: 6 },
          { year: "已完成", value: 9 },
          { year: "异常", value: 1 },
          { year: "维护", value: 2 },
          { year: "废弃", value: 10 }
        ];
        chart.data(data);
        chart.tooltip({
          showMarkers: false
        });

        chart
          .interval()
          .position("year*value")
          .color("year", ["#00d29f", "#9c27b0", "#fc0", "#07a1ea", "#07a1ea", "#07a1ea", "#8bc34a", "#ea0707", "#f18f00", "#999"]);

        chart.interaction("element-highlight");
        chart.interaction("element-list-highlight");
        chart.interaction("legend-highlight");
        chart.interaction("axis-label-highlight");

        chart.render();
      }
    }
    renderChart();
    return () => {};
  });
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
      <div ref={ref}></div>
    </ContainerFluid>
  );
}
export default ProjectDetail;
