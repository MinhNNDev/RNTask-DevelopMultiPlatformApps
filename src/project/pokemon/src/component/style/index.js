import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'stretch',
    justifyContent: 'center',
    padding: 15,
  },
  logo: {
    width: null,
    height: 200,
  },
  textRegister: {
    fontStyle: 'italic',
    alignSelf: 'flex-end',
    fontSize: 15,
  },
  textInput: {
    padding: 10,
    fontSize: 12,
    backgroundColor: 'rgba(0,0,0,0.3)',
    color: '#FFF',
  },
  containerLoginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(186,56,133,0.6)',
    padding: 10,
  },
  textLoginButton: {
    color: '#FFF',
    fontSize: 15,
  },
});
export default styles;
