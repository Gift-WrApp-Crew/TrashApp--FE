/* eslint-disable max-len */
import Post from './Post.jsx';
import { useState, useEffect } from 'react';
import { getAllPosts } from '../../state/services/fetch-utils';
import styles from './PostList.css';

export default function PostList() {
  const [posts, setPosts] = useState(null);
  // store boolean state value, pass down setUpdatedpost into each mapped post, after update set vote values to true, useeffect to watch boolean state value & refetches

  //in post.jsx check at button if trashvote is < than state value then display trash reaction, otherwise display trashIncrement

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

  if (!posts) return null;

  return (
    <div className={styles.PostListContainer}>
      {posts.length &&
        posts.map((post) => (
          // <p>{post.caption}</p>;
          <Post key={post.id} post={post} getTrashPostsOnLoad={getTrashPostsOnLoad} />

        ))}
    </div>
  );
}
