import { getAllPosts } from '../state/services/fetch-utils';
import React, { useState, useEffect } from 'react';
import Post from './components/Post.jsx';

export default function App() {
  const [posts, setPosts] = useState([]);

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
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>{post.caption}</p>
            <img src={post.image_url}/>
          </li>
        ))}
      </ul>
      <Post />
    </>
  );
}
