import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import SignUp from "./signup/SignUp";
import Login from "./login/LoginForm";

function ModalContainer({show, handleClose}) {
    const [isSignUp, setIsSignUp] = useState(false);

    const handleToggle = () => {
        setIsSignUp((prev) => !prev);
    }
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{ isSignUp ? "SignUp" : "Login" }</Modal.Title>    
        </Modal.Header>
          <Modal.Body>
            {isSignUp ? (
               <SignUp show={show} handleClose={handleClose} />
            ) : (
               <Login show={show} handleClose={handleClose} />
            )}
          </Modal.Body>
          <button onClick={handleToggle} className="btn-toggle" style={{outline: "none", border: "none", backgroundColor: "inherit", cursor: "pointer"}}>
            {isSignUp ? "Already have an account? Login" : "Need to create an account ? Signup"}
          </button>
          <Modal.Footer>
          </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalContainer

