import React, { useEffect, useState } from "react";
import { createEditor } from "slate";
import { useParams, Navigate } from "react-router-dom";
import { Slate, Editable, withReact } from "slate-react";

const SinglePost = () => {
  // Slate related stuff
  // Create slate editor
  const [editor] = useState(() => withReact(createEditor()));
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "" }],
    },
  ]);
  const [title, setTitle] = useState("");
  const [goHome, setGoHome] = useState(false);
  // Edit mode or new post mode
  const { id } = useParams();
  const isNewPost = !id && true;

  // Function to extract data from database
  const fetchData = async () => {
    try {
      // Query server
      const response = await fetch(`http://localhost:3001/api/v1/post/${id}`);
      const data = await response.json();

      // insert into title and slate
      setTitle(data.onePost.blogPostTitle);
      editor.apply({
        type: "insert_text",
        path: [0, 0],
        offset: 15,
        text: data.onePost.blogPostContent,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Extract post info from database
  useEffect(() => {
    // get data
    if (!isNewPost) {
      fetchData();
    }
  }, []);

  // Send post request to server
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Turning paragraphs into a single string of text
    var bodyText = "";
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

    // If new then send post to root, if editing then send PATCH to special location
    if (isNewPost) {
      try {
        const response = await fetch("http://localhost:3001/api/v1", {
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
          method: "POST",
          body: JSON.stringify(data),
        });
      } catch (error) {
        console.log(error);

        // TODO error page
      }
    } else {
      try {
        console.log("patching.");

        const response = await fetch(
          `http://localhost:3001/api/v1/post/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            mode: "cors",
            method: "PATCH",
            body: JSON.stringify(data),
          }
        );
      } catch (error) {
        console.log(error);

        // TODO error page
      }
    }
    setGoHome(true);
  };

  return (
    <section>
      <div className="central-section">
        <form id="postEditor" onSubmit={handleSubmit}>
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
        </form>
        <div>
          <button form="postEditor" className="btn-standard" type="submit">
            Submit
          </button>
          <button className="btn-standard" onClick={() => setGoHome(true)}>
            Cancel
          </button>
        </div>
      </div>

      {goHome ? <Navigate to="/" /> : null}
    </section>
  );
};

export default SinglePost;
