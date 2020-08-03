import { UserState, UserAction, UserStatus } from "src/types/user";
const CHANGE_USER_STATUS = Symbol("user/change_user_status");
const initialState: UserState = {
  status: localStorage.getItem("userStatus") || "offline"
};
export default function userApp(state = initialState, action: UserAction) {
  const { type, playload } = action;
  if (type === CHANGE_USER_STATUS) {
    localStorage.setItem("userStatus", playload.status);
    return {
      ...state,
      status: playload.status
    };
  }
  return state;
}
export function changeUserStatus(status: UserStatus) {
  return {
    type: CHANGE_USER_STATUS,
    playload: {
      status
    }
  };
}
