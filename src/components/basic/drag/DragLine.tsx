import React from "react";
import classNames from "classnames";
import useDragLine from "src/plugins/drag/useDragLine";
import { ClassValue } from "classnames/types";
export interface DeviateDistance {
  deviateX: number;
  deviateY: number;
  isDrag: boolean;
}

interface PropTypes {
  deviateFn: ({ deviateX, deviateY, isDrag }: DeviateDistance) => void;
  className?: ClassValue;
  children?: React.ReactNode;
}
function changeStyle(status: boolean) {
  const id = "drag_style";
  const dom = document.getElementById(id);
  if ((dom && status) || (!dom && !status)) {
    return;
  }
  if (dom && !status) {
    document.head.removeChild(dom);
    return;
  }
  if (!dom && status) {
    const styleDom = document.createElement("style");
    styleDom.id = id;
    const textNode = document.createTextNode("*{cursor: col-resize!important;user-select:none;}");
    styleDom.appendChild(textNode);
    document.head.appendChild(styleDom);
  }
}
function DragLine(props: PropTypes) {
  const { deviateFn, className, children } = props;
  const dragRef = React.useRef(null);
  const { clientX, clientY, downClientX, downClientY, isDrag } = useDragLine(dragRef);
  const classes = React.useMemo(() => {
    return classNames([className, "width-full height-full user-select-none col-resize"]);
  }, [className]);
  const deviateCallback = React.useCallback(deviateFn, [deviateFn]);
  React.useEffect(() => {
    function deviate() {
      changeStyle(isDrag);
      // console.log(clientX, downClientX, clientX - downClientX);
      return { deviateX: clientX - downClientX, deviateY: clientY - downClientY, isDrag };
    }
    deviateCallback(deviate());
    return () => changeStyle(false);
  }, [clientX, clientY, deviateCallback, downClientX, downClientY, isDrag]);
  return (
    <div ref={dragRef} className={classes}>
      {children}
    </div>
  );
}
export default DragLine;
