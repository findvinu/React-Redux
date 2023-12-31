import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counterSlice";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const counterIncreaseHandler = () => {
    dispatch(counterActions.increment());
  };

  const counterDecreaseHandler = () => {
    dispatch(counterActions.decrement());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const toggleHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div style={{ marginBottom: "10px" }}>
        <button onClick={counterIncreaseHandler}>Increment</button>
        <button onClick={incrementHandler} style={{ marginLeft: "5px" }}>
          Increase by 5
        </button>
        <button onClick={counterDecreaseHandler} style={{ marginLeft: "5px" }}>
          Decrement
        </button>
      </div>
      <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
  );
};

/* class Counter extends Component {
  incrementHandler() {
    this.props.Increment();
  }

  decrementHandler() {
    this.props.Decrement();
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div style={{ marginBottom: "10px" }}>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button
            disabled={this.props.counter === 0}
            onClick={this.decrementHandler.bind(this)}
            style={{ marginLeft: "5px" }}
          >
            Decrement
          </button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Increment: () => dispatch({ type: "increment" }),
    Decrement: () => dispatch({ type: "decrement" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter); */

export default Counter;
