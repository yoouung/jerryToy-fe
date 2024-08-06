import { Client, Frame } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

let stompClient: Client | null = null;

export const connectStompClient = (
  onMessageReceived: (message: string) => void
) => {
  stompClient = new Client({
    webSocketFactory: () => new SockJS('http://localhost:8080/stomp-endpoint'),
    debug: (str) => {
      console.log(str);
    },
    reconnectDelay: 5000,
    onConnect: (frame: Frame) => {
      console.log('Connected: ' + frame);
      stompClient?.subscribe('/topic/messages', (message) => {
        onMessageReceived(message.body);
      });
    },
    onStompError: (frame: Frame) => {
      console.error('Broker reported error: ' + frame.headers['message']);
      console.error('Additional details: ' + frame.body);
    },
  });

  stompClient.activate();
};

export const disconnectStompClient = () => {
  if (stompClient !== null) {
    stompClient.deactivate();
    stompClient = null;
  }
};

export const sendMessage = (message: string) => {
  if (stompClient && stompClient.connected) {
    stompClient.publish({
      destination: '/app/chat',
      body: message,
    });
  }
};
