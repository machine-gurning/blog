import { useState, useEffect } from "react";
import Post from "../components/Post";
const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deletePost = async (id) => {
    // send thingy to database to delete thing
    console.log(`deleting ${id}`);
    const response = await fetch(`http://localhost:3001/api/v1/post/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      method: "DELETE",
      // redirect to homepage
    });

    // Fetch data again
    fetchData();
  };

  return (
    <section>
      <div className="central-section">
        {posts.map((post) => {
          return <Post key={post.date} {...post} deletePost={deletePost} />;
        })}
      </div>
    </section>
  );
};

export default Home;
