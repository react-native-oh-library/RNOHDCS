import { StyleSheet } from 'react-native';

import colors from './colors';

const screenStyles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginBottom: 25,
  },
  contentText: {
    alignSelf: 'flex-start',
    fontFamily: 'AvertaStd-Semibold',
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 28,
    paddingBottom: 20,
    paddingTop: 40,
  },
  darkBackground: {
    backgroundColor: colors.black,
  },
  lightBackground: {
    backgroundColor: colors.white,
  },
  lightBackground1: {
    backgroundColor: colors.red,
  },
  screenContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center'
  },
  screenContainer1: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
    borderWidth:1,
    borderColor:'green'
  },
  screenContainerPaddingTop:{
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
    paddingTop:30
  },
  stretch: {
    alignSelf: 'stretch',
  },
  stretchContainer: {
    alignSelf: 'stretch',
    flex: 1
  },
  stretchContainer1: {
    alignSelf: 'stretch',
    flex: 1,
    borderWidth:1,
    borderColor:'green'
  },
  text: {
    color:'white'
  },
  text1: {
    color:'green'
  },
  text2: {
    color:'black'
  },
  text3: {
    color:'red'
  },
});

export default screenStyles;
