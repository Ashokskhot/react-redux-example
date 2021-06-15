import { createAction } from "redux-actions";

export const IncrementCounterRdxConst = "Counter/IncrementCounter";

export const IncrementCounterAction = createAction(
  IncrementCounterRdxConst,
  (payload) => payload
);

export const IncrementCounterReducer = (state, action) => {
  return state + 1;
};
