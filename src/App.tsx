import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";

function App() {
  return (
    <>
      <h1>React</h1>
      <hr></hr>
      <Counter initialValue={10}></Counter>
      <CounterBy initialValue={6}></CounterBy>
    </>
  );
}

export default App;
