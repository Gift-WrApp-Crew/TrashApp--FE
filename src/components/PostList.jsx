/* eslint-disable no-unused-vars */

/* eslint-disable max-len */
import Post from './Post.jsx';
import { useState, useEffect } from 'react';
import { getAllPosts } from '../../state/services/fetch-utils';
import styles from './PostList.css';
import SearchBar from './SearchBar.jsx';

export default function PostList({ posts, setPosts}) {
  const [filteredData, setFilteredData] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    console.log('fetchingPosts');
    getTrashPostsOnLoad();
  }, []);

  async function getTrashPostsOnLoad() {
    const trashPosts = await getAllPosts();

    if (trashPosts) {
      setPosts(trashPosts);
    }
  }


  useEffect(() => {
    if (search) {
      const filteredPosts = posts.filter((value) => {
        return value.caption.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredResults(filteredPosts);
    }
  }, [search]);

  function conditionalRender() {
    if (!filteredResults.length) {
      return posts.length && posts.map((post) => <Post key={post.id} post={post} getTrashPostsOnLoad={getTrashPostsOnLoad} />);
    } else {
      return filteredResults.map((post) => <Post key={post.id} post={post} getTrashPostsOnLoad={getTrashPostsOnLoad} />);
    }
  }

  if (!posts) return null;

  return (
    <>
      <div>
        <SearchBar setFilteredData={setFilteredData} setSearch={setSearch} search={search} />
      </div>
      <div className={styles.PostListContainer}>{conditionalRender()}</div>
    </>
  );
}
