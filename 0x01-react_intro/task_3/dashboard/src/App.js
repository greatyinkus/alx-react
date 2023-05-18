import React from "react";
import logo from "./logo.jpg";
import { getFullYear, getfootercopy } from "./utils";
import "./App.css";

function App() {
  // modified footer
  const isIndex = true;
  return (
    <div className="App">
      {/* Header */}
      <div className="App-header">
        <img src={logo} className="Hoblerton-logo" alt="Hoblerton-logo" />
        <h1>School dashboard</h1>
      </div>
      {/* Body */}
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        {/* modify app */}
        <div className="modified">
          <div>
            <label htmlFor="email" className="input-label">
              Email:{" "}
            </label>
            <input type="email" id="email" name="email"></input>
          </div>
          <div>
            <label htmlFor="password" className="input-label">
              Password:{" "}
            </label>
            <input type="password" id="password" name="password"></input>
          </div>
        <button>OK</button>
        </div>
      </div>
      {/* Footer */}
      <div className="App-footer">
        <p>{getfootercopy(isIndex)}</p>
        <p> Copyright {getFullYear()} - holberton School</p>
      </div>
    </div>
  );
}

export default App;
