import React from "react";
import ReactDOM from "react-dom";// this is how it should import react dom in compo unline index.js

//We just created a ErrorModal by porting it to index html and we call it inside ErrorModal compo.

// We are using here react portal method because we want to port this popUp overlay to the index.html because we don't want that anyone will create its parent class or element otherwise this overlay can erupt by style

const ErrorModalPortal = ({ title, message, onConfirm }) => {
  // Now you can use title, message, and onConfirm directly without referencing them as props.title, props.message, props.onConfirm becuase we used destructring in parameter by taking specific params

  return ReactDOM.createPortal(
    <div className="ErrorModalOverlay" onClick={onConfirm}>
      <div className="ErrorModal">
        <header>
          <h2>{title}</h2>
        </header>
        <div>
          <p>{message}</p>
        </div>
        <footer>
          <button onClick={onConfirm}>Okay</button>
          {/* agar button click hoti h to Form ka closeErrorHandler fn call hoga jisko onConfirmation variable me liye */}
        </footer>
      </div>
    </div>,
    document.getElementById("portal-root")
  );// ReactDom.createPortal method taken two arguments first it whole content second is where we want to port it here we are porting it to index html in portal-root id
};

export default ErrorModalPortal;
