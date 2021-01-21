import React from "react";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Company } from "./Company";
import { Workers } from "./Workers";
import { Notification } from "./Notification";

export function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Company />
        <Workers />
        <Notification />
      </div>
    </Provider>
  );
}
