import React from "react";
import { Chart as AntvChart } from "@antv/g2";
import { ViewCfg } from "@antv/g2/lib/interface";
interface PropTyps {
  children: React.ReactNode;
  options: ViewCfg;
}
function useView(props: PropTyps) {
  const [newChart, setNewChart] = React.useState<AntvChart | null>();
  const { options, children } = props;
  React.useEffect(() => {
    return () => {
      if (newChart) {
        newChart.destroy();
      }
      setNewChart(null);
    };
  }, [options, newChart]);
}
export default useView;
