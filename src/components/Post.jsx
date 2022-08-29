import { useState, useEffect } from 'react';
import { insertImage } from '../../state/services/fetch-utils.js';
import { createPost } from '../../state/services/fetch-utils.js';

export default function Post() {
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
    console.log('image', image);
    try {
      await insertImage(image);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitTrashPost = async (e) => {
    e.preventDefault();
    await createPost({
      caption,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmitTrashPost}>
        <input value={caption} onChange={(e) => setCaption(e.target.value)}></input>
        <button>Add Post</button>
      </form>
      <form onSubmit={handleSubmit}>
        <h1>upload pic here</h1>
        <input
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
        ></input>

        <button type="submit">upload!</button>
      </form>
      {previewSource && <img src={previewSource} alt="image-preview" />}
      Post
    </div>
  );
}
