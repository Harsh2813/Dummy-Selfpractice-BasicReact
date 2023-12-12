import React from "react";
import ErrorModalPortal from "./ErrorModalPortal";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <ErrorModalPortal
      title={props.title}
      message={props.message}
      onConfirm={props.onConfirm}
    />
  );
}

export default ErrorModal;