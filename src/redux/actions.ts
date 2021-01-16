import { IWorkerId, ITeamId, IWorker, ICompanyId, ICompany } from "./store";

const TRANSFER_WORKER = "TRANSFER_WORKER";
const ADD_WORKER = "ADD_WORKER";
const REMOVE_WORKER = "REMOVE_WORKER";
const EDIT_WORKER = "EDIT_WORKER";
const ADD_COMPANY = "ADD_COMPANY";
const SELECTED_TEAM = "SELECTED_TEAM";

export interface ITransferWorkerAction {
  type: typeof TRANSFER_WORKER;
  transferWorkers: IWorkerId[];
  teamId: ITeamId;
}

export const transferWorker = function (
  teamId: ITeamId,
  transferWorkers: IWorkerId[]
): ITransferWorkerAction {
  return {
    type: "TRANSFER_WORKER",
    teamId,
    transferWorkers,
  };
};

export interface IAddWorkerAction {
  type: typeof ADD_WORKER;
  worker: IWorker;
}

export const AddWorker = function (worker: IWorker): IAddWorkerAction {
  return {
    type: "ADD_WORKER",
    worker,
  };
};

export interface IRemoveWorkerAction {
  type: typeof REMOVE_WORKER;
  workerId: IWorkerId | number;
}

export const removeWorker = function (
  workerId: IWorkerId
): IRemoveWorkerAction {
  return {
    type: "REMOVE_WORKER",
    workerId,
  };
};

export interface IEditWorkerAction {
  type: typeof EDIT_WORKER;
  workerId: IWorkerId;
  name: string;
  lastName: string;
}

export const editWorker = function (
  workerId: IWorkerId,
  name: string,
  lastName: string
): IEditWorkerAction {
  return {
    type: "EDIT_WORKER",
    workerId,
    name,
    lastName,
  };
};

export interface ISelectedTeamAction {
  type: typeof SELECTED_TEAM;
  selectedTeamId: ITeamId;
}

export const selectedTeamId = function (selectedTeamId: ITeamId) {
  return {
    type: "SELECTED_TEAM",
    selectedTeamId,
  };
};

export type IWorkerAction =
  | ITransferWorkerAction
  | IAddWorkerAction
  | IRemoveWorkerAction
  | IEditWorkerAction
  | ISelectedTeamAction;

// https://github.com/erikras/ducks-modular-redux
// https://redux-toolkit.js.org/
