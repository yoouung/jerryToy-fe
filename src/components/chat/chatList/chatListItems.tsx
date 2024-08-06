import React from 'react';
import { ChatListItemContainer, UserMeta } from './styles';
import Avatar from './avatar';

interface ChatListItemsProps {
  animationDelay: number;
  image: string;
  name: string;
  active: boolean;
  isOnline: boolean;
}

const ChatListItems: React.FC<ChatListItemsProps> = ({
  animationDelay,
  image,
  name,
  active,
  isOnline,
}) => {
  const selectChat = (e: React.MouseEvent<HTMLDivElement>) => {
    const children = e.currentTarget.parentNode?.children;
    if (children) {
      for (let i = 0; i < children.length; i++) {
        children[i].classList.remove('active');
      }
    }
    e.currentTarget.classList.add('active');
  };

  return (
    <ChatListItemContainer
      style={{ animationDelay: `0.${animationDelay}s` }}
      onClick={selectChat}
      className={active ? 'active' : ''}
    >
      <Avatar image={image} isOnline={isOnline ? 'active' : ''} />
      <UserMeta>
        <p>{name}</p>
        <span className="activeTime">32 mins ago</span>
      </UserMeta>
    </ChatListItemContainer>
  );
};

export default ChatListItems;
