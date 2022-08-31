import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';
// import { getPhoto } from '../../state/services/fetch-utils.js';

export default function Images() {
  const [imageIds, setImageIds] = useState();

  const loadImages = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/images`);
      const data = await res.json();
      console.log(data, 'DATA');
      setImageIds(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    loadImages();
  }, []);
  return (
    <div>
      <h1 className="title">Cloudinary Gallery</h1>
      <div className="gallery">
        {imageIds &&
          imageIds.map((imageId, index) => (
            <Image
              key={index}
              cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
              publicId={imageId}
              width="300"
              crop="scale"
            />
          ))}
      </div>
    </div>
  );
}
