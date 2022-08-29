import { getAllPosts } from '../state/services/fetch-utils';
import React, { useState, useEffect } from 'react';
import Post from './components/Post.jsx';
import Images from './components/Images.jsx';

export default function App() {
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
    <>
      <div>Whats app doc?</div>
      <Post />
      <Images />
    </>
  );
}
