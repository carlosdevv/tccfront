import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Input = styled.input`
  margin-bottom: 1rem;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  color: #fff;
  background: var(--search);
  border: 1px solid var(--twitter);
  padding: 0 1rem;


  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Aside = styled.aside`
  flex: 5;

  background: var(--twitter);
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 120px 80px;

  img {
    max-width: 420px;
    margin-bottom: 32px;
  }

  strong {
    font: 700 36px 'Poppins', sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
    color: #f8f8f8;
  }
`;

export const MainContainer = styled.main`
  flex: 8;

  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Separator = styled.div`
  font-size: 14px;
  color: #a8a8b3;

  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-right: 16px;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-left: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  > img {
    align-self: center;
  }

  h2 {
    font-size: 24px;
    margin: 64px 0 24px;
    font-family: 'Poppins', sans-serif;
  }

  p {
    font-size: 14px;
    color: #737380;
    margin-top: 16px;

    a {
      color: #e559f9;
    }
  }
`;

export const Button = styled.button`
  margin-top: 1rem;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  color: #fff;
  background: var(--twitter);

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
