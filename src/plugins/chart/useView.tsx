import React from "react";
import { Chart as AntvChart, View as AntvView } from "@antv/g2";
import { ViewCfg } from "@antv/g2/lib/interface";
function useView(chart: AntvChart, options: ViewCfg) {
  const [newView, setNewView] = React.useState<AntvView | null>();
  React.useEffect(() => {
    if (chart) {
      const view = chart.createView(options);
      setNewView(view);
    }
    return () => {
      if (chart) {
        chart.destroy();
      }
      setNewView(null);
    };
  }, [options, chart]);
  return [newView];
}
export default useView;
