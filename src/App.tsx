import React from 'react';
import { PostProvider } from './hooks/postContext';
import Modal from 'react-modal';

import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

Modal.setAppElement('#root');

function App() {
  return (
    <>
      <PostProvider>
        <Routes />

        <GlobalStyles />
      </PostProvider>
    </>
  );
}

export default App;
