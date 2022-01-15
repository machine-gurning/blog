import { Link } from "react-router-dom";
import { useState } from "react";
// Display of blog post on main screen

const Post = ({ _id, blogPostTitle, blogPostContent, date, deletePost }) => {
  const [showDeleteWarning, setShowDeleteWarning] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  let id = _id;
  // Make date legible
  const prettyDate = date.slice(0, 10);

  const renderCorrectDeleteButton = () => {
    if (showDeleteWarning == false) {
      return (
        <button
          className="btn-standard"
          onClick={() => {
            setShowDeleteWarning(true);
          }}
        >
          Delete
        </button>
      );
    } else {
      // Show the confirmation button
      return (
        <button
          className="btn-standard"
          onClick={() => {
            deletePost(id);
          }}
        >
          Confirm
        </button>
      );
    }
  };

  return (
    <article className="blog-post">
      <p className="blog-post-title">{blogPostTitle}</p>
      <p className="blog-post-content">{blogPostContent}</p>
      <div className="blog-post-info-box">
        <p className="date">{prettyDate}</p>
        {/* <p className="user-id">{userID}</p> */}
        <div className="icons-container">
          {/* // TODO turn these into <Link with dynamic link. 
            Edit button sends to "edit" page, which can be "new post" re-purposed 
            Delete button opens pop-up saying "delete" with overlay, and confirmation... 
            So much to do!!*/}

          <Link to={`/post/${id}`} className="btn-standard">
            Edit
          </Link>

          {renderCorrectDeleteButton()}
        </div>
      </div>
    </article>
  );
};

export default Post;
