import { createStore } from "redux";

const intialState = { counter: 0, show: true };

const counterReducer = (state = intialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      show: state.show,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      show: state.show,
    };
  }

  if (action.type === "toggle") {
    return {
      show: !state.show,
      counter: state.counter,
    };
  }
  return state;
};

const store = createStore(counterReducer); 

export default store;
