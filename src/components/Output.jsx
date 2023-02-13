import React from "react";
import OutputBox from "./OutputBox";
import OutputCode from "./OutputCode";

const Output = (props) => {
  return (
    <aside className="output">
      <div className="main-frame">
        <div className="main-frame-title">
          <p>Output</p>
        </div>
        <div className="main-frame-output">
          <OutputBox {...props} />
          <OutputCode {...props} />
        </div>
      </div>
    </aside>
  );
};

export default Output;
