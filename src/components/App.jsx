import React from "react";

function App() {
  const [text, settext] = React.useState("");
  const [isMouseOver, setMouseOver] = React.useState(false);
  const [headingtext, setHeadingtext] = React.useState("");

  function hadleClick(event) {
    settext(event.target.value);
  }

  function heading() {
    setHeadingtext(text);
  }
  function over() {
    setMouseOver(true);
  }

  function out() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello {headingtext}</h1>
      <input
        onChange={hadleClick}
        type="text"
        placeholder="What's your name?"
        value={text}
      />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={heading}
        onMouseOver={over}
        onMouseOut={out}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
