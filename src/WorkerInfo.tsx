import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IApplicationState,
  IBranchId,
  initialState,
  IWorker,
} from "./redux/store";

interface IBranchIdProps {
  branchId: IBranchId;
}

interface IValues {
  name: string;
  lastName: string;
  team: number;
}

export function WorkerInfo({ branchId }: IBranchIdProps) {
  const teams = useSelector((state: IApplicationState) => {
    return state.teams.filter((item) => item.branchId === branchId);
  });

  const initialValues = {
    name: "",
    lastName: "",
    team: 0,
  };

  const [values, setValues] = useState(initialValues);

  const dispatch = useDispatch();

  function handleClick(values: IValues) {
    dispatch({
      type: "ADD_WORKER",
      worker: {
        name: values.name,
        lastName: values.lastName,
        teamId: values.team,
        id: Math.random(),
      },
    });
    setValues(initialValues);
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const name = event.target.name;
    const value = event.target.value;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div>
      <form>
        <label>
          Имя
          <input
            value={values.name}
            name="name"
            type="text"
            onChange={handleChange}
          />
        </label>
        <label>
          Фамиля
          <input
            value={values.lastName}
            name="lastName"
            type="text"
            onChange={handleChange}
          />
        </label>
        <label>
          Номер бригады
          <select value={values.team} name="team" onChange={handleChange}>
            {teams.map((item) => {
              return <option value={item.id}>{item.name}</option>;
            })}
          </select>
        </label>
      </form>
      <button type="button" onClick={() => handleClick(values)}>
        добавить
      </button>
    </div>
  );
}

// https://reactjs.org/docs/forms.html#the-select-tag
