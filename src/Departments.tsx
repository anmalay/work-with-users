import React from "react";
import { useSelector } from "react-redux";
import { ICompanyId, IApplicationState } from "./redux/store";
import { Teams } from "./Teams";

interface IDepartmentsProps {
  id: ICompanyId;
}

export function Departments({ id }: IDepartmentsProps) {
  const branches = useSelector((state: IApplicationState) =>
    state.branches.filter((b) => b.companyId === id)
  );

  return (
    <ul>
      {branches.map((item) => (
        <li key={item.id}>
          <span>{item.name}</span>
          <Teams id={item.id} />
        </li>
      ))}
    </ul>
  );
}
