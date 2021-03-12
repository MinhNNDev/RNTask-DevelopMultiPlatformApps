import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: '#ff637c',
          alignSelf: 'center',
          padding: 10,
          margin: 10,
          ...props.customStyles,
        }}
        onPress={props.onPress}>
        <Text style={{color: 'white'}}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Button title="Say hello" onPress={() => alert('Say hi !!!')} />
      <Button
        title="Say goodbye"
        onPress={() => alert('Bye bye !!!')}
        customStyles={{backgroundColor: '4dc2c2'}}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
