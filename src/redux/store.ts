import { createStore } from "redux";
import { reducer } from "./reducer";

export type IWorkerId = number;
export type ITeamId = number;
export type IBranchId = number;
export type ICompanyId = number;

export interface IWorker {
  id: IWorkerId;
  name: string;
  lastName: string;
  teamId: ITeamId;
}

export interface ITeam {
  id: ITeamId;
  name: string;
  branchId: IBranchId;
}

export interface IBranch {
  id: IBranchId;
  name: string;
  companyId: ICompanyId;
}

export interface ICompany {
  id: ICompanyId;
  name: string;
}

export interface IApplicationState {
  selectedTeamId: ITeamId | null;
  workers: IWorker[];
  teams: ITeam[];
  branches: IBranch[];
  company: ICompany[];
}

export const initialState: IApplicationState = {
  selectedTeamId: 1,
  workers: [
    {
      id: 1,
      name: "Алексей",
      lastName: "Иванов",
      teamId: 1,
    },
    {
      id: 2,
      name: "Василий",
      lastName: "Струков",
      teamId: 1,
    },
    {
      id: 3,
      name: "Дмитрий",
      lastName: "Смирнов",
      teamId: 1,
    },
    {
      id: 4,
      name: "Алексей",
      lastName: "Иванов",
      teamId: 2,
    },
    {
      id: 5,
      name: "Василий",
      lastName: "Струков",
      teamId: 2,
    },
    {
      id: 6,
      name: "Дмитрий",
      lastName: "Смирнов",
      teamId: 3,
    },
    {
      id: 7,
      name: "Алексей",
      lastName: "Иванов",
      teamId: 3,
    },
    {
      id: 8,
      name: "Василий",
      lastName: "Струков",
      teamId: 4,
    },
    {
      id: 9,
      name: "Дмитрий",
      lastName: "Смирнов",
      teamId: 5,
    },
    {
      id: 10,
      name: "Алексей",
      lastName: "Иванов",
      teamId: 5,
    },
    {
      id: 11,
      name: "Василий",
      lastName: "Струков",
      teamId: 5,
    },
    {
      id: 12,
      name: "Дмитрий",
      lastName: "Смирнов",
      teamId: 6,
    },
  ],

  teams: [
    {
      id: 1,
      name: "Основная бригада",
      branchId: 1,
    },
    {
      id: 2,
      name: "Запасная бригада",
      branchId: 1,
    },
    {
      id: 3,
      name: "Основная бригада",
      branchId: 2,
    },
    {
      id: 4,
      name: "Запасная бригада",
      branchId: 2,
    },
    {
      id: 5,
      name: "Основная бригада",
      branchId: 3,
    },
    {
      id: 6,
      name: "Основная бригада",
      branchId: 4,
    },
  ],

  branches: [
    {
      id: 1,
      name: "Южный филиал",
      companyId: 2,
    },
    {
      id: 2,
      name: "Северный филиал",
      companyId: 2,
    },
    {
      id: 3,
      name: "Восточный филиал",
      companyId: 1,
    },
    {
      id: 4,
      name: "Западный филиал",
      companyId: 1,
    },
  ],

  company: [
    {
      id: 1,
      name: "Роснефть",
    },
    {
      id: 2,
      name: "Газпром",
    },
  ],
};

export const store = createStore(reducer);
