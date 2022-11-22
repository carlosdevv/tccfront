import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

import {
  Container,
  Topside,
  MenuButton,
  HomeIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <MenuButton className="active">
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Postar</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar />

        <ProfileData>
          <strong>Tiko Lopes</strong>
          <span>@tiko.lo</span>
        </ProfileData>

        <Link to="/">
          <ExitIcon />
        </Link>
      </Botside>
    </Container>
  );
};

export default MenuBar;
