import { initialState, IApplicationState } from "./store";
import { IWorkerAction } from "./actions";
import { stat } from "fs";

export function reducer(
  state: IApplicationState = initialState,
  action: IWorkerAction
): IApplicationState {
  if (action.type === "ADD_WORKER") {
    console.log("добавить сотрудника", action.worker);
    return {
      ...state,
      workers: [...state.workers, action.worker],
    };
  }

  if (action.type === "REMOVE_WORKER") {
    return {
      ...state,
      workers: state.workers.filter((w) => w.id !== action.workerId),
    };
  }

  if (action.type === "TRANSFER_WORKER") {
    console.log(action, "asasd");

    const { transferWorkers, teamId } = action;
    return {
      ...state,
      workers: state.workers.map((worker) => {
        if (transferWorkers.includes(worker.id)) {
          return { ...worker, teamId };
        }
        return worker;
      }),
    };
  }

  if (action.type === "EDIT_WORKER") {
    const { workerId, name, lastName } = action;
    return {
      ...state,
      workers: state.workers.map((item) => {
        if (item.id === workerId) {
          return { ...item, name, lastName };
        }
        return item;
      }),
    };
  }

  if (action.type === "SELECTED_TEAM") {
    return {
      ...state,
      selectedTeamId: action.selectedTeamId,
    };
  }

  if (action.type === "ADD_NOTIFICATION") {
    return {
      ...state,
      notification: action.notification,
    };
  }

  if (action.type === "REMOVE_NOTIFICATION") {
    return {
      ...state,
      notification: null,
    };
  }

  return state;
}

// https://redux.js.org/recipes/usage-with-typescript

// state === {
//   teams: [...],
//   ...,
//   workers: [
//     {
//       id: 1,
//       name: 'qwe',
//       lastName: 'qwe',
//       teamId: 2,
//     },
//     {
//       id: 2,
//       name: 'zxc',
//       lastName: 'zxc',
//       teamId: 2,
//     },
//   ]
// }

// action === {
//   type: "TRANSFER_WORKER",
//   teamId: 3,
//   workerId: 2,
// }

// return {
//   teams: [...],
//   ...,
//   workers: [
//     {
//       id: 1,
//       name: 'qwe',
//       lastName: 'qwe',
//       teamId: 2,
//     },
//     {
//       id: 2,
//       name: 'zxc',
//       lastName: 'zxc',
//       teamId: 3,
//     },
//   ]
// }
