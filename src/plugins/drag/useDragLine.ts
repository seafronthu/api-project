import React, { RefObject } from "react";
import { useRafState } from "react-use";

interface PositionClient {
  clientX: number;
  clientY: number;
  downClientX: number;
  downClientY: number;
  upClientX: number;
  upClientY: number;
  isDrag: boolean;
}
function useDragLine(
  ref: RefObject<HTMLElement>,
  position = {
    clientX: 0,
    clientY: 0,
    downClientX: 0,
    downClientY: 0,
    upClientX: 0,
    upClientY: 0,
    isDrag: false
  }
): PositionClient {
  const frame = React.useRef(0);
  const isDrag = React.useRef(false);
  const [state, setState] = useRafState<PositionClient>(position);
  React.useEffect(() => {
    console.log("isMove", "isMove", "---------------");
    const move = (e: MouseEvent) => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        if (isDrag.current && ref.current) {
          const { clientX, clientY } = e;
          setState(({ downClientX, downClientY, upClientX, upClientY }) => ({
            clientX,
            clientY,
            downClientX,
            downClientY,
            upClientX,
            upClientY,
            isDrag: isDrag.current
          }));
        }
      });
    };
    const down = (e: MouseEvent) => {
      isDrag.current = true;
      setState(({ upClientX, upClientY }) => ({
        clientX: e.clientX,
        clientY: e.clientY,
        downClientX: e.clientX,
        downClientY: e.clientY,
        upClientX,
        upClientY,
        isDrag: isDrag.current
      }));
    };
    const up = (e: MouseEvent) => {
      isDrag.current = false;
      setState(({ downClientX, downClientY }) => ({
        clientX: e.clientX,
        clientY: e.clientY,
        downClientX,
        downClientY,
        upClientX: e.clientX,
        upClientY: e.clientY,
        isDrag: isDrag.current
      }));
    };
    if (ref.current) {
      ref.current.addEventListener("mousedown", down, {
        capture: false,
        passive: true
      });

      document.body.addEventListener("mousemove", move, {
        capture: false,
        passive: true
      });

      document.body.addEventListener("mouseup", up, {
        capture: false,
        passive: true
      });
    }

    return () => {
      const { current } = ref;
      if (current) {
        current.removeEventListener("mousedown", down);
        document.body.removeEventListener("mousemove", move);
        document.body.removeEventListener("mouseup", up);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
  return state;
}
export default useDragLine;
