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
  backArrowImage: {
    width: 22,
    height: 20,
    marginLeft: 15,
    marginBottom: 30,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    borderRadius: 30,
    backgroundColor: 'white',
    width: '100%',
  },
  bottomTab: {
    position: 'absolute',
    height: '10%',
    width: '100%',
    borderTopEndRadius: 30,
    //   borderBottomEndRadius: 30,
    borderTopStartRadius: 30,
    backgroundColor: 'white',
    paddingHorizontal: 54,
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 0,
    marginBottom: 0,
    alignItems: 'center',
  },
});