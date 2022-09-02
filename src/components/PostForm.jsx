/* eslint-disable max-len */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllPosts, insertImage } from '../../state/services/fetch-utils.js';
import { createPost } from '../../state/services/fetch-utils.js';
import { getUser } from '../../state/services/fetch-utils.js';
import styles from './PostForm.css';

export default function PostForm({ setPosts }) {
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [caption, setCaption] = useState('');
  const history = useNavigate();

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!previewSource) return;
    await uploadImage(previewSource);
    const posts = await getAllPosts();
    setPosts(posts);
    history('/posts');
  };

  const uploadImage = async (image) => {
    try {
      const { result } = await insertImage(image);
      const { username } = await getUser();

      await createPost({
        caption,
        image_url: result.secure_url,
        username,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={styles.Container}>
        <div className={styles.FormContainer}>
          <form onSubmit={handleSubmit}>
            <h3>Upload Your Trash or Treasure Here</h3>
            <input
              type="file"
              name="image"
              onChange={handleFileInputChange}
              value={fileInputState}
            ></input>
          </form>
          <div className={styles.PreviewImage}>
            {previewSource && (
              <img height="300px" width="300px" src={previewSource} alt="image-preview" />
            )}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Add Your Caption"
            ></input>
            <button>Add Post</button>
          </form>
        </div>
      </div>
    </>
  );
}
