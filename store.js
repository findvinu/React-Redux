const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

const counterSubcribe = () => {
  const latestState = store.getState();
};

store.subscribe(counterSubcribe);
