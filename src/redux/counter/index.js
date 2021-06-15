import {
  DecrementCounterRdxConst,
  DecrementCounterReducer
} from "./decrement-counter-action";
import {
  IncrementCounterReducer,
  IncrementCounterRdxConst
} from "./increment-counter-action";

export const counterReducer = (state = 10, action) => {
  switch (action.type) {
    case IncrementCounterRdxConst:
      return IncrementCounterReducer(state, action);
    case DecrementCounterRdxConst:
      return DecrementCounterReducer(state, action);
    default:
      return state;
  }
};
