import React, { useState } from "react";

function Modal({ children }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>
        Show Modal
      </button>

      {show && (
        <div
          className="model-overlay"
          onClick={() => setShow(false)}   // ✅ OUTSIDE CLICK CLOSE
        >
          <div
            className="model-box"
            onClick={(e) => e.stopPropagation()} // ✅ BLOCK INNER CLICK
          >
            <button
              className="model-close"
              onClick={() => setShow(false)}
            >
              Close
            </button>

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
