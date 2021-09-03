import React, {Component} from 'react';
import {Text} from 'react-native';
import {FullContainer} from '../Splash/Styles';

export default class Splash extends Component {
  render() {
    return (
      <FullContainer>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>Splash</Text>
      </FullContainer>
    );
  }
}
