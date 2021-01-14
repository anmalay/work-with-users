import { initialState, IApplicationState } from "./store";
import { IWorkerAction } from "./actions";

export function reducer(
  state: IApplicationState = initialState,
  action: IWorkerAction
): IApplicationState {
  if (action.type === "ADD_WORKER") {
    console.log(">>>", action.worker);

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
    const { workerId, teamId } = action;
    return {
      ...state,
      workers: state.workers.map((item) => {
        if (item.id === workerId) {
          return { ...item, teamId };
        }
        return item;
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

  if (action.type === "ADD_COMPANY") {
    return {
      ...state,
      company: [...state.company, action.company],
    };
  }

  if (action.type === "SELECTED_TEAM") {
    return {
      ...state,
      selectedTeamId: action.selectedTeamId,
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
