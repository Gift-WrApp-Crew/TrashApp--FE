import { getAllPosts } from '../../state/services/fetch-utils';
import { useState, useEffect } from 'react';

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
      <div>Whats app doc?</div>
      <div>{posts.caption}</div>
    </>
  );
}
