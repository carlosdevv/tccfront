import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import LuizImg from '../../assets/lip.jpg';
import BermaImg from '../../assets/berma.jpg';
import MarcoImg from '../../assets/marco.jpg';

import { Container, Body } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <StickyBox>
        <Body>
          <List
            title="Talvez você conheça"
            elements={[
              <FollowSuggestion
                img={LuizImg}
                name="Luiz Felipe"
                nickname="@luizfel"
              />,
              <FollowSuggestion
                img={MarcoImg}
                name="Marcony Jefferson"
                nickname="@marcony"
              />,
              <FollowSuggestion
                img={BermaImg}
                name="Verman Benja"
                nickname="@benjaschult"
              />,
            ]}
          />
          <List title="O que está acontecendo" elements={[<News />]} />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
