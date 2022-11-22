import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import IllustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo.svg';

import * as S from './styles';

const Login: React.FC = () => {
  const history = useHistory();

  const redirectToFeed = useCallback(() => {
    history.push('/home');
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
              Faça seu login na plataforma
            </S.Separator>
            <S.Button onClick={() => redirectToFeed()}>ENTRAR</S.Button>
          </S.Content>
        </S.MainContainer>
      </S.Container>
    </>
  );
};

export default Login;
