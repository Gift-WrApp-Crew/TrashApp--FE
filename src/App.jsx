/* eslint-disable max-len */
import { logoutUser } from '../state/services/fetch-utils';
import { useState } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, NavLink, Route, Routes, Navigate } from 'react-router-dom';
import PostList from './components/PostList.jsx';
import React, { Fragment } from 'react';

export default function App() {
  const [currentUser, setCurrentUser] = useState({});

  async function handleLogout() {
    await logoutUser();
    location.replace('/');
    setCurrentUser({});
  }

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

          <Route
            exact
            path="/posts"
            element={currentUser.id ? <PostList /> : <Navigate to="/" />}
          />
        </Routes>
      </main>
    </Router>
  );
}

{
  /* <>
//   <>
//     <ul>
//       {posts.map((post) => ( */
}
//         <li key={post.id}>
//           <p>{post.caption}</p>
//           {/* <Images /> */}
//           <img src={post.image_url} />
//         </li>
//       ))}
//     </ul>
//     <Post />
//   </>
