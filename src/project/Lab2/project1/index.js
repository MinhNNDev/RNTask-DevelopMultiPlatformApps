import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.textColor}>Hello world</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
    backgroundColor: '#33FAFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColor: {
    color: '#FFF',
  },
});
