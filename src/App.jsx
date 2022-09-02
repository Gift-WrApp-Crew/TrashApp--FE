/* eslint-disable max-len */
import { useState } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PostList from './components/PostList.jsx';
import PostForm from './components/PostForm';
import AboutUs from './components/AboutUs';

import styles from './App.css';
// import logo from './logo.png';

import Navigation from './components/Navigation';

export default function App() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <Router>
      <header>
        {currentUser.id ? <Navigation /> : !(<Navigation />)}
        <img className={styles.Logo} src="./newlogo.png" />
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
          <Route exact path="/about" element={currentUser.id ? <AboutUs /> : <Navigate to="/" />} />

          <Route
            exact
            path="/posts"
            element={currentUser.id ? <PostList /> : <Navigate to="/" />}
          />

          <Route
            exact
            path="/create-post"
            element={currentUser.id ? <PostForm /> : <Navigate to="/" />}
          />
        </Routes>
      </main>
    </Router>
  );
}
