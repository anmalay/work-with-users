import React from "react";
import { useSelector } from "react-redux";
import { IApplicationState } from "./redux/store";
import { Departments } from "./Departments";

export function Company() {
  const company = useSelector((state: IApplicationState) => state.company);

  return (
    <ul>
      {company.map((item) => (
        <li key={item.id}>
          <h2>{item.name}</h2>
          <Departments id={item.id} />
        </li>
      ))}
    </ul>
  );
}
