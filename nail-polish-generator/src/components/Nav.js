import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

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
          <MDBIcon
            fas
            icon="stamp fa-1.5x me-1.5"
            style={{ color: "#4A4E69" }}
          />
        </div>
        <div
          style={linkStyle}
          onClick={() => props.navigate(props.pages.person)}
        >
          <MDBIcon
            fas
            icon="user fa-1.5x me-1.5"
            style={{ color: "#4A4E69" }}
          />
        </div>
      </section>
    </nav>
  );
}
