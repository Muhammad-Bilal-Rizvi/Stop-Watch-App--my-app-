import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

import Timer from "./Components/Timer";

function App() {
  return (
    <div className="main-section">
      <Timer />
    </div>
  );
}

export default App;
