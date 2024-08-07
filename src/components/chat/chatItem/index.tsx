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
  timestamp: string;
  status: string;
}

const ChatItem: React.FC<ChatItemProps> = ({
  animationDelay,
  user,
  msg,
  image,
  timestamp,
  status,
}) => {
  return (
    <ChatItemContainer
      style={{ animationDelay: `0.${animationDelay}s` }}
      className={user}
    >
      <ChatItemContent>
        <p>{msg}</p>
        <ChatItemMeta>
          <span>{timestamp}</span>
          <span>{status}</span>
        </ChatItemMeta>
      </ChatItemContent>
      <AvatarContainer>
        <img src={image} alt="Avatar" />
      </AvatarContainer>
    </ChatItemContainer>
  );
};

export default ChatItem;
