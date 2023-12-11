import React from "react";
import './ErrorModal.css';

const ErrorModal = (props) => {
  return (
    <div className="ErrorModalOverlay" onClick={props.onConfirm}>
    <div className="ErrorModal">
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>
        <button onClick={props.onConfirm}>Okay</button>{/* agar button click hoti h to Form ka closeErrorHandler fn call hoga jisko onConfirmation variable me liye */}
      </footer>
    </div>
    </div>
  )
}

export default ErrorModal
