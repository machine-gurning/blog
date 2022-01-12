import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Display of blog post on main screen

const Post = ({ blogPostTitle, blogPostContent, date, userID }) => {
  // Make date legible

  const prettyDate = date.slice(0, 10);

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
          <FontAwesomeIcon icon={faTrashAlt} className="fa-icon" />
          <FontAwesomeIcon icon={faEdit} className="fa-icon" />
        </div>
      </div>
    </article>
  );
};

export default Post;
