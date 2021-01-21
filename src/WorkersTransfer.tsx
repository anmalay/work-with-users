import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ITeamId,
  IApplicationState,
  IWorkerId,
  IBranchId,
} from "./redux/store";

interface IWorkersTransferProps {
  transfer: number[];
  branchId: IBranchId;
}

export function WorkersTransfer({ transfer, branchId }: IWorkersTransferProps) {
  const chooseTeam = useSelector(({ teams }: IApplicationState) => {
    return teams.filter((t) => t.branchId === branchId);
  });

  const [chosenTeam, setChosenTeam] = useState("");

  const handleClickChoose = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const teamId = event.target.value;
    setChosenTeam(teamId);
  };

  const dispatch = useDispatch();

  function transferWorkersClick(teamId: ITeamId, transferWorkers: IWorkerId[]) {
    dispatch({
      type: "TRANSFER_WORKER",
      teamId,
      transferWorkers,
    });
  }

  return (
    <form>
      {chooseTeam.map((team) => (
        <label key={team.id}>
          <input
            type="radio"
            name={team.name}
            value={team.id}
            checked={team.id === chosenTeam}
            onChange={handleClickChoose}
          />
          {team.name}
        </label>
      ))}
      <button
        type="button"
        onClick={() => transferWorkersClick(chosenTeam, transfer)}
      >
        →
      </button>
    </form>
  );
}
