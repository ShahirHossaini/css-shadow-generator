import React from "react";

const OutputCode = ({ code }) => {
  const cssStyle = `${code?.HOffSet}px ${code?.VOffSet}px ${code?.Blur}px ${code?.Spread}px ${code?.Color} `;

  let OutPut = `box-shadow: ${cssStyle}; \n-webkit-box-shadow: ${cssStyle}; \n-moz-box-shadow: ${cssStyle};
  `;

  const handleCopy = () => {
    navigator.clipboard.writeText(OutPut);
  };

  return (
    <div className="code-container">
      <div className="code">
        <textarea value={OutPut} readOnly></textarea>
        <button onClick={handleCopy}>Copy</button>
      </div>
    </div>
  );
};

export default OutputCode;
