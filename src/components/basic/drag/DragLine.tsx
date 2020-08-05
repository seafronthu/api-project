import React from "react";
import classNames from "classnames";
import useDragLine from "src/plugins/drag/useDragLine";
import { ClassValue } from "classnames/types";
export interface DeviateDistance {
  deviateX: number;
  deviateY: number;
}

interface PropTypes {
  deviateFn: ({ deviateX, deviateY }: DeviateDistance) => void;
  className?: ClassValue;
  children?: React.ReactNode;
}
function DragLine(props: PropTypes) {
  const { deviateFn, className, children } = props;
  const dragRef = React.useRef(null);
  const { clientX, clientY, downClientX, downClientY } = useDragLine(dragRef);
  const classes = React.useMemo(() => {
    return classNames([className, "width-full height-full"]);
  }, [className]);
  const deviateCallback = React.useCallback(deviateFn, [deviateFn]);
  React.useEffect(() => {
    function deviate() {
      return { deviateX: clientX - downClientX, deviateY: clientY - downClientY };
    }
    deviateCallback(deviate());
  }, [clientX, clientY, deviateCallback, downClientX, downClientY]);
  return (
    <div ref={dragRef} className={classes}>
      {children}
    </div>
  );
}
export default DragLine;
