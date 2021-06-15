import { useDispatch, useSelector } from "react-redux";
import { IncrementCounterAction } from "./redux/counter/increment-counter-action";
import { DecrementCounterAction } from "./redux/counter/decrement-counter-action";
import "./styles.css";

export default function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const _handleIncrement = () => {
    dispatch(IncrementCounterAction());
  };

  const _handleDecrement = () => {
    dispatch(DecrementCounterAction());
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>Counter is {counter}</h2>
      <button onClick={_handleIncrement}>Increment</button>
      <button onClick={_handleDecrement}>Decrement</button>
    </div>
  );
}
