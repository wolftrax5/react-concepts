import { useReducer } from "react";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";
import * as CounterActions from "./actions/actions";

const INITIAL_STATE: CounterState = {
  counter: 0,
  changes: 0,
  previous: 0,
};

export const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handlerResetClick = () => {
    dispatch(CounterActions.doReset());
  };
  const handlerIncrease = (value: number) => {
    dispatch(CounterActions.doIncreaseBy(value));
  };
  return (
    <>
      <h1>Counter Reducer Segment</h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      <button onClick={handlerResetClick}>Reset</button>
      <button onClick={() => handlerIncrease(1)}>+ 1</button>
      <button onClick={() => handlerIncrease(5)}>+ 5</button>
      <button onClick={() => handlerIncrease(10)}>+ 10</button>
    </>
  );
};
