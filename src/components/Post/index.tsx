import React, { useState, useCallback } from 'react';
import { PostProps } from '../../hooks/type';

import TikoImg from '../../assets/tiko.jpeg';
import BermaImg from '../../assets/berma.jpg';

import {
  Container,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  Icons,
  Status,
  CommentIcon,
  LikeIcon,
} from './styles';

type PostProperties = {
  props: PostProps;
};

const Post = ({ props }: PostProperties) => {
  const [amountLikes, setAmoutLikes] = useState(props.likes);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const isLikedPost = useCallback(() => {
    setIsLiked((previousState) => !previousState);

    if (isLiked) {
      setAmoutLikes(amountLikes - 1);
    } else {
      setAmoutLikes(amountLikes + 1);
    }
  }, [amountLikes, isLiked, setAmoutLikes]);

  return (
    <Container>
      <Body>
        {props.index === 2 ? (
          <Avatar src={BermaImg} alt="photo" />
        ) : (
          <Avatar src={TikoImg} alt="photo" />
        )}

        <Content>
          <Header>
            <strong>{props.user}</strong>
            <span>{props.nick}</span>
            <Dot />
            <time>{props.date}</time>
          </Header>

          <Description>{props.description}</Description>

          <Icons>
            <Status>
              <CommentIcon />
              {props.comments}
            </Status>
            <Status onClick={isLikedPost} isLiked={isLiked}>
              <LikeIcon />
              {amountLikes}
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Post;
