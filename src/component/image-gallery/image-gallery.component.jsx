import React, { useState, useEffect } from 'react';
import API_KEY from './image-gallery.const';
import data from './data';
import { StyledImageGallery } from './image-gallery.styled';
import Picture from '../picture';

const ImageGallery = () => {
  const [currentPicture, setCurrentPicture] = useState('');
  const { imageFiles } = data;
  // console.log(data);
  // console.log(imageFiles);

  useEffect(() => {}, [currentPicture]);

  const handleClick = path => setCurrentPicture(path);

  const getPicture = (unfinishedPath, type) =>
    type === 'path'
      ? `https://storage.googleapis.com/${unfinishedPath}`
      : unfinishedPath.split('/').pop();

  return (
    <div>
      <StyledImageGallery>
        {imageFiles
          .filter(imageFile =>
            ['jpg', 'png'].includes(
              imageFile
                .split('/')
                .pop()
                .split('.')[1]
            )
          )
          .map(imageFile => (
            <Picture
              key={imageFile}
              src={getPicture(imageFile, 'path')}
              alt={getPicture(imageFile, 'alternative')}
              onClick={handleClick}
            />
          ))}
      </StyledImageGallery>
    </div>
  );
};

export default ImageGallery;
