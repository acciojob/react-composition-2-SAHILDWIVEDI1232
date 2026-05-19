import React, { useState } from "react";

function Modal({ children }) {
  const [show, setShow] = useState(false);

  const handleOverlayClick = () => {
    setShow(false);
  };

  const handleBoxClick = (e) => {
    e.stopPropagation(); // IMPORTANT (overlay close se bachane ke liye)
  };

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
        <div className="model-overlay" onClick={handleOverlayClick}>
          
          {/* Modal Box */}
          <div className="model-box" onClick={handleBoxClick}>
            
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

export default Modal;
