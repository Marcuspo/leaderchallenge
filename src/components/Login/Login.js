import React from 'react';

import Logo from '../Images/logo.png';

import {FullContainer, TextoLogin, ContainerImage, ImageLogo} from './Styles';

export default function Login() {
  return (
    <FullContainer>
      <ContainerImage>
        <ImageLogo source={Logo} style={{resizeMode: 'contain'}} />
      </ContainerImage>
      <TextoLogin>Login</TextoLogin>
    </FullContainer>
  );
}
