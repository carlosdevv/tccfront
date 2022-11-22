import React, { useCallback, useState } from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
  name: string;
  nickname: string;
}

const FollowSuggestion: React.FC<Props> = ({ name, nickname }) => {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  const handleFollow = useCallback(() => {
    setIsFollowing((prevState) => !prevState);
  }, []);

  return (
    <Container>
      <div>
        <Avatar />

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>

      <FollowButton outlined={!isFollowing} onClick={handleFollow}>
        {isFollowing ? 'Seguindo' : 'Seguir'}
      </FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
