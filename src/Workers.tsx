import { workers } from "cluster";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeWorker } from "./redux/actions";
import { ITeamId, IApplicationState, IWorkerId } from "./redux/store";
import { WorkerInfo } from "./WorkerInfo";

interface IWorkersProps {
  id: ITeamId;
}

export function Workers() {
  const selectedWorkers = useSelector(
    ({ workers, selectedTeamId }: IApplicationState) =>
      workers.filter((w) => w.teamId === selectedTeamId)
  );

  const branchId = useSelector(
    ({ selectedTeamId, teams }: IApplicationState) => {
      return teams.find((t) => t.id === selectedTeamId)?.branchId;
    }
  );

  const dispatch = useDispatch();

  function removeWorkerClick(id: IWorkerId) {
    dispatch({
      type: "REMOVE_WORKER",
      workerId: id,
    });
  }

  function transferWorkerClick(teamId: ITeamId, workerId: IWorkerId) {
    dispatch({
      type: "EDIT_WORK",
      teamId,
    });
  }

  return (
    <div>
      <ul>
        {selectedWorkers.map((item) => (
          <div>
            {item.name}
            <button type="button" onClick={() => removeWorkerClick(item.id)}>
              Х
            </button>
            <button type="button">→</button>
          </div>
        ))}
      </ul>
      {branchId !== undefined && <WorkerInfo branchId={branchId} />}
    </div>
  );
}
