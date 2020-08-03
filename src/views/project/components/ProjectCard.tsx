import React from "react";
import { Card } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
const { Meta } = Card;
function ProjectCard() {
  return (
    <ul className="project-card flex flex-row-between-start flex-wrap">
      {Array(20)
        .fill(0)
        .map((v, i) => {
          return (
            <li key={i}>
              <Card
                hoverable
                style={{ width: 250 }}
                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
              >
                <Meta title="Card title" description="This is the description" />
              </Card>
            </li>
          );
        })}
    </ul>
  );
}
export default ProjectCard;
