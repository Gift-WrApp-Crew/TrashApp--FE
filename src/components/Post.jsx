import styles from './Post.css';

export default function Post({ post }) {
  return (
    <div className={styles.PostCard}>
      <div className={styles.PostHeader}>
        <h2 className={styles.Username}>{post.username}</h2>
        <h5 className={styles.CreatedAt}> {post.created_at ?? new Date().toDateString()}</h5>
      </div>
      <div className={styles.ImageContainer}>
        <img className={styles.PostImage} src={post.image_url} />
      </div>
      <h4 className={styles.Caption}>{post.caption}</h4>
      <div className={styles.Reactions}>
        <button className={styles.Button}>🔥 </button>
        <button className={styles.Button}>♻️</button>
      </div>
    </div>
  );
}
