import React from 'react';
import { ChatBodyContainer } from './styles';
import ChatContent from '../../components/chat/chatContent';

const ChatBody: React.FC = () => {
  return (
    <ChatBodyContainer>
      <ChatContent />
    </ChatBodyContainer>
  );
};

export default ChatBody;
