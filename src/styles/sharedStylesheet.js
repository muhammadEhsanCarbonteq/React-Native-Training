import {StyleSheet, Pressable} from 'react-native';
export default StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#F2F7F9',
    height: '100%',
    marginTop: 0,
  },
  inputFieldContainer: {
    marginLeft: 32,
    marginBottom: -10,
    paddingLeft: 10,
    paddingRight: 15,
    maxWidth: 150,
    zIndex: 100,
    backgroundColor: '#F2F7F9',
  },
  inputField: {
    borderWidth: 2,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 15,
    borderColor: '#E8E6EA',
    color: 'black',
  },
  customButtonContainer: {
    borderRadius: 15,
    width: '100%',
    backgroundColor: '#3B68FF',
    padding: 18,
    marginTop: 16,
  },
  customButtonText: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
  },
  customTitle: {
    fontSize: 29,
    fontWeight: '700',
    color: 'black',
  },
  customDescription: {
    fontSize: 18,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  blueVerticalLine: {
    width: 2.5,
    height: 42,
    backgroundColor: '#3B68FF',
  },
  grayVerticalLine: {
    width: 2.5,
    height: 42,
    backgroundColor: '#E7EDFF',
  },
});
