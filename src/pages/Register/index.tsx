import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import IllustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo.svg';

import * as S from './styles';

const Register: React.FC = () => {
  const history = useHistory();

  const redirectToLogin = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <>
      <S.Container>
        <S.Aside>
          <img src={IllustrationImg} alt="Illustration" />
          <strong>
            Crie posts, responda e curta as melhores publicações para você!
          </strong>
          <p>Para os maiores fofoqueiros.</p>
        </S.Aside>
        <S.MainContainer>
          <S.Content>
            <img src={logoImg} alt="logo" />
            <S.Separator className="separator">
              Faça seu cadastro na plataforma
            </S.Separator>
            <S.Input placeholder="Nome" />
            <S.Input placeholder="Senha" type="password" />
            <S.Input placeholder="Data de nascimento" type="date" />
            <S.Button onClick={() => redirectToLogin()}>Registrar</S.Button>
          </S.Content>
        </S.MainContainer>
      </S.Container>
    </>
  );
};

export default Register;
