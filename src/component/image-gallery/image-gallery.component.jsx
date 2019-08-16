import React, { useState, useEffect } from 'react';
import API_KEY from './image-gallery.const';
import data from './data';

const ImageGallery = () => {
  const [currentPicture, setCurrentPicture] = useState('');
  const { imageFiles } = data;
  // console.log(data);
  // console.log(imageFiles);

  // useEffect(() => {
  //   if (currentPicture) {
  //   }
  // }, [currentPicture]);

  return (
    <div>
      {imageFiles.map(
        imageFile => (
          <img
            key={imageFile}
            src='https://storage.googleapis.com/'
            alt='picture'
            width='120'
          />
        )
        // console.log(imageFiles)
      )}
    </div>
  );
};

export default ImageGallery;
