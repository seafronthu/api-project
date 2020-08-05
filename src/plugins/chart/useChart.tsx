import React, { RefObject } from "react";
import { Chart } from "@antv/g2";
import { ChartCfg } from "@antv/g2/lib/interface";
export type NewChartCfg = Omit<ChartCfg, "container">;
function useChart(ref: RefObject<HTMLElement>, options: NewChartCfg) {
  const newChart = React.useRef<Chart | null>();
  React.useEffect(() => {
    if (ref.current) {
      newChart.current = new Chart({ container: ref.current, ...options });
    }
    // return () => {};
    return () => {
      if (newChart.current) {
        newChart.current.destroy();
      }
    };
  }, [options, ref]);
  // console.log(newChart.current);
  return [newChart];
}
export default useChart;
