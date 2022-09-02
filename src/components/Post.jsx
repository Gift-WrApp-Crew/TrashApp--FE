/* eslint-disable max-len */
import styles from './Post.css';
import { updatePost } from '../../state/services/fetch-utils';
import { deletePost } from '../../state/services/fetch-utils';
import { getUser } from '../../state/services/fetch-utils';
import { addtoFavorites } from '../../state/services/fetch-utils';
// import React, { useEffect, useState } from 'react';

export default function Post({ post, getTrashPostsOnLoad }) {
  async function handleTrashIncrement() {
    await updatePost({
      ...post,
      trash_reaction: Number(post.trash_reaction) + 1,
    });
    getTrashPostsOnLoad();
  }

  async function addFavoritePost() {
    const newFavorite = await addtoFavorites(post.id);
    console.log(newFavorite, 'newFavorite');
    // await fetch();
  }

  // useEffect(() => {
  //   const matchingId = post.favPosts.find((favPost) => Number(favPost.id) === Number(post.id));
  //   setFav(matchingId);
  // }, [post.favPosts, post.id]);

  async function handleTreasureIncrement() {
    await updatePost({
      ...post,
      treasure_reaction: Number(post.treasure_reaction) + 1,
    });
    getTrashPostsOnLoad();
  }

  async function handleDeletePost() {
    const { username } = await getUser();
    if (post.username === username)
      await deletePost({
        ...post,
      });
    getTrashPostsOnLoad();
  }

  return (
    <div className={styles.PostCard}>
      <div className={styles.PostHeader}>
        <h2 className={styles.Username}>{post.username ?? 'Anonymous'}</h2>
        <h5 className={styles.CreatedAt}> {post.created_at ?? new Date().toDateString()}</h5>
      </div>
      <div className={styles.ImageContainer}>
        <img className={styles.PostImage} src={post.image_url} />
      </div>
      <h4 className={styles.Caption}>{post.caption}</h4>
      <div className={styles.Reactions}>
        <button className={styles.Button} onClick={handleTreasureIncrement}>💎{post.treasure_reaction}</button>
        <button className={styles.Button} onClick={handleTrashIncrement}>🗑️{post.trash_reaction}</button>
        <button onClick={handleDeletePost}>Delete Post</button>
        <button onClick={addFavoritePost}>❤️</button>
      </div>
    </div>
  );
}
