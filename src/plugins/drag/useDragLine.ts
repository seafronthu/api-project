import React, { RefObject } from "react";
import { useRafState } from "react-use";

interface PositionClient {
  clientX: number;
  clientY: number;
  downClientX: number;
  downClientY: number;
  upClientX: number;
  upClientY: number;
}
function useDragLine(
  ref: RefObject<HTMLElement>,
  position = {
    clientX: 0,
    clientY: 0,
    downClientX: 0,
    downClientY: 0,
    upClientX: 0,
    upClientY: 0
  }
): PositionClient {
  const [state, setState] = useRafState<PositionClient>(position);
  React.useEffect(() => {
    console.log("isMove", "isMove", "---------------");
    let isMove = false;
    const move = (e: MouseEvent) => {
      if (isMove) {
        const { clientX, clientY } = e;
        setState(({ downClientX, downClientY, upClientX, upClientY }) => ({
          clientX,
          clientY,
          downClientX,
          downClientY,
          upClientX,
          upClientY
        }));
      }
    };
    const down = (e: MouseEvent) => {
      isMove = true;
      setState(({ clientX, clientY, upClientX, upClientY }) => ({
        clientX,
        clientY,
        downClientX: e.clientX,
        downClientY: e.clientY,
        upClientX,
        upClientY
      }));
    };
    const up = (e: MouseEvent) => {
      isMove = false;
      setState(({ clientX, clientY, downClientX, downClientY }) => ({
        clientX,
        clientY,
        downClientX,
        downClientY,
        upClientX: e.clientX,
        upClientY: e.clientY
      }));
    };
    if (ref.current) {
      ref.current.addEventListener("mousedown", down, {
        capture: false,
        passive: true
      });

      ref.current.addEventListener("mousemove", move, {
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
        current.removeEventListener("mousemove", move);
        document.body.removeEventListener("mouseup", up);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
  return state;
}
export default useDragLine;
