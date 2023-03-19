import React from "react";
export default function Nav(props) {
  const linkStyle = { border: "25px black", padding: "35px" };

  return (
    <nav>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={linkStyle}
          onClick={() => props.navigate(props.pages.generator)}
        >
          <a className="nav">Generator</a>
        </div>
        <div
          style={linkStyle}
          onClick={() => props.navigate(props.pages.portfolio)}
        >
          <a className="nav">My Polish</a>
        </div>
        <div
          style={linkStyle}
          onClick={() => props.navigate(props.pages.portfolio)}
        >
          <a className="nav">Filter</a>
        </div>
      </section>
    </nav>
  );
}
