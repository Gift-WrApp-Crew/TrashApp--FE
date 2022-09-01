import Post from './Post.jsx';
import { useState, useEffect } from 'react';
import { getAllPosts } from '../../state/services/fetch-utils';
import styles from './PostList.css';
import SearchBar from './SearchBar.jsx';

export default function PostList() {
  const [posts, setPosts] = useState(null);

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
    <>
      <div>
        <SearchBar posts={posts} placeholder="Pick through your trash..." />
      </div>
      <div className={styles.PostListContainer}>
        Post List
        {posts.length &&
          posts.map((post) => (
            // <p>{post.caption}</p>;
            <Post key={post.id} post={post} />
          ))}
      </div>
    </>
  );
}
