import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IApplicationState, IBranchId } from "./redux/store";

interface IBranchIdProps {
  branchId: IBranchId;
}

interface IValues {
  name: string;
  lastName: string;
  team: string;
}

export const getKeys = Object.keys as <T extends object>(
  obj: T
) => Array<keyof T>;

const initialValues: IValues = {
  name: "",
  lastName: "",
  team: "-1",
} as const;

// https://formik.org/docs/api/field

const validators: { [key in keyof IValues]: (s: string) => boolean } = {
  name: (s) => /^[a-zа-яё\-]+$/i.test(s),
  lastName: (s) => /^[a-zа-яё\-]+$/i.test(s),
  team: (s) => /^\d+$/.test(s),
};

export function WorkerAdd({ branchId }: IBranchIdProps) {
  const teams = useSelector((state: IApplicationState) => {
    return state.teams.filter((item) => item.branchId === branchId);
  });

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

  const disabled = getKeys(initialValues).some(
    (key) => values[key] === initialValues[key]
  );

  // const disabled = (["name", "lastName", "team"] as const).some(
  //   (key) => values[key] === initialValues[key]
  // );

  return (
    <div>
      <form>
        <label>
          Имя
          <input
            value={values.name}
            name="name"
            type="text"
            style={{
              outline: `2px solid ${
                validators.name(values.name) ? "green" : "red"
              }`,
            }}
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
            <option disabled key={-1} value={-1}>
              Номер бригады
            </option>
            {teams.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </label>
      </form>
      <button
        disabled={disabled}
        type="button"
        onClick={() => handleClick(values)}
      >
        добавить
      </button>
    </div>
  );
}

// https://reactjs.org/docs/forms.html#the-select-tag
