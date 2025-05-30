// Modal.js
import "./App.css";
import React, { JSX } from "react";

const Modal = ({ isOpen, onClose, children }: {isOpen: boolean, onClose: () => void, children: JSX.Element}) => {
    if (!isOpen) return null;

    return (
        <div className="model_h1 model_h3"
            onClick={onClose}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    background: "white",
                    height: 150,
                    width: 500,
                    margin: "auto",
                    padding: "2%",
                    border: "2px solid #000",
                    borderRadius: "10px",
                    boxShadow: "2px solid black",
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;