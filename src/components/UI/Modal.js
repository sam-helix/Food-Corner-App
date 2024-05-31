import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "../UI/Modal.module.css";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseBackdrop} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

// function Modal() {
//   return (
//     <div>Modal</div>
//   )
// }
const portalEle = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseBackdrop={props.onClose} />,
        portalEle
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalEle
      )}
    </Fragment>
  );
};

export default Modal;
