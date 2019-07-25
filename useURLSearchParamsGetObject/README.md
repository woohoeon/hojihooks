# @hojihooks/use-url-search-params-get-object

React Hook to Returns all the values associated with a given search parameter as an object.

## Installation

#### yarn

`yarn add @hojihooks/use-url-search-params-get-object`

#### npm

`npm i @hojihooks/use-url-search-params-get-object`

## Usage

```javascript
import React from "react";
import ReactDOM from "react-dom";
import useURLSearchParamsGetObject from "@hojihooks/use-url-search-params-get-object";

function App() {
  const getURLSearchParamsObject = useURLSearchParamsGetObject();
  const searchParamsObj = getURLSearchParamsObject(
    "q=URLUtils.searchParams&topic=api"
  );
  return (
    <React.Fragment>
      <h1>Hello hojihooks</h1>
      <h2>{`${searchParamsObj.q}`}</h2>
      <h2>{`${searchParamsObj.topic}`}</h2>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```


### Arguments

| Argument | Type     | Description                                       | Required |
| -------- | -------- | ------------------------------------------------- | -------- |
| paramsString  | string | Query string of a URL | yes      |

### Return

| Return value | Type      | Description                                                     |
| ------------ | --------- | --------------------------------------------------------------- | 
| Object          | Object | Objects with keys and values |