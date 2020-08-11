import React from "react";
import { Button, Input, Menu, Dropdown } from "antd";
import DragLine, { DeviateDistance } from "src/components/basic/drag/DragLine";
import { PlusOutlined, EllipsisOutlined, ApiOutlined, RestOutlined } from "@ant-design/icons";
import "./SiderGroup.less";
const { Search } = Input;
const { SubMenu, Item } = Menu;
function SiderGroup() {
  const [deviate, setWidth] = React.useState({ width: 240, initWidth: 240 });
  const changeDistance = React.useCallback(({ deviateX, isDrag }: DeviateDistance) => {
    if (isDrag) {
      setWidth(({ initWidth }) => {
        const count = initWidth + deviateX;
        let width = count;
        if (count > 500) {
          width = 500;
        } else if (count < 240) {
          width = 240;
        }
        return {
          width,
          initWidth
        };
      });
    } else {
      setWidth(({ width, initWidth }) => {
        return {
          width,
          initWidth: width
        };
      });
    }
  }, []);
  function renderAction(title: string) {
    return (
      <div className="sider-group-sub-menu-title">
        {title}
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="0">
                <span>新建子分组</span>
              </Menu.Item>
              <Menu.Item key="1">
                <span>编辑</span>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="3">
                <span>删除</span>
              </Menu.Item>
            </Menu>
          }
          trigger={["click"]}
        >
          <span className="sider-group-dropdown-btn inline-flex flex-row-center" onClick={e => e.stopPropagation()}>
            <EllipsisOutlined style={{ fontSize: "25px" }} />
          </span>
        </Dropdown>
      </div>
    );
  }
  return (
    <div className="sider-group flex flex-row-start-stretch">
      <div
        className="inline-flex flex-column-start-stretch"
        style={{
          width: deviate.width + "px"
        }}
      >
        <div className="sider-group-add">
          <Button type="primary" icon={<PlusOutlined />}>
            添加
          </Button>
        </div>
        <div className="sider-group-search">
          <Search></Search>
        </div>
        <div className="flex-1">
          <Menu mode="inline" defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} style={{ height: "100%", borderRight: 0 }}>
            <Item key="8">
              <ApiOutlined />
              所有api
            </Item>
            <Item key="9">
              <RestOutlined />
              回收站
            </Item>
            <SubMenu key="sub1" title={renderAction("默认分组")}>
              <Item key="1">{renderAction("分组一")}</Item>
            </SubMenu>
            <SubMenu key="sub2" title={renderAction("总分组")}>
              <SubMenu key="sub2-sub1" title={renderAction("总分组一")}>
                <Item key="2">{renderAction("分组三")}</Item>
              </SubMenu>
              <Item key="3">{renderAction("分组四")}</Item>
            </SubMenu>
          </Menu>
        </div>
      </div>
      <DragLine deviateFn={changeDistance} className="sider-group-line"></DragLine>
    </div>
  );
}
export default SiderGroup;
