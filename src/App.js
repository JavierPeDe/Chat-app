import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import { ChatFeed } from './components/ChatFeed';
export const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="1cec1eec-fd8c-4c6c-ab83-555ab13c6a7d"
      userName="Javier"
      userSecret="123456"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};
