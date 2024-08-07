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

interface ChatItemType {
  key: number;
  image: string;
  type: string;
  msg: string;
  timestamp: string;
  status: string;
}

const ChatContent: React.FC = () => {
  const [chat, setChat] = useState<ChatItemType[]>([]);
  const [msg, setMsg] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatItems: ChatItemType[] = [
    {
      key: 1,
      image:
        'https://fastly.picsum.photos/id/190/600/307.jpg?hmac=r0veQERxZ62nh_Xw1etsktlrSqUnMMQRSLB7R9zVGaE',
      type: 'other',
      msg: '같이 동행 해도 괜찮은가요??',
      timestamp: '16 mins ago',
      status: 'Seen 1.03PM',
    },
    {
      key: 2,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU',
      type: '',
      msg: '저는 좋습니다!',
      timestamp: '15 mins ago',
      status: 'Seen 1.04PM',
    },
    {
      key: 3,
      image:
        'https://fastly.picsum.photos/id/190/600/307.jpg?hmac=r0veQERxZ62nh_Xw1etsktlrSqUnMMQRSLB7R9zVGaE',
      type: 'other',
      msg: '몇시까지 만날까요??',
      timestamp: '14 mins ago',
      status: 'Seen 1.05PM',
    },
    {
      key: 4,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU',
      type: '',
      msg: '2시까지 봐요',
      timestamp: '13 mins ago',
      status: 'Seen 1.06PM',
    },
    {
      key: 5,
      image:
        'https://fastly.picsum.photos/id/190/600/307.jpg?hmac=r0veQERxZ62nh_Xw1etsktlrSqUnMMQRSLB7R9zVGaE',
      type: 'other',
      msg: '넵 그때뵈요',
      timestamp: '14 mins ago',
      status: 'Seen 1.05PM',
    },
    // ... add more chat items as needed
  ];

  useEffect(() => {
    setChat(chatItems);
    scrollToBottom();
  }, [setChat]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const onMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  };

  const sendMessage = () => {
    if (msg.trim()) {
      setChat([
        ...chat,
        {
          key: Date.now(),
          type: '',
          msg: msg,
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU',
          timestamp: 'Just now',
          status: 'Seen',
        },
      ]);
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
            image="https://fastly.picsum.photos/id/190/600/307.jpg?hmac=r0veQERxZ62nh_Xw1etsktlrSqUnMMQRSLB7R9zVGaE"
          />
          <p>데릭</p>
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
            timestamp={itm.timestamp}
            status={itm.status}
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
