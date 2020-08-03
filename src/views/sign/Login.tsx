import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { changeUserStatus } from "src/redux/modules/user";
import { UserStatus } from "src/types/user";
import "./Login.less";
import { Button, Input } from "src/components/basic";
interface PropTypes {
  changeUserStatus: (status: UserStatus) => void;
}
function Login(props: PropTypes) {
  const { changeUserStatus } = props;
  console.log(props);
  let history = useHistory();
  // let location = useLocation();
  function handleClick() {
    changeUserStatus("online");
    history.push("/project-list");
  }
  return (
    <div className="login flex flex-row-center-start">
      <form className="form">
        <h1 className="title">Sign up</h1>
        <ul className="list">
          <li>
            <Input type="text" size="large" placeholder="账号" round></Input>
          </li>
          <li>
            <Input type="password" size="large" placeholder="密码" round></Input>
          </li>
        </ul>
        <Button onClick={handleClick} size="large" block round>
          登录
        </Button>
      </form>
    </div>
  );
}
export default connect(null, dispatch => ({
  changeUserStatus(status: UserStatus) {
    dispatch(changeUserStatus(status));
  }
}))(Login);
