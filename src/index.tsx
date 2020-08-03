import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import store from "src/redux";
import "src/assets/css/ant.less";
import "src/components/basic/styles/index.less";
import "src/assets/css/common.less";
// import App from "./App";
import App from "src/routes";
// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
