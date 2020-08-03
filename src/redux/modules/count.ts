const ADD_COUNT = Symbol("count/ADD_COUNT");
const REDUCE_COUNT = Symbol("count/REDUCE_COUNT");
// const GET_COUNT = Symbol("count/REDUCE_COUNT");
const CUSTOM_COUNT = Symbol("count/CUSTOM_COUNT");
export interface CountState {
  count: number | string;
}
function intByIsNaN(value: number | string): number {
  if (typeof value === "string") {
    return Number.isNaN(Number(value)) ? 0 : Number(value);
  }
  return value;
}
const initialState: CountState = {
  count: 0
};
export interface Action {
  type: symbol;
  playload?: { count: number };
}
export default function countApp(state = initialState, action: Action) {
  const { type, playload } = action;
  if (type === ADD_COUNT) {
    return {
      ...state,
      count: intByIsNaN(state.count) + 1
    };
  }
  if (type === REDUCE_COUNT) {
    return {
      ...state,
      count: intByIsNaN(state.count) - 1
    };
  }
  if (type === CUSTOM_COUNT && playload) {
    return {
      ...state,
      count: playload.count
    };
  }
  return state;
}

// action creator
export function addCount(): Action {
  return {
    type: ADD_COUNT
  };
}
export function reduceCount(): Action {
  return {
    type: REDUCE_COUNT
  };
}
export function customCount(count: string): Action {
  const value = Number.isNaN(Number(count)) ? 0 : Number(count);
  return {
    type: CUSTOM_COUNT,
    playload: {
      count: value
    }
  };
}
