import React from "react";
import { useScroll } from "react-use";
import DragLine, { DeviateDistance } from "src/components/basic/drag/DragLine";
function ProjectApi() {
  const scrollRef = React.useRef(null);
  const [deviate, setWidth] = React.useState({ width: 500, initWidth: 500 });
  const { x, y } = useScroll(scrollRef);
  const changeDistance = React.useCallback(({ deviateX, isDrag }: DeviateDistance) => {
    if (isDrag) {
      setWidth(({ initWidth }) => {
        const count = initWidth + deviateX;
        const width = count < 100 ? 100 : count;
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
  return (
    <>
      <div>x: {x}</div>
      <div>y: {y}</div>
      <div style={{ width: "100px", height: "200px", backgroundColor: "black" }}>
        <DragLine deviateFn={changeDistance}></DragLine>
      </div>
      <div
        ref={scrollRef}
        style={{
          width: `${deviate.width}px`,
          height: "400px",
          backgroundColor: "red",
          overflow: "scroll"
        }}
      >
        <div style={{ width: "2000px", height: "2000px" }}>Scroll me</div>
      </div>
    </>
  );
}
export default ProjectApi;
