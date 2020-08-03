import React, { ReactChild, memo, useMemo } from "react";
import { getPrefixCls } from "../libs/utils";
interface PropTypes {
  loading?: boolean;
  children?: ReactChild;
  block?: boolean;
  size?: "small" | "large";
  circle?: boolean | string;
  round?: boolean | string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
function FrontMimicryButton(props: PropTypes) {
  const { children, onClick, circle, round, block, size } = props;
  const btnCls = useMemo(() => {
    let oneOfSize;
    if (size === "small") {
      oneOfSize = "sm";
    } else if (size === "large") {
      oneOfSize = "lg";
    }
    return getPrefixCls("btn", [circle ? "circle" : null, round ? "round" : null, block ? "block" : null, oneOfSize]);
  }, [block, circle, round, size]);
  const btnStyle = useMemo(() => {
    let style: React.CSSProperties = {};
    if (typeof circle === "string") {
      style.width = circle;
      style.height = circle;
    }
    if (typeof round === "string") {
      style.borderRadius = round;
    }
    return style;
  }, [circle, round]);
  return (
    <button className={btnCls} style={btnStyle} onClick={onClick}>
      {children}
    </button>
  );
}
export default memo(FrontMimicryButton);
