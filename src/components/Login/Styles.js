import styled from 'styled-components/native';

export const FullContainer = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: rgb(32, 53, 70);
`;

export const ContainerImage = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const ImageLogo = styled.Image`
  width: 20%;
  height: 20%;
`;

export const TextoLogin = styled.Text`
  color: #f7c744;
  font-size: 18px;
  text-align: center;
  margin-top: 5px;
  opacity: 0.9;
`;

export const InfoContainer = styled.View`
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  padding: 20px;
  height: 200px;
`;

export const InputBottom = styled.TextInput`
  margin: 5px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 18px;
`;

export const ButtonLogin = styled.TouchableOpacity`
  background-color: blueviolet;
`;
