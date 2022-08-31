import React from 'react';
import styles from './Post.css';

export default function Post({ post }) {
  console.log('POST');
  return (
    <div className={styles.PostCard}>
      <h3>{post.caption}</h3>
      <p> {post.created_at}</p>
      <p> {post.username}</p>
      <img src={post.image_url} />
    </div>
  );
}
