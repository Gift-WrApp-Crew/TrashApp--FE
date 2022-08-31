import { useState, useEffect } from 'react';
import { insertImage } from '../../state/services/fetch-utils.js';
import { createPost } from '../../state/services/fetch-utils.js';
import { getUser } from '../../state/services/fetch-utils.js';
import styles from './PostForm.css';

export default function PostForm() {
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [caption, setCaption] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
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

      {/* <div className={styles.PostCard}>
        <h3>{post.caption}</h3>
        <p> {post.created_at}</p>
        <p> {post.username}</p>
        <img src={post.image_url} />
      </div> */}
    </>
  );
}
