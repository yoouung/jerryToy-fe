import React from 'react';
import {
  ChatItemContainer,
  ChatItemContent,
  ChatItemMeta,
  AvatarContainer,
} from './styles';

interface ChatItemProps {
  animationDelay: number;
  user: string;
  msg: string;
  image: string;
}

const ChatItem: React.FC<ChatItemProps> = ({
  animationDelay,
  user,
  msg,
  image,
}) => {
  return (
    <ChatItemContainer
      style={{ animationDelay: `0.${animationDelay}s` }}
      className={user}
    >
      <ChatItemContent>
        <p>{msg}</p>
        <ChatItemMeta>
          <span>16 mins ago</span>
          <span>Seen 1.03PM</span>
        </ChatItemMeta>
      </ChatItemContent>
      <AvatarContainer>
        <img src={image} alt="Avatar" />
      </AvatarContainer>
    </ChatItemContainer>
  );
};

export default ChatItem;
