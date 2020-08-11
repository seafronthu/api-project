import React from "react";
import { Button, Input } from "antd";
import { PlusOutlined, FileSearchOutlined, SearchOutlined } from "@ant-design/icons";
function ApiListActionHeader() {
  return (
    <div className="flex flex-row-between-center">
      <div>
        <Button type="primary" icon={<PlusOutlined />}>
          Search
        </Button>
      </div>
      <div className="flex flex-row-end-center">
        <div>
          <Input placeholder="Enter your 接口名" prefix={<SearchOutlined />} />
        </div>
        <div>
          <FileSearchOutlined />
          列表项
        </div>
      </div>
    </div>
  );
}
export default ApiListActionHeader;
