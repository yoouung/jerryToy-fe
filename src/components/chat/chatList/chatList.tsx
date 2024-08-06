import React from 'react';
import {
  ChatListContainer,
  Heading,
  SearchWrap,
  ChatListItemsContainer,
} from './styles';
import ChatListItems from './chatListItems';

const allChatUsers = [
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU',
    id: 1,
    name: 'Tim Hover',
    active: true,
    isOnline: true,
  },
  // ... 더 많은 사용자들
];

const ChatList: React.FC = () => {
  return (
    <ChatListContainer>
      <Heading>
        <button className="btn-nobg">
          <i className="fa fa-ellipsis-h"></i>
        </button>
      </Heading>
      <SearchWrap>
        <input type="text" placeholder="Search Here" required />
        <button className="search-btn">
          <i className="fa fa-search"></i>
        </button>
      </SearchWrap>
      <ChatListItemsContainer>
        {allChatUsers.map((user) => (
          <ChatListItems
            key={user.id}
            image={user.image}
            name={user.name}
            active={user.active}
            isOnline={user.isOnline}
            animationDelay={0}
          />
        ))}
      </ChatListItemsContainer>
    </ChatListContainer>
  );
};

export default ChatList;
