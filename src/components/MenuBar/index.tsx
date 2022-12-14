import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Modal from 'react-modal';

import TikoImg from '../../assets/tiko.jpeg';

import {
  Container,
  Topside,
  MenuButton,
  HomeIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
  LogoApp,
  ContentModal,
  CloseIcon,
  CommentWrapper,
  Input,
  PostButton,
  AvatarModal,
} from './styles';

import logoApp from '../../assets/logo.svg';

const customStyles = {
  content: {
    width: '600px',
    height: '315px',
    background: 'black',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '16px',
    border: '0',
  },
  overlay: {
    background: ' rgba(0,0,0,0.1)',
  },
};

const MenuBar: React.FC = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Container>
      <Topside>
        <LogoApp src={logoApp} alt="logo" />

        <MenuButton className="active">
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <Button onClick={openModal}>
          <span>Criar Post</span>
        </Button>
      </Topside>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ContentModal>
          <button onClick={closeModal}>
            <CloseIcon />
          </button>
          <CommentWrapper>
            <AvatarModal src={TikoImg} alt="myPhoto" />
            <Input  placeholder="Conte-nos sua fofoca." />
          </CommentWrapper>
          <PostButton>Postar</PostButton>
        </ContentModal>
      </Modal>

      <Botside>
        <Avatar src={TikoImg} alt="photo" />

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
