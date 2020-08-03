import React, { memo, ReactChild } from "react";
import { getPrefixCls } from "../libs/utils";
interface PropTypes {
  children?: ReactChild;
  type?: "inset";
}
function MimicryContainer(props: PropTypes) {
  const { children, type } = props;
  const prefixCls = getPrefixCls("container", [type]);
  return <div className={prefixCls}>{children}</div>;
}
export default memo(MimicryContainer);
