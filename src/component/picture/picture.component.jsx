import React from 'react';
import { StyledPicture } from './picture.styled';

const Picture = ({ src, alt, onClick }) => {
  return <StyledPicture path={src} title={alt} onclick={() => onClick(src)} />;
};

export default Picture;
