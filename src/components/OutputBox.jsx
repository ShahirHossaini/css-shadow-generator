import React from "react";

const OutputBox = ({ code }) => {
  const cssStyle = `${code?.HOffSet}px ${code?.VOffSet}px ${code?.Blur}px ${code?.Spread}px ${code?.Color} `;
  return (
    <div className="box-container">
      <div className="box" style={{ boxShadow: cssStyle }}></div>
    </div>
  );
};

export default OutputBox;
