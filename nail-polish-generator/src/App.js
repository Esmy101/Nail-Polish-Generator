import React, { useState } from "react";
import Header from "./components/Header";
import Generator from "./pages/generator";
import Nav from "./components/Nav";
import "./App.css";

const Pages = {
  home: <Generator />,
};

function App() {
  const [currentPage, setCurrentPage] = useState(Pages.home);
  return (
    <>
      <header className="react-app">
        <Nav pages={Pages} navigate={setCurrentPage} />
        <Header />
      </header>
      {currentPage}
    </>
  );
}

export default App;
