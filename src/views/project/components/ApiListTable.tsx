import React from "react";
import { Table, Tag, Dropdown, Button, Menu } from "antd";
import { ColumnsType } from "antd/lib/table";
import { DownOutlined } from "@ant-design/icons";

// enum method = {"GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS", "PATCH"}
type Method = "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "OPTIONS" | "PATCH";
type StatusName = "已发布" | "设计" | "待定" | "开发" | "对接" | "测试" | "已完成" | "异常" | "维护" | "废弃";
interface ApiINF {
  name: string;
  url: string;
  key: string;
  statusName: StatusName;
  method: Method;
  leader: string;
  creator: string;
  createTime: string;
  updater: string;
  updateTime: string;
}

enum StatusEnum {
  已发布 = "#00d29f",
  设计 = "#9c27b0",
  待定 = "#fc0",
  开发 = "#07a1ea",
  对接 = "#07a1ea",
  测试 = "#07a1ea",
  已完成 = "#8bc34a",
  异常 = "#ea0707",
  维护 = "#f18f00",
  废弃 = "#999"
}
enum MethodEnum {
  GET = "green",
  POST = "blue",
  PUT = "cyan",
  DELETE = "geekblue",
  HEAD = "purple",
  OPTIONS = "magenta",
  PATCH = "volcano"
}
const menu = (
  <Menu>
    <Menu.Item>
      <Button type="link">编辑</Button>
    </Menu.Item>
    <Menu.Item>
      <Button type="link">删除</Button>
    </Menu.Item>
  </Menu>
);
const chooseColor = (statusName: StatusName): string => {
  return StatusEnum[statusName];
};
const chooseMethod = (method: Method): string => {
  return MethodEnum[method];
};
const columns: ColumnsType<ApiINF> = [
  {
    title: "API Name",
    width: 200,
    dataIndex: "name",
    key: "name",
    fixed: "left",
    filters: [
      { text: "已发布", value: "已发布" },
      { text: "设计", value: "设计" },
      { text: "待定", value: "待定" },
      { text: "开发", value: "开发" },
      { text: "对接", value: "对接" },
      { text: "测试", value: "测试" },
      { text: "已完成", value: "已完成" },
      { text: "异常", value: "异常" },
      { text: "维护", value: "维护" },
      { text: "废弃", value: "废弃" }
    ],
    onFilter: (value, record) => {
      return value === record.statusName;
    },
    render: (text, record) => {
      return (
        <div>
          <Tag color={chooseColor(record.statusName)}>{record.statusName}</Tag>
          {text}
        </div>
      );
    }
  },
  {
    title: "接口地址",
    width: 100,
    dataIndex: "url",
    key: "url",
    fixed: "left"
  },
  {
    title: "请求方式",
    width: 150,
    dataIndex: "method",
    key: "method",
    filters: [
      { text: "GET", value: "GET" },
      { text: "POST", value: "POST" },
      { text: "DELETE", value: "DELETE" },
      { text: "HEAD", value: "HEAD" },
      { text: "OPTIONS", value: "OPTIONS" },
      { text: "OPTIPATCHONS", value: "PATCH" }
    ],
    onFilter: (value, record) => {
      return value === record.method;
    },
    render: text => {
      return <Tag color={chooseMethod(text)}>{text}</Tag>;
    }
  },
  {
    title: "负责人",
    dataIndex: "leader",
    key: "leader",
    width: 150
  },
  {
    title: "创建者",
    dataIndex: "creator",
    key: "creator",
    width: 150
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
    key: "createTime",
    width: 150
  },
  {
    title: "最新更新者",
    dataIndex: "updater",
    key: "updater",
    width: 150
  },
  {
    title: "最新更新时间",
    dataIndex: "updateTime",
    key: "updateTime",
    width: 150
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 150,
    render: () => (
      <div className="flex flex-row-center">
        <Button type="link">审核</Button>
        <Dropdown overlay={menu}>
          <Button type="link">
            更多
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>
    )
  }
];
const data: ApiINF[] = [];
for (let i = 0; i < 100; i++) {
  let ms: Method[] = ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS", "PATCH"];
  const method: Method = ms[(Math.random() * 7) | 0];
  let ss: StatusName[] = ["已发布", "设计", "待定", "开发", "对接", "测试", "已完成", "异常", "维护", "废弃"];
  const statusName: StatusName = ss[(Math.random() * 10) | 0];
  data.push({
    name: "接口" + (i + 1),
    url: "/api/" + i,
    method,
    statusName,
    key: i.toString(),
    leader: "领导" + (i + 1),
    creator: "创建者" + (i + 1),
    createTime: "创建时间" + new Date(),
    updater: "更新者" + (i + 1),
    updateTime: "更新时间" + new Date()
  });
}

function ApiListTable() {
  return (
    <Table
      className="height-full"
      columns={columns}
      dataSource={data}
      scroll={{ x: 1500, y: "calc(100% - 55px)" }}
      pagination={{ position: ["bottomRight"] }}
    />
  );
}
export default ApiListTable;
