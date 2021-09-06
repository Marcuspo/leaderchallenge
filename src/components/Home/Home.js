import React from 'react';
import {FullContainer, TextoContainer, ButtonHome, TextButton} from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  async function handleLogOut() {
    AsyncStorage.removeItem('loginLeaderApp', () => {});
    await navigation.navigate('Login', '');
    console.log('aqui');
  }

  return (
    <FullContainer>
      <ButtonHome onPress={handleLogOut}>
        <TextButton>Deslogar</TextButton>
      </ButtonHome>
      <TextoContainer>Você chegou até aqui, parabéns</TextoContainer>
    </FullContainer>
  );
}
