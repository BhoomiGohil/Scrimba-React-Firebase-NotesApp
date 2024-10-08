import React from "react"; // Import React
import ReactMde from "react-mde"; // Import React Markdown Editor (ReactMde) component
import Showdown from "showdown"; // Import Showdown for converting Markdown to HTML
import "react-mde/lib/styles/css/react-mde-all.css"; // Import ReactMde CSS styles

// Editor component, which accepts currentNote and updateNote as props
export default function Editor({ currentNote, updateNote }) {
  // State to track the currently selected tab in the Markdown editor (either "write" or "preview")
  const [selectedTab, setSelectedTab] = React.useState("write");

  // Initialize the Markdown to HTML converter with some options
  const converter = new Showdown.Converter({
    tables: true, // Enable table support in Markdown
    simplifiedAutoLink: true, // Automatically create links from URLs
    strikethrough: true, // Enable strikethrough syntax
    tasklists: true, // Enable task list syntax (checkboxes)
  });

  return (
    <section className="pane editor">
      {" "}
      {/* Editor section */}
      <ReactMde
        value={currentNote.body} // Set the value to the current note's body
        onChange={updateNote} // Trigger updateNote when the content changes
        selectedTab={selectedTab} // Bind the selected tab state to ReactMde
        onTabChange={setSelectedTab} // Update the selected tab state when switching between "write" and "preview"
        generateMarkdownPreview={
          (markdown) => Promise.resolve(converter.makeHtml(markdown)) // Convert Markdown to HTML in the preview tab
        }
        minEditorHeight={80} // Set minimum height of the editor
        heightUnits="vh" // Use viewport height units for editor height
      />
    </section>
  );
}
