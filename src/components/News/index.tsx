import React from 'react';

import { Container } from './styles';

const News: React.FC = () => {
  return (
    <Container>
      <span>Assuntos do momento</span>
      <strong>Alunos da Ucsal tiveram a melhor apresentação de TCC do curso de Engenharia de Software da história!</strong>
    </Container>
  );
};

export default News;
