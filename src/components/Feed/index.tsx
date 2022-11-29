import React from 'react';
import { usePostContext } from '../../hooks/postContext';

import Post from '../Post';

import { Container, Tab, Posts } from './styles';

const Feed: React.FC = () => {
  const { postList } = usePostContext();

  console.log(postList.length);

  return (
    <Container>
      <Tab>Postagens</Tab>

      <Posts>
        {postList &&
          postList.map((post) => <Post key={post.index} props={post} />)}
      </Posts>
    </Container>
  );
};

export default Feed;
