import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, handleTextChange] = useState("");
  const [inputTitle, handleTitlechange] = useState("");

  function updateTitle(event) {
    var newTitle = event.target.value;
    handleTitlechange(newTitle);
  }

  function updateText(event) {
    var newText = event.target.value;
    handleTextChange(newText);
  }

  return (
    <div>
      <form>
        <input
          onChange={updateTitle}
          name="title"
          placeholder="Title"
          value={inputTitle}
        />
        <textarea
          onChange={updateText}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputText}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            handleTextChange("");
            handleTitlechange("");
            props.addButtonClick({ title: inputTitle, content: inputText });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
