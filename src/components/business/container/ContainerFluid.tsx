import React, { useMemo } from "react";
import classnames from "classnames";
import { Spin } from "antd";
import { mergePrefixCls } from "src/libs/utils";
import { ClassValue } from "classnames/types";
import "./ContainerFluid.less";
export interface PropTypes {
  header?: React.ReactNode;
  children: React.ReactNode;
  spinning?: boolean;
  theme?: "black" | "white";
  tip?: string;
  padding?: boolean;
  className?: ClassValue;
  scrollClassName?: string | string[];
}
function ContainerFluid(props: PropTypes) {
  const { children, spinning, theme, padding, header, tip, scrollClassName, className } = props;
  const loading = typeof spinning === "boolean" ? spinning : false;
  const containerCls = useMemo(() => {
    return mergePrefixCls(
      "container-fluid-",
      [theme, typeof padding === "boolean" ? "padding" : null],
      "container-fluid width-full height-full",
      classnames(className)
    );
  }, [className, theme, padding]);
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
