import React from "react";
import { addCount, reduceCount, CountState, Action, customCount } from "src/redux/modules/count";
import FrontMimicryButton from "src/components/basic/button/Button";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
interface PropTypes {
  count: number | string;
  addCount: () => Action;
  reduceCount: () => Action;
  customCount: (value: string) => Action;
}
const NewFrontMimicryButton = FrontMimicryButton; // memo(FrontMimicryButton); // 提升性能，防止改变父组件反复渲染
function Counter(props: PropTypes) {
  console.log("counter， render");
  const { addCount, reduceCount, count, customCount } = props;
  return (
    <div>
      <NewFrontMimicryButton size="large" onClick={addCount}>
        +
      </NewFrontMimicryButton>
      <input type="text" value={count.toString()} onChange={(e: { target: { value: string } }) => customCount(e.target.value)} />
      {count === 0 ? null : <NewFrontMimicryButton onClick={reduceCount}>-</NewFrontMimicryButton>}
    </div>
  );
}
export default connect(
  (state: { countApp: CountState }) => {
    return state.countApp;
  },
  dispatch => {
    return bindActionCreators(
      {
        addCount,
        customCount,
        reduceCount
      },
      dispatch
    );
  }
)(Counter);
