import React from "react";
import { useLocation, useHistory } from "react-router-dom";
export default function Error404() {
  const loca = useLocation();
  const his = useHistory();
  React.useEffect(() => {
    if (loca.pathname !== "/login") {
      his.push("/login");
    }
  });
  return <div>Error404</div>;
}
