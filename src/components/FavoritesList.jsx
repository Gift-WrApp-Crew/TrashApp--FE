import { useEffect, useState } from 'react';
import { getFavorites } from '../../state/services/fetch-utils';
import Post from './Post';
import styles from './FavoritesList.css';

export default function FavoritesList() {
  const [favPosts, setFavPosts] = useState([]);

  async function fetch() {
    const postData = await getFavorites();
    setFavPosts(postData);
  }
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className={styles.FavoritesList}>
      {favPosts.map((post) => (
        <Post key={post.id} post={post} favPosts={favPosts} fetch={fetch} />
      ))}
    </div>
  );
}
