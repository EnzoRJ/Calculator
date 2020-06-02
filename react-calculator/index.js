import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//Creating Function
function App() {
  const [input, setInput] = useState("");
  const calcBtns = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach((item) => {
    calcBtns.push(
      <button
      /* Event Handler */
        onClick={(e) => {
          setInput(input + e.target.value);
        }}
        value={item}
        key={item}
      >
        {" "}
        {item}
      </button>
    );
  });

  //Declaring sections & Items
  return (
    <div className="wrapper">
      {" "}
      <div className="show-input">{input}</div>
      <div className="digits flex">{calcBtns}</div>
      <div className="modifiers subgrid">
       
        {/* clear button
      setInput sets value on input fields */}
        <button onClick={() => setInput(input.substr(0, input.length - 1))}>
          Clear
        </button>

        {/* Set values on 0 */}
        <button onClick={() => setInput("")} value="">
          AC
        </button>
      </div>
      <div className="operations subgrid">

        {/* Sum button */}
        <button onClick={(e) => setInput(input + e.target.value)} value="+">
          +
        </button>

        {/* minus button */}
        <button onClick={(e) => setInput(input + e.target.value)} value="-">
          {" "}
          -{" "}
        </button>

        {/* multiplication button */}
        <button onClick={(e) => setInput(input + e.target.value)} value="*">
          {" "}
          *
        </button>
        {/* division button */}
        <button onClick={(e) => setInput(input + e.target.value)} value="/">
          {" "}
          /
        </button>
        {/*, "=" button */}
        <button
          onClick={(e) => {
            /*Setting View*/
            try {
              setInput(
                String(eval(input)).length > 3 &&
                  String(eval(input)).includes(".")
                  ? String(eval(input).toFixed(4))
                  : String(eval(input))
              );
            }
            catch (e) {
              console.log(e);
            }
          }}
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
}
/*Everything is controled by ReactDOM */
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
