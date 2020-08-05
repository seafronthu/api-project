import React from "react";
import { useScroll } from "react-use";
import DragLine, { DeviateDistance } from "src/components/basic/drag/DragLine";
function ProjectApi() {
  const scrollRef = React.useRef(null);
  const { x, y } = useScroll(scrollRef);
  const changeDistance = React.useCallback(({ deviateX, deviateY }: DeviateDistance) => {
    console.log(deviateX, deviateY);
  }, []);
  return (
    <>
      <div>x: {x}</div>
      <div>y: {y}</div>
      <div style={{ width: "200px", height: "100px", backgroundColor: "black" }}>
        <DragLine deviateFn={changeDistance}></DragLine>
      </div>
      <div
        ref={scrollRef}
        style={{
          width: "400px",
          height: "400px",
          backgroundColor: "whitesmoke",
          overflow: "scroll"
        }}
      >
        <div style={{ width: "2000px", height: "2000px" }}>Scroll me</div>
      </div>
    </>
  );
}
export default ProjectApi;
