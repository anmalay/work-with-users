import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IApplicationState } from "./redux/store";
import { Departments } from "./Departments";

export function Company() {
  const dispatch = useDispatch();
  const company = useSelector((state: IApplicationState) => state.company);
  console.log(company);

  return (
    <ul>
      {company.map((item) => (
        <li>
          <h2>{item.name}</h2>
          <Departments id={item.id} />
        </li>
      ))}
    </ul>
  );
}
