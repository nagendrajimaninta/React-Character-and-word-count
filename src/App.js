import React, { useState } from "react";

const App = () => {
  const [charLimit, setCharLimit] = useState(50);
  const [fontSize, setFontSize] = useState(16);
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const oninputChange = (e) => {
    const text = e.target.value;
    /* if(charCount >=charLimit){
      e.preventDefault();   
      return;
    } */

    let w_count = 0;
    if (text.length > 0) w_count = text.trim().split(" ").length;
    setWordCount(w_count);
    setCharCount(text.length);
  };
  const onCharLimitChangeHandler = (e) => {
    setCharLimit(parseInt(e.target.value));
  };
  /* const onFontSizeHandler =(e)=>{

  } */
  return (
    <div id="main">
      <input
        type="range"
        id="fontSize-input"
        min="16"
        max="32"
        onChange={(e) => {
          setFontSize(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="number"
        id="char-limit-input"
        value={charLimit}
        onChange={onCharLimitChangeHandler}
      />
      <br />
      <br />
      <textarea
        style={{ fontSize: fontSize + "px" }}
        onChange={oninputChange}
        maxLength={charLimit}
      ></textarea>
      <br />
      <div id="word-counter">Total number of words written {wordCount}</div>
      <br />
      <div id="char-counter">Total number of characters used {charCount}</div>
    </div>
  );
};

export default App;
