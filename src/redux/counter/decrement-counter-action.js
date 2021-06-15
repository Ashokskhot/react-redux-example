import { createAction } from "redux-actions";

export const DecrementCounterRdxConst = "Counter/DecrementCounter";

export const DecrementCounterAction = createAction(DecrementCounterRdxConst);

export const DecrementCounterReducer = (state, action) => {
  return state - 1;
};
