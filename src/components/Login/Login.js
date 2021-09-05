/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import Logo from '../Images/logo.png';

import {StatusBar, Text} from 'react-native';

import {
  FullContainer,
  TextoLogin,
  ContainerImage,
  ImageLogo,
  InfoContainer,
  InputBottom,
  ButtonLogin,
} from './Styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeEmail(element) {
    setEmail(element);
  }

  function handleChangePassword(element) {
    setPassword(element);
  }

  function handleSubmitForm() {}

  return (
    <FullContainer>
      <StatusBar barStyle="light-content" />
      <ContainerImage>
        <ImageLogo source={Logo} style={{resizeMode: 'contain'}} />
        <TextoLogin>Please make login</TextoLogin>
      </ContainerImage>
      <InfoContainer>
        <InputBottom
          placeholder="Email"
          placeholderTextColor="rgba(255,255,255,0.8)"
          keyboardType="email-address"
          returnKeyType="next"
          value={email}
          onChangeText={handleChangeEmail}
          autoCorrect={false}
        />
        <InputBottom
          placeholder="Password"
          value={password}
          onChangeText={handleChangePassword}
          placeholderTextColor="rgba(255,255,255,0.8)"
          secureTextEntry
          returnKeyType="go"
          autoCorrect={false}
        />
        <ButtonLogin>
          <Text
            style={{
              textAlign: 'center',
              color: '#FFF',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            Login
          </Text>
        </ButtonLogin>
      </InfoContainer>
    </FullContainer>
  );
}
