import { useDispatch, useSelector, connect } from "react-redux";
import classes from "./Counter.module.css";
import { Component } from "react";

/* const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};

  const Increment = () => {
    dispatch({ type: "increment" });
  };

  const Decrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={Increment}>Increment</button>
        <button
          disabled={counter === 0}
          onClick={Decrement}
          style={{ marginLeft: "5px" }}
        >
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
}; */

class Counter extends Component {
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
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
