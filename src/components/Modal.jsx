import React, { useState } from "react";

function Modal({ children }) {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* OPEN BUTTON */}
      <button onClick={() => setShow(true)}>
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
            onClick={(e) => e.stopPropagation()} // ✅ prevent inner close
          >
            <button
              className="model-close"
              onClick={() => setShow(false)}
            >
              Close
            </button>

            {/* IMPORTANT FOR CYPRESS CHILD TEST */}
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
