import React, { useState } from "react";

function ModalComponent({ children }) {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Open Button */}
      <button
        onClick={() => setShow(true)}
        style={{
          backgroundColor: "brown",
          color: "white",
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        Show Modal
      </button>

      {/* Overlay */}
      {show && (
        <div className="model-overlay">
          
          {/* Modal Box */}
          <div className="model-box">
            
            <button
              className="model-close"
              onClick={() => setShow(false)}
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "8px 12px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginBottom: "10px"
              }}
            >
              Close
            </button>

            <p className="model-p">{children}</p>
          </div>

        </div>
      )}
    </>
  );
}

export default ModalComponent;
