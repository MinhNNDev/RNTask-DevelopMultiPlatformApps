import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Profile = ({navigation, route}) => {
  const {name} = route.params;
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Text>{name}</Text>
      <Button title="Press to back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
