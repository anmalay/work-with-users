import React from "react";

import { ICompanyId, initialState } from "./redux/store";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Company } from "./Company";
import { Workers } from "./Workers";


export function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Company />
        <Workers />
      </div>
    </Provider>
  );
}
