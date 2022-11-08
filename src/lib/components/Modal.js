import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ isShowing, hide, text }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modale-container">
            <div className="modale-container-elements">
              <div className="modale-cotainer-elements-close-btn">
                <button className="close-btn" onClick={hide}>
                  {<FontAwesomeIcon icon={faXmark} />}
                </button>
              </div>
              <FontAwesomeIcon icon={faCircleCheck} />
              <p>{text}</p>
            </div>
          </div>
        </>,
        document.getElementById("modal-root")
      )
    : null;

export default Modal;
