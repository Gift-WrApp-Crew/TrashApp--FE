/* eslint-disable max-len */
import { logoutUser } from '../state/services/fetch-utils';
import { useState, useEffect } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, NavLink, Route, Navigate, Routes } from 'react-router-dom';
import Post from './components/Post';
import { getAllPosts } from '../state/services/fetch-utils';
import Images from './components/Images.jsx';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  async function handleLogout() {
    await logoutUser();
    location.replace('/');
    setCurrentUser({});
  }

  // const [posts, setPosts] = useState([]);

  async function getTrashPostsOnLoad() {
    const trashPosts = await getAllPosts();
    console.log('trashPosts', trashPosts);

    if (trashPosts) {
      setPosts(trashPosts);
    }
  }

  useEffect(() => {
    getTrashPostsOnLoad();
  }, []);

  return (
    <>
      <>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <p>{post.caption}</p>
              <Images />
              {/* <img src={post.image_url} /> */}
            </li>
          ))}
        </ul>
        <Post />
      </>
      <Router>
        <header>
          <NavLink to="/posts">Posts</NavLink>
          <button onClick={handleLogout}>Logout</button>
        </header>
        <main>
          <Routes>
            <Route
              exact
              path="/"
              element={
                !currentUser.id ? (
                  <SignIn setCurrentUser={setCurrentUser} />
                ) : (
                  <Navigate to="/posts" />
                )
              }
            />

            <Route
              exact
              path="/signup"
              element={
                !currentUser.id ? (
                  <SignUp setCurrentUser={setCurrentUser} />
                ) : (
                  <Navigate to="/posts" />
                )
              }
            />

            {/* <Route exact path="/posts">
      {currentUser.id ? <Post postList={postList} /> : <Navigate to="/" />}
    </Route> */}
          </Routes>
        </main>
      </Router>
    </>
  );
}

{
  /* <>
  <div>Whats app doc?</div>
  <Post />
      <Images />
</>; */
}

{
  /* <>
  <div>Whats app doc?</div>
  <Post />
</>; */
}
