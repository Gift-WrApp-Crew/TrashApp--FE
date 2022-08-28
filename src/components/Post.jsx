import React, { useState, useEffect } from 'react';
import { insertImage } from '../../state/services/fetch-utils.js';

export default function Post() {
  // const [image, setImage] = useState('');

  const handleSubmit = async (image) => {
    await insertImage(image);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>upload pic here</h1>
        <input type="file"></input>
        <button type="submit">upload!</button>
      </form>
      Post
    </div>
  );
}
