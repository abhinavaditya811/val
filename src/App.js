import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Main, Yongu } from "./Components";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Main} />
        <Route path="/yes" Component={Yongu} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
