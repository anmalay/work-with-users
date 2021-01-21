import React from "react";
import { useSelector } from "react-redux";
import { IApplicationState } from "./redux/store";

export function Notification() {
  const notification = useSelector((state: IApplicationState) => {
    return state.notification;
  });

  return (
    <div>
      <span>{notification}</span>
    </div>
  );
}
