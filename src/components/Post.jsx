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
    <>
      <div className={styles.PostHeader}>
        <h2 className={styles.Username}>{post.username}</h2>
        <h5 className={styles.CreatedAt}> {post.created_at ?? new Date().toDateString()}</h5>
      </div>
      <div className={styles.ImageContainer}>
        <img className={styles.PostImage} src={post.image_url} />
      </div>
      <h4 className={styles.Caption}>{post.caption}</h4>
      <div className={styles.Reactions}>
        <button onClick={handleTreasureIncrement}>💎{post.treasure_reaction}</button>
        <button onClick={handleTrashIncrement}>🗑️{post.trash_reaction}</button>
      </div>
    </>
  );
}
