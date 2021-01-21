import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IApplicationState, IWorkerId } from "./redux/store";
import { WorkerAdd } from "./WorkerAdd";
import { WorkersTransfer } from "./WorkersTransfer";

export function Workers() {
  const transferWorkers: IWorkerId[] = [];

  const selectedWorkers = useSelector(
    ({ workers, selectedTeamId }: IApplicationState) =>
      workers.filter((w) => w.teamId === selectedTeamId)
  );

  const branchId = useSelector(
    ({ selectedTeamId, teams }: IApplicationState) => {
      return teams.find((t) => t.id === selectedTeamId)?.branchId;
    }
  );

  const [transfer, setTransfer] = useState(transferWorkers);
  const [showFormAdd, setShowFormAdd] = useState(false);
  const [showFormTransfer, setShowFormTransfer] = useState(false);

  const handleCLickTransfer = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const workerId = +event.target.value;
    setTransfer((prev) => {
      if (transfer.includes(workerId)) {
        return prev.filter((id) => id !== workerId);
      } else {
        return [...prev, workerId];
      }
    });
  };

  const handleCLickShowFormAdd = () => {
    setShowFormAdd((prev) => !prev);
  };

  const handleCLickShowFormTransfer = () => {
    setShowFormTransfer((prev) => !prev);
  };

  const dispatch = useDispatch();

  function removeWorkerClick(id: IWorkerId) {
    dispatch({
      type: "REMOVE_WORKER",
      workerId: id,
    });
  }

  return (
    <div>
      <ul>
        {selectedWorkers.map((worker) => (
          <div key={worker.id}>
            <label>
              {showFormTransfer && (
                <input
                  type="checkbox"
                  value={worker.id}
                  onChange={handleCLickTransfer}
                  checked={transfer.includes(worker.id)}
                />
              )}
              {worker.name}
            </label>

            <button type="button" onClick={() => removeWorkerClick(worker.id)}>
              Х
            </button>
          </div>
        ))}
      </ul>
      {showFormTransfer && branchId !== undefined && (
        <WorkersTransfer transfer={transfer} branchId={branchId} />
      )}
      {showFormAdd && branchId !== undefined && (
        <WorkerAdd branchId={branchId} />
      )}
      <div>
        {!showFormTransfer && (
          <button type="button" onClick={handleCLickShowFormAdd}>
            {showFormAdd ? "Отмена" : "Добавить сотрудника"}
          </button>
        )}
        {!showFormAdd && (
          <button type="button" onClick={handleCLickShowFormTransfer}>
            {showFormTransfer ? "Отмена" : "Переместить сотрудников"}
          </button>
        )}
      </div>
    </div>
  );
}
