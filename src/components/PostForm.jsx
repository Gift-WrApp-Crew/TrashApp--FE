import { useState, useEffect } from 'react';
import { insertImage } from '../../state/services/fetch-utils.js';
import { createPost } from '../../state/services/fetch-utils.js';
import { getUser } from '../../state/services/fetch-utils.js';

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
        username
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h3>upload pic here</h3>
          <input
            type="file"
            name="image"
            onChange={handleFileInputChange}
            value={fileInputState}
          ></input>
        </form>
        <form onSubmit={handleSubmit}>
          <input value={caption} onChange={(e) => setCaption(e.target.value)}></input>
          <button>Add Post</button>
        </form>
        {previewSource && <img src={previewSource} alt="image-preview" />}
        Post
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
