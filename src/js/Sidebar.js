import React from "react"; // Import React to use JSX and React features

// Sidebar component accepts props and displays a list of notes
export default function Sidebar(props) {
  // Map over the notes array and create a div for each note
  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`title ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`} // Add 'selected-note' class if the note is currently selected
        onClick={() => props.setCurrentNoteId(note.id)} // Set the current note when clicked
      >
        {/* Display the first line of the note's body */}
        <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
        <button
          className="delete-btn"
          onClick={(event) => props.deleteNote(event, note.id)} // Delete note when the button is clicked
        >
          <i className="gg-trash trash-icon"></i>{" "}
          {/* Trash icon for deleting notes */}
        </button>
      </div>
    </div>
  ));

  return (
    <section className="pane sidebar">
      {" "}
      {/* Sidebar section containing the notes */}
      <div className="sidebar--header">
        <h3>Notes</h3> {/* Title of the sidebar */}
        <button className="new-note" onClick={props.newNote}>
          {" "}
          {/* Button to create a new note */}+
        </button>
      </div>
      {noteElements} {/* Render all the note elements */}
    </section>
  );
}
