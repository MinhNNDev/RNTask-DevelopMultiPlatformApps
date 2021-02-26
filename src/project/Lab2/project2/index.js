import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Button title="Button 1" onPress={() => alert('Hello 1')} />
      <TouchableOpacity
        onPress={() => alert('Hello custom button 2')}
        style={styles.customButton}>
        <Text style={styles.txt}>Button 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  customButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  txt: {
    fontSize: 18,
    color: 'white',
  },
});
