import React from "react";
import { ConfigConsumer, ConfigContext } from "./context";
export { ConfigConsumer };
interface ConfigProviderProps {
  prefixCls?: string;
  children?: React.ReactNode;
}
const ConfigProvider: React.FC<ConfigProviderProps> = props => {
  const config = {
    ...props
  };
  return <ConfigContext.Provider value={config}>{props.children}</ConfigContext.Provider>;
};
export default ConfigProvider;
