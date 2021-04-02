import React from "react";
import "./App.css";
import Clock from "./components/Clock";

let testProp: string = "Simple TypeScript/React Clock";
let optionalProp: string = "TenaciousDev.com";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <div className="verticalCenter">
        <Clock testProp={testProp} optionalProp={optionalProp}></Clock>
      </div>
    </div>
  );
};

export default App;
