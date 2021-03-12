import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Press to Profile"
        onPress={() => navigation.navigate('Profile', {name: 'MinhNN'})}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
