import React from "react";

const Output = ({ code }) => {
  const cssStyle = `${code?.HOffSet}px ${code?.VOffSet}px ${code?.Blur}px ${code?.Spread}px ${code?.Color} `;

  return (
    <aside className="output">
      <div className="main-frame">
        <div className="main-frame-title">
          <p>Output</p>
        </div>
        <div className="main-frame-output">
          <div className="box-container">
            <div className="box" style={{ boxShadow: cssStyle }}></div>
          </div>
          <div className="code-container"></div>
        </div>
      </div>
    </aside>
  );
};

export default Output;
