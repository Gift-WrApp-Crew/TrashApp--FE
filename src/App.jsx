/* eslint-disable max-len */
import { useState } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PostList from './components/PostList.jsx';
import PostForm from './components/PostForm';
import AboutUs from './components/AboutUs';
import LandingPage from './components/LandingPage';
import FavoritesList from './components/FavoritesList';

import styles from './App.css';
// import logo from './logo.png';

import Navigation from './components/Navigation';

export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [posts, setPosts] = useState(null);

  return (
    <Router>
      <header>
        <Navigation />
        <img className={styles.Logo} src="./newlogo.png" />
      </header>

      <main>
        <Routes>
          <Route
            exact
            path="/"
            element={
              currentUser.id ? <Navigate to="/posts" /> : <SignIn setCurrentUser={setCurrentUser} />
            }
          />
          <Route
            exact
            path="/signup"
            element={
              currentUser.id ? (
                <Navigate to="/landing" />
              ) : (
                <SignUp setCurrentUser={setCurrentUser} />
              )
            }
          />

          <Route exact path="/about" element={currentUser.id ? <AboutUs /> : <Navigate to="/" />} />

          <Route
            exact
            path="/posts"
            element={
              currentUser.id ? <PostList posts={posts} setPosts={setPosts} /> : <Navigate to="/" />
            }
          />

          <Route exact path="/favorites" element={<FavoritesList />} />

          <Route exact path="/landing" element={<LandingPage />} />

          <Route
            exact
            path="/create-post"
            element={currentUser.id ? <PostForm setPosts={setPosts} /> : <Navigate to="/" />}
          />
        </Routes>
      </main>
    </Router>
  );
}
