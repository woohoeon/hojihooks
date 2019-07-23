# @hojihooks/use-async-dispatch

React Hook to dispatch asynchronous action and shows the progress of the action.

## Installation

#### yarn

`yarn add @hojihooks/use-async-dispatch`

#### npm

`npm i @hojihooks/use-async-dispatch`

## Usage

```js
import React from "react";
import useAsyncDispatch from "@hojihooks/use-async-dispatch";

function App() {
  // probably imported redux-action
  const fetchData = async () => {
    const { data } = await fetch();
    return {
      type: "FETCH",
      payload: { data }
    };
  };
  
  // use simple
  const simpleAsyncDispatchFetchData = useAsyncDispatch(fetchData);
  
  // use detail
  const callback = () => { console.log('fetched data.') };
  const detailAsyncDispatchFetchData = useAsyncDispatch(
    fetchData,
    callback,
    { showProgressAction, hideProgressAction }
  );
  
  useEffect(() => {
    const params = {};
    const data1 = simpleAsyncDispatchFetchData();
    const data2 = detailAsyncDispatchFetchData(params); // use params
  }, []);
  
  return `<h1>Hello hojihooks</h1>`;
}
```

### Arguments

| Argument | Type     | Description                                       | Required |
| -------- | -------- | ------------------------------------------------- | -------- |
| asyncAction  | function | Function to dispatch asynchronously | yes      |
| callback  | function | Execution function after asynchronous dispatch completion | no      |
| opts  | Object | showProgressAction: function (show progress action to dispatch), hideProgressAction: function (hide progress action to dispatch) | no      |

### Return

| Return value | Type      | Description                                                     | Default value |
| ------------ | --------- | --------------------------------------------------------------- | ------------- |
| function          | function | Function wrapped around the async dispatch logic | null          |