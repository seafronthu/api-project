import React from "react";
import { Chart as AntvChart } from "@antv/g2";
import { ChartCfg } from "@antv/g2/lib/interface";
interface PropTyps {
  children: React.ReactNode;
  options: ChartCfg;
}
function useChart(props: PropTyps) {
  const [newChart, setNewChart] = React.useState<AntvChart | null>();
  const { options } = props;
  React.useEffect(() => {
    setNewChart(new AntvChart(options));
    if (newChart) {
      newChart.area();
    }
    return () => {
      if (newChart) {
        newChart.destroy();
      }
      setNewChart(null);
    };
  }, [options, newChart]);
}
export default useChart;
