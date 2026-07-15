import React, { useState } from 'react';

export default function TextArea(props) {

  const [Text, setText] = useState("");

  const convertup = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
    document.title = "Textutils-Uppercase";
  };

  const convertlow = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
    document.title = "Textutils-Lowercase";
  };

  const copyText = () => {
    navigator.clipboard.writeText(Text);
    props.showAlert("Text copied successfully", "success");
    document.title = "Textutils-Copy";
  };

  const downloadText = () => {
    const element = document.createElement("a");
    const file = new Blob([Text], { type: "text/plain" });

    element.href = URL.createObjectURL(file);
    element.download = "Text.txt";

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    props.showAlert("Text downloaded successfully", "success");
    document.title = "Textutils-Download";
  };

  const captilize = () => {
    const newText = Text
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    setText(newText);
    props.showAlert("Text capitalized successfully", "success");
    document.title = "Textutils-Capitalize";
  };

  const replace = () => {
    const oldWord = prompt("Enter the text to find:");
    const newWord = prompt("Enter the replacement text:");

    if (oldWord && newWord !== null) {
      const newText = Text.replaceAll(oldWord, newWord);
      setText(newText);
      props.showAlert("Text replaced successfully", "success");
      document.title = "Textutils-Replace";
    }
  };

  // Reverse Text
  const reverseText = () => {
    const newText = Text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text reversed successfully", "success");
    document.title = "Textutils-Reverse";
  };

  // Remove Extra Spaces
  const removeSpaces = () => {
    const newText = Text.split(/\s+/).join(" ").trim();
    setText(newText);
    props.showAlert("Extra spaces removed successfully", "success");
    document.title = "Textutils-RemoveSpaces";
  };

  // Clear Text
  const clearText = () => {
    setText("");
    props.showAlert("Text cleared successfully", "success");
    document.title = "Textutils-Clear";
  };

  const onchangefunc = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container my-4"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h2>{props.heading}</h2>

        <textarea
          className="form-control"
          value={Text}
          onChange={onchangefunc}
          style={{
            backgroundColor: props.mode === 'light' ? 'white' : '#042743',
            color: props.mode === 'dark' ? 'white' : 'black'
          }}
          id="my-box"
          rows="8"
        ></textarea>

        <button className="btn btn-primary mx-2 my-2" onClick={convertup}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={convertlow}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={copyText}>
          Copy
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={downloadText}>
          Download
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={captilize}>
          Capitalize
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={replace}>
          Replace
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={reverseText}>
          Reverse
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={removeSpaces}>
          Remove Spaces
        </button>

        <button className="btn btn-danger mx-2 my-2" onClick={clearText}>
          Clear
        </button>
      </div>

      <div
        className="container my-2"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h2>Your Text Summary</h2>

        <p>
          {
            Text.split(/\s+/).filter((element) => element.length !== 0).length
          }{" "}
          words and {Text.length} characters
        </p>

        <p>
          {0.008 *
            Text.split(/\s+/).filter((element) => element.length !== 0).length}
          {" "}Minutes to read
        </p>

        <h2>Preview</h2>

        <p>
          {Text.length > 0 ? Text : "Enter text above to preview here."}
        </p>
      </div>
    </>
  );
}