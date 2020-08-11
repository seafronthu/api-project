import React from "react";
import ContainerFluid, { PropTypes } from "./ContainerFluid";
import classnames from "classnames";

function ContainerFluidChild(props: PropTypes) {
  const newProps = {
    ...props,
    className: classnames(props.className, "flex-1 overflow-hidden")
  };
  return <ContainerFluid {...newProps}></ContainerFluid>;
}
export default ContainerFluidChild;
