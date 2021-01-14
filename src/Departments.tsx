import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICompanyId, IBranch, IApplicationState } from "./redux/store";
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
        <li>
          <span>{item.name}</span>
          <Teams id={item.id} />
        </li>
      ))}
    </ul>
  );
}
