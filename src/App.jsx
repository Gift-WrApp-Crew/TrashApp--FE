/* eslint-disable max-len */
import { getAllPosts, logoutUser } from '../state/services/fetch-utils';
import React, { useState, useEffect, Fragment } from 'react';
import Post from './components/Post.jsx';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, NavLink, Route, Navigate, Routes } from 'react-router-dom';

export default function App() {
  const [currentUser, setCurrentUser] = useState({});

  async function handleLogout() {
    await logoutUser();
    location.replace('/');
    setCurrentUser({});
  }

  // const [posts, setPosts] = useState([]);

  // async function getTrashPostsOnLoad() {
  //   const trashPosts = await getAllPosts();
  //   console.log('trashPosts', trashPosts);

  //   if (trashPosts) {
  //     setPosts(trashPosts);
  //   }
  // }

  // useEffect(() => {
  //   getTrashPostsOnLoad();
  // }, []);

  return (
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

          <Route exact path="/signup" element={<SignUp setCurrentUser={setCurrentUser} />} />

          {/* <Route exact path="/posts">
            {currentUser.id ? <Post postList={postList} /> : <Navigate to="/" />}
          </Route> */}
        </Routes>
      </main>
    </Router>
  );
}

{
  /* <>
  <div>Whats app doc?</div>
  <Post />
</>; */
}
