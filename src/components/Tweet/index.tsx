import React, { useState, useCallback } from 'react';

import {
  Container,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const isLikedPost = useCallback(() => {
    setIsLiked((previousState) => !previousState);
  }, []);

  return (
    <Container>
      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Ucsal</strong>
            <span>@ucsal</span>
            <Dot />
            <time>03 de mar</time>
          </Header>

          <Description>Tcc entregue.</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status onClick={isLikedPost} isLiked={isLiked}>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
