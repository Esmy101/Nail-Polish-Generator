import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Nav from "../Nav";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
    </>
  );
}
