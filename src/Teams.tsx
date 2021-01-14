import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IBranchId, IApplicationState, ITeamId } from "./redux/store";

interface ITeamsProps {
  id: IBranchId;
}

export function Teams({ id }: ITeamsProps) {
  const teams = useSelector((state: IApplicationState) => state.teams).filter(
    (t) => t.branchId === id
  );
  const dispatch = useDispatch();

  const handleClick = (selectedTeamId: ITeamId) => {
    dispatch({
      type: "SELECTED_TEAM",
      selectedTeamId,
    });
  };

  return (
    <ul>
      {teams.map((item) => (
        <li>
          <button type="button" onClick={() => handleClick(item.id)}>
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
