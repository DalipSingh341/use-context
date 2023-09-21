import React from "react";
import { useContext } from "react";
import { ScreenFixed } from "./components/ContextObj";
import Email from "./components/Email";
import Email2 from "./components/Email2";
import Email3 from "./components/Email3";

const App = () => {
  const { arr, newObj, show, setShow } = useContext(ScreenFixed);
  return (
    <div>
      <div style={{ display: "flex", gap: "20px" }}>
        {`${show ? "Name" : "Deepak"}`}
        <button onClick={() => setShow(false)}>Deepak</button>
        <button onClick={() => setShow(true)}>Name</button>
      </div>
      {/* <Email/> */}
      <Email3/>
    </div>
  );
};

export default App;
