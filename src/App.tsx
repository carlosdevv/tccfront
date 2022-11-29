import React from 'react';
import { PostProvider } from './hooks/postContext';

import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

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
