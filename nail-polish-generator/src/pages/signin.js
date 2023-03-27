import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import "../App.css";

export default function Signin() {
  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="6">
          <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
            <h3
              className="fw-normal mb-3 ps-5 pb-3"
              style={{ letterSpacing: "1px" }}
            >
              Log in{" "}
              <MDBIcon
                fas
                icon="paintbrush fa-1.5x me-1.5"
                style={{ color: "#9A8C98" }}
              />
            </h3>

            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              label="Email address"
              id="formControlLg"
              type="email"
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              label="Password"
              id="formControlLg"
              type="password"
              size="lg"
            />

            <MDBBtn
              className="mb-4 px-5 mx-5 w-100 bg-deep-pink-500"
              size="lg"
              id="login"
            >
              Login
            </MDBBtn>
            <p className="small mb-5 pb-lg-3 ms-5">
              <a class="text-muted" href="#!">
                Forgot password?
              </a>
            </p>
            <p className="ms-5">
              Don't have an account?{" "}
              <a href="#!" class="link-info" id="register">
                Register here
              </a>
            </p>
          </div>
        </MDBCol>

        <MDBCol sm="6" className="d-none d-sm-block px-7">
          <h3>
            Painting our nails is a great way for selfcare as well as collection
            nail polish. But have you ever been in a situation where you
            couldn't deside what you wants on your nails?
          </h3>
          <h4>It's not a problem anymore 😉.</h4>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
