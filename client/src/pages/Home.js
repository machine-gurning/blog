import { useState, useEffect } from "react";
import Post from "../components/Post";
const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/v1/");
        const data = await response.json();
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <div className="central-section">
        {posts.map((post) => {
          return <Post key={post.date} {...post} />;
        })}
      </div>
    </section>
  );
};

export default Home;
