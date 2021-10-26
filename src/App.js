import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import { ChatFeed } from './components/ChatFeed';
import { LoginForm } from './components/LoginForm';
export const App = () => {
  if (!localStorage.getItem('username')) {
    return <LoginForm />;
  } else {
    return (
      <ChatEngine
        height="100vh"
        projectID="1cec1eec-fd8c-4c6c-ab83-555ab13c6a7d"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    );
  }
};
