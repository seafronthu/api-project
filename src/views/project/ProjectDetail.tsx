import React from "react";
import { Descriptions, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import useChart from "src/plugins/chart/useChart";
import ContainerFluid from "src/components/business/container/ContainerFluid";
// import { Chart } from "@antv/g2";
function ProjectDetail() {
  const ref = React.useRef<HTMLDivElement>(null);
  useChart(ref, { width: 200, height: 500 });
  // console.log(chart, "chart");
  // function renderChart(chart: Chart | null | undefined) {
  //   if (chart) {
  //     const data = [
  //       { year: "1991", value: 3 },
  //       { year: "1992", value: 4 },
  //       { year: "1993", value: 3.5 },
  //       { year: "1994", value: 5 },
  //       { year: "1995", value: 4.9 },
  //       { year: "1996", value: 6 },
  //       { year: "1997", value: 7 },
  //       { year: "1998", value: 9 },
  //       { year: "1999", value: 13 }
  //     ];
  //     chart.data(data);
  //     chart.scale({
  //       year: {
  //         range: [0, 1]
  //       },
  //       value: {
  //         min: 0,
  //         nice: true
  //       }
  //     });

  //     chart.tooltip({
  //       showCrosshairs: true, // 展示 Tooltip 辅助线
  //       shared: true
  //     });

  //     chart.line().position("year*value").label("value");
  //     chart.point().position("year*value");

  //     chart.render();
  //   }
  // }
  // React.useEffect(() => {
  //   console.log(ref.current, "nb");
  //   return () => {};
  // });
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
      <div ref={ref}></div>
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
