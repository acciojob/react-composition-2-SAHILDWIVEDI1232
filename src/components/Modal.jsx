import React, { useState } from "react";

function Modal({ children }) {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* OPEN BUTTON */}
      <button
        onClick={() => setShow(true)}
        style={{
          backgroundColor: "brown",
          color: "white",
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Show Modal
      </button>

      {/* MODAL */}
      {show && (
        <div
          className="model-overlay"
          onClick={() => setShow(false)}   // ✅ OUTSIDE CLICK CLOSE
        >
          <div
            className="model-box"
            onClick={(e) => e.stopPropagation()} // ✅ prevent inner click close
          >
            <button
              className="model-close"
              onClick={() => setShow(false)}
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "8px 12px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Close
            </button>

            {/* IMPORTANT FIX FOR TEST 2 */}
            <div className="model">
              <p>{children}</p>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
