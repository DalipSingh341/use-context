import React from "react";
import { useContext } from "react";
import { ScreenFixed } from "./components/ContextObj";
import Email from "./components/Email";

const App = () => {
  const { arr, newObj, show, setShow } = useContext(ScreenFixed);
  return (
    <div>
      <div style={{ display: "flex", gap: "20px" }}>
        {`${show ? "Name" : "Deepak"}`}
        <button onClick={() => setShow(false)}>Deepak</button>
        <button onClick={() => setShow(true)}>Name</button>
      </div>
      <Email/>
    </div>
  );
};

export default App;
