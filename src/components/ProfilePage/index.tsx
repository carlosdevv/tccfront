import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>

        <h1>Tiko Lopes</h1>
        <h2>@tiko.lo</h2>

        <p>
          Developer at Inter
        </p>

        <ul>
          <li>
            <LocationIcon />
            Bahia, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 03 de março de 2001
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
