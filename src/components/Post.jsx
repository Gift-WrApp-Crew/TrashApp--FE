import styles from './Post.css';

export default function Post({ post }) {
  return (
    <div className={styles.PostCard}>
      <h3>{post.username}</h3>
      <p>{post.created_at}</p>
      <h4>{post.caption}</h4>
      <img src={post.image_url} />
      <p>{post.treasureReaction}</p>
      <p>{post.trashReaction}</p>
    </div>
  );
}
