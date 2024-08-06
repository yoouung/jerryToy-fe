import React from 'react';
import { AvatarContainer, AvatarImage, OnlineStatus } from './styles';

interface AvatarProps {
  image: string;
  isOnline: string;
}

const Avatar: React.FC<AvatarProps> = ({ image, isOnline }) => {
  return (
    <AvatarContainer>
      <AvatarImage>
        <img src={image} alt="Avatar" />
      </AvatarImage>
      <OnlineStatus className={isOnline} />
    </AvatarContainer>
  );
};

export default Avatar;
