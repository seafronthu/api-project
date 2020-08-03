import React, { useMemo } from "react";
import classnames from "classnames";
import { Spin } from "antd";
import { mergePrefixCls } from "src/libs/utils";
import "./ContainerFluid.less";
interface PropTypes {
  header?: React.ReactNode;
  children: React.ReactNode;
  spinning?: boolean;
  theme?: "black";
  tip?: string;
  className?: string;
  scrollClassName?: string | string[];
}
function ContainerFluid(props: PropTypes) {
  const { children, spinning, theme, header, tip, scrollClassName, className } = props;
  const loading = typeof spinning === "boolean" ? spinning : false;
  const containerCls = useMemo(() => {
    return mergePrefixCls(null, theme, "container-fluid width-full height-full", className);
  }, [className, theme]);
  const scrollCls = useMemo(() => {
    return classnames(["container-fluid-scroll", scrollClassName]);
  }, [scrollClassName]);
  return (
    <div className={containerCls}>
      <Spin spinning={loading} size="large" tip={tip}>
        {header ? <div className="container-fluid-header">{header}</div> : null}
        <div className={scrollCls}>{children}</div>
      </Spin>
    </div>
  );
}
export default ContainerFluid;
