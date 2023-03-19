import React from "react";

export default function Projects() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row" id="polishRow">
          <div>Polish:</div>
          <p className="polish"></p>
        </div>
        <div className="row" id="topperRow">
          <div className="top">
            <input type="checkbox" id="myCheck" /> 1 Top:
          </div>
          <p className="topper"></p>
        </div>
        <div className="row" id="topperRow">
          <div className="top">
            <input type="checkbox" id="myCheck2" /> 2 Top:
          </div>
          <p className="topper2"></p>
        </div>
      </div>

      <div id="leverControl" className="lever-control">
        <div className="lever">
          <div className="knob"></div>
          <div className="stick"></div>
        </div>
        <div className="lever-base">
          <div className="pivot"></div>
          <div className="base"></div>
        </div>
      </div>
    </div>
  );
}
