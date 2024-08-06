import React from 'react';
import {
  UserProfileContainer,
  ProfileCard,
  ProfileImage,
  CardHeader,
  CardContent,
} from './styles';

const UserProfile: React.FC = () => {
  const toggleInfo = (e: React.MouseEvent<HTMLDivElement>) => {
    const parentElement = e.currentTarget.parentNode as HTMLElement;
    parentElement.classList.toggle('open');
  };

  return (
    <UserProfileContainer>
      <ProfileCard className="user__profile__image">
        <ProfileImage>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
            alt="Profile"
          />
        </ProfileImage>
        <h4>Fernando Faucho</h4>
        <p>CEO & Founder at Highly Inc</p>
      </ProfileCard>
      <ProfileCard>
        <CardHeader onClick={toggleInfo}>
          <h4>Information</h4>
          <i className="fa fa-angle-down"></i>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          ultrices urna a imperdiet egestas. Donec in magna quis ligula
        </CardContent>
      </ProfileCard>
    </UserProfileContainer>
  );
};

export default UserProfile;
