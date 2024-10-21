// import Post from './Posts'
import { useEffect, useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import { PostsContainer } from "./PostsContainer";
import { Post, PostModel } from "./Posts";
import { ButtonTest } from "./ButtonTest";

export function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [post, setPost] = useState<PostModel>();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {}
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {}
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1/"
        );
        const data = await response.json();
        setPost(data);
      } catch (error) {}
    };
    fetchPost();
  }, []);

  const handleAddCount = () => {
    setCount((count) => count + 1);
  };

  const handleSubtractCount = () => {
    setCount((count) => count - 1);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <ButtonTest handleQtyChange={handleAddCount} count={count}></ButtonTest>
        <ButtonTest
          handleQtyChange={handleSubtractCount}
          count={count}
        ></ButtonTest>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      {/* {users.map((user: any) => {
        return <p>{user?.email}</p>;
      })}
      {posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })} */}
      {post ? <Post {...post} /> : ""}
    </>
  );
}
