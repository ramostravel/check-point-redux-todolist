import "./App.css";
import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import Add from "./Pages/Add";
import ListTask from "./Pages/ListTask";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h5>To Do List </h5>
        <Add />
        <ListTask />
      </Provider>
    </div>
  );
}
export default App;