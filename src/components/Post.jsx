import { useState, useEffect } from 'react';
import { insertImage } from '../../state/services/fetch-utils.js';

export default function Post() {
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
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
    if(!previewSource) return;
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>upload pic here</h1>
        <input 
          type="file" 
          name="image" 
          onChange={handleFileInputChange}
          value={fileInputState}>
        </input>

        <button type="submit">upload!</button>
      </form>
      {previewSource && (
        <img src={previewSource} alt="image-preview" />
      )}
      Post
    </div>
  );
}
