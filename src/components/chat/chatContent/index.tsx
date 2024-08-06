import React, { useState, useRef, useEffect } from 'react';
import Avatar from '../chatList/avatar';
import ChatItem from '../chatItem';
import {
  ChatContentContainer,
  Header,
  Body,
  Footer,
  SendNewMessage,
} from './styles';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import { io, Socket } from 'socket.io-client';

interface ChatItemType {
  key: number;
  image: string;
  type: string;
  msg: string;
}

const ChatContent: React.FC = () => {
  const [chat, setChat] = useState<ChatItemType[]>([]);
  const [msg, setMsg] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<Socket | null>(null);

  const chatItems: ChatItemType[] = [
    {
      key: 1,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU',
      type: '',
      msg: 'Hi Tim, How are you?',
    },
    // ... 더 많은 채팅 아이템들
  ];

  useEffect(() => {
    socketRef.current = io('http://localhost:4000'); // 서버 주소로 변경

    socketRef.current.on('connect', () => {
      console.log('Connected to server');
    });

    socketRef.current.on('message', (message: ChatItemType) => {
      console.log('Message received:', message);
      setChat((prevChat) => [...prevChat, message]);
    });

    socketRef.current.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    setChat(chatItems);
    scrollToBottom();

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const onMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  };

  const sendMessage = () => {
    if (msg.trim() && socketRef.current) {
      const newMessage: ChatItemType = {
        key: Date.now(),
        type: 'me',
        msg: msg,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU',
      };
      console.log('Sending message:', newMessage);
      socketRef.current.emit('message', newMessage);
      setChat([...chat, newMessage]);
      setMsg('');
      scrollToBottom();
    }
  };

  return (
    <ChatContentContainer>
      <Header>
        <div className="current-chatting-user">
          <Avatar
            isOnline="active"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
          />
          <p>Tim Hover</p>
        </div>
        <button className="settings">
          <i className="fa fa-cog"></i>
        </button>
      </Header>
      <Body>
        {chat.map((itm, index) => (
          <ChatItem
            animationDelay={index + 2}
            key={itm.key}
            user={itm.type ? itm.type : 'me'}
            msg={itm.msg}
            image={itm.image}
          />
        ))}
        <div ref={messagesEndRef} />
      </Body>
      <Footer>
        <SendNewMessage>
          <button className="addFiles">
            <AddIcon />
          </button>
          <input
            type="text"
            placeholder="Type a message here"
            onChange={onMessageChange}
            value={msg}
          />
          <button className="btnSendMsg" onClick={sendMessage}>
            <SendIcon />
          </button>
        </SendNewMessage>
      </Footer>
    </ChatContentContainer>
  );
};

export default ChatContent;
