# @hojihooks/use-async-dispatch

React Hook to dispatch asynchronous action and shows the progress of the action.

## Installation

#### yarn

`yarn add @hojihooks/use-async-dispatch`

#### npm

`npm i @hojihooks/use-async-dispatch`

## Usage

```js
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import promiseMiddleware from "redux-promise";
import useAsyncDispatch from "@hojihooks/use-async-dispatch";

// Action Creators
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      type: "FETCH_DATA",
      payload: { data }
    };
  } catch (error) {
    return console.error(error);
  }
}

function showProgress() {
  return {
    type: "SHOW_PROGRESS"
  };
}

function hideProgress() {
  return {
    type: "HIDE_PROGRESS"
  };
}

// Reducers
function reducer(state = [], action) {
  switch (action.type) {
    case "FETCH_DATA":
      console.log(action.payload.data);
      return state;
    case "SHOW_PROGRESS":
      console.log("show progress");
      return state;
    case "HIDE_PROGRESS":
      console.log("hide progress");
      return state;
    default:
      return state;
  }
}

const store = createStore(reducer, {}, applyMiddleware(promiseMiddleware));

function App() {
  // Easy to use
  const fetchExample1 = useAsyncDispatch(fetchData);

  // Using options
  const callback = () => {
    console.log("success");
  };
  const opts = {
    showProgress,
    hideProgress
  };
  const fetchExample2 = useAsyncDispatch(fetchData, callback, opts);

  useEffect(() => {
    fetchExample1("https://api.github.com/orgs/nodejs");
    fetchExample2("https://api.github.com/gists");
  });
  return <h1>Hello Hojihooks</h1>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
```

### Arguments

| Argument | Type     | Description                                       | Required |
| -------- | -------- | ------------------------------------------------- | -------- |
| asyncAction  | function | Function to dispatch asynchronously | yes      |
| callback  | function | Callback function after asynchronous dispatch completion | no      |
| opts  | Object | showProgress: Function to dispatch to show progress, hideProgress: Function to dispatch to hide progress | no      |

### Return

| Return value | Type      | Description                                                     | Default value |
| ------------ | --------- | --------------------------------------------------------------- | ------------- |
| function          | function | Function wrapped around the async dispatch logic | null          |