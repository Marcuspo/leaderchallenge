/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import Logo from '../Images/logo.png';

import {StatusBar, Text} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import * as RootNavigation from '../api/RootNavigation';

import {
  FullContainer,
  TextoLogin,
  ContainerImage,
  ImageLogo,
  InfoContainer,
  InputBottom,
  ButtonLogin,
} from './Styles';

import api from '../api/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleChangeEmail(element) {
    setEmail(element);
  }

  function handleChangePassword(element) {
    setPassword(element);
  }

  async function handleSubmitForm() {
    const responseData = await api
      .post('/api-token-auth/', {
        email: email,
        password: password,
      })
      .then(function (response) {
        AsyncStorage.setItem(
          'loginLeaderApp',
          JSON.stringify(response.data),
          () => {
            console.log(responseData);
          },
        );
        RootNavigation.navigate('Home', '');
        setError('');
      })
      .catch(function (e) {
        setError('Tente novamente');
        console.log(e);
      });
  }

  return (
    <FullContainer>
      <StatusBar barStyle="light-content" />
      <ContainerImage>
        <ImageLogo source={Logo} style={{resizeMode: 'contain'}} />
        <TextoLogin>Please make login</TextoLogin>
      </ContainerImage>
      <TextoLogin>{error}</TextoLogin>
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
        <ButtonLogin onPress={handleSubmitForm}>
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
