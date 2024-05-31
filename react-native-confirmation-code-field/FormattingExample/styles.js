import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {padding: 20, minHeight: 300},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 25,
    height: 30,
    lineHeight: 28,
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  separator: {
    height: 2,
    width: 10,
    backgroundColor: '#000',
    alignSelf: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});
