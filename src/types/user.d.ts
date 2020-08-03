export type UserStatus = "online" | "offline"; // 用户状态
export interface UserState {
  status: Status;
}
export interface UserAction {
  type: symbol;
  playload: { status: Status };
}
