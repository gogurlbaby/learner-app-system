import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import SignUp from "../../user/signup/SignUp";
import Login from "../../user/login/LoginForm";

function ModalContainer({ show, handleClose, handleLogin }) {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => {
    setIsSignUp((prev) => !prev);
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="border-b-[0]"></Modal.Header>
        <Modal.Title className="text-[2.5rem] font-bold font-serif leading-[3rem] text-center mb-[1.5rem]">
          {isSignUp ? "Sign Up" : "Login"}
        </Modal.Title>
        <Modal.Body className="p-[1rem]">
          {isSignUp ? (
            <SignUp
              show={show}
              handleLogin={handleLogin}
              handleClose={handleClose}
            />
          ) : (
            <Login
              show={show}
              handleLogin={handleLogin}
              handleClose={handleClose}
            />
          )}
        </Modal.Body>
        <button
          onClick={handleToggle}
          className="text-[#404040] underline decoration-[#01589a] text-[1.25rem] font-normal font-sans leading-[2rem] outline-none border-none bg-inherit cursor-pointer"
        >
          {isSignUp
            ? "Already have an account? Login"
            : "Need to create an account ? Signup"}
        </button>
        <Modal.Footer className="modal-footer"></Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalContainer;
