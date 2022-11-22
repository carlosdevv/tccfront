import React from 'react';

import MenuBar from '../../components/MenuBar';
import Main from '../../components/Main';
import SideBar from '../../components/SideBar';

import { Container, Wrapper } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  );
};

export default Home;
