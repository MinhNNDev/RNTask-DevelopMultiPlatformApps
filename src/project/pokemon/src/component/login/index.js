import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from '../style';

const Pokemon = () => {
  let background = require('../../img/bg.png');
  let logo = require('../../img/logo.png');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let _onPress = () => {
    // eslint-disable-next-line no-alert
    alert('User name: ' + username + ' - Password: ' + password);
  };
  return (
    <ImageBackground source={background} style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View>
        <View style={styles.containerInput}>
          <Text style={styles.textRegister}>REGISTER</Text>
          <TextInput
            style={styles.textInput}
            placeholder="USERNAME"
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="PASSWORD"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={styles.containerLoginButton}
            onPress={_onPress}>
            <Text style={styles.textLoginButton}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Pokemon;
