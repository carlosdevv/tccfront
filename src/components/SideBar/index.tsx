import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { Container, Body } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <StickyBox>
        <Body>
          <List
            title="Talvez você conheça"
            elements={[
              <FollowSuggestion name="Luiz Felipe" nickname="@luizfel" />,
              <FollowSuggestion name="Marcony Jefferson" nickname="@marcony" />,
              <FollowSuggestion name="Verman Benja" nickname="@benjaschult" />,
            ]}
          />
          <List title="O que está acontecendo" elements={[<News />]} />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
