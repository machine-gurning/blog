import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const NewPost = () => {
  // Create slate editor
  const [editor] = useState(() => withReact(createEditor()));
  // Track states
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "" }],
    },
  ]);
  const [title, setTitle] = useState("");

  // Send post request to server
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Turning paragraphs into a single string of text
    var bodyText = "";

    // Blank paragraphs = line space
    value.map((i) => {
      let text = i.children[0].text;
      if (!text) {
        bodyText = bodyText + "\n\n";
      } else {
        bodyText = bodyText + text;
      }
    });

    // Create object to send
    const data = {
      title: title,
      content: bodyText,
    };

    // Send object
    try {
      const response = await fetch("http://localhost:3001/api/v1", {
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        method: "POST",
        body: JSON.stringify(data),

        // redirect to homepage
      });
    } catch (error) {
      console.log(error);

      // TODO error page
    }
  };

  return (
    <section>
      <div className="central-section">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="title"
            className="new-post-title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="editor-container">
            <Slate
              editor={editor}
              value={value}
              onChange={(newValue) => setValue(newValue)}
            >
              <Editable placeholder="Content" />
            </Slate>
          </div>
          <button className="btn-standard" type="submit">
            Submit post
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewPost;
