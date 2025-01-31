import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import SignUp from "../signup/SignUp";
import Login from "../login/LoginForm";
import { StyledModal } from "./ModalContainer.styled";

function ModalContainer({show, handleClose}) {
    const [isSignUp, setIsSignUp] = useState(false);

    const handleToggle = () => {
        setIsSignUp((prev) => !prev);
    }
  return (
    <div>
      <StyledModal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="modal-header">
        </Modal.Header> 
        <Modal.Title className="modal-title">{ isSignUp ? "Sign Up" : "Login" }</Modal.Title>
          <Modal.Body className="modal-body">
            {isSignUp ? (
               <SignUp show={show} handleClose={handleClose} />
            ) : (
               <Login show={show} handleClose={handleClose} />
            )}
          </Modal.Body>
          <button onClick={handleToggle} className="btn-toggle">
            {isSignUp ? "Already have an account? Login" : "Need to create an account ? Signup"}
          </button>
          <Modal.Footer className="modal-footer">
          </Modal.Footer>
      </StyledModal>
    </div>
  )
}

export default ModalContainer

