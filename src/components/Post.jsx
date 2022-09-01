/* eslint-disable max-len */
import styles from './Post.css';
import { updatePost } from '../../state/services/fetch-utils';

export default function Post({ post, getTrashPostsOnLoad }) {
  async function handleTrashIncrement() {
    await updatePost({
      ...post,
      trash_reaction: Number(post.trash_reaction) + 1,
    });
    getTrashPostsOnLoad();
  }

  async function handleTreasureIncrement() {
    await updatePost({
      ...post,
      treasure_reaction: Number(post.treasure_reaction) + 1,
    });
    getTrashPostsOnLoad();
  }

  return (
    <div className={styles.PostCard}>
      <h3>{post.username}</h3>
      <p>{post.created_at}</p>
      <h4>{post.caption}</h4>
      <img src={post.image_url} />
      <button onClick={handleTreasureIncrement}>💎{post.treasure_reaction}</button>
      <button onClick={handleTrashIncrement}>🗑️{post.trash_reaction}</button>
    </div>
  );
}
