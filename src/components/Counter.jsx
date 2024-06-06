import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";

export default function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  //Handler Functions
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const resetHandler = () => {
    dispatch(counterActions.reset());
  };

  return (
    <>
      <section>
        <h1>My Counter</h1>
        <p>{counter}</p>
        <div className="elements">
          <div>
            <button onClick={decrementHandler}>decrement</button>
            <button onClick={incrementHandler}>Increment</button>
          </div>
          <p>
            <button onClick={resetHandler}>Reset</button>
          </p>
        </div>
      </section>
    </>
  );
}
