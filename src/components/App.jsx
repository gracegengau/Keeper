import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, handleNotes] = useState([]);

  function addNote(newNote) {
    handleNotes((prev) => {
      return [...prev, newNote];
    });
  }

  function deleteNote(id) {
    handleNotes(() => {
      return noteList.filter((t, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addButtonClick={addNote} />
      {noteList.map((iNote, index) => (
        <Note
          key={index}
          id={index}
          title={iNote.title}
          content={iNote.content}
          delButtonClick={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
