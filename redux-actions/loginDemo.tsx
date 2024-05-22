import { connect, ConnectedProps } from 'react-redux';
import { Button,View ,Text, StyleSheet} from 'react-native';
import { RootState } from './loginStore';
import actions, { LOGIN_ACTION } from './loginAction';

const mapState = (state: RootState) => ({
  appUser: state.login.appUser,
});

const mapDispatch = {
  onLogin: actions[LOGIN_ACTION.LOGIN],
  onLogout: actions[LOGIN_ACTION.LOGOUT],
  onChangeName:actions[LOGIN_ACTION.CHANGENAME]
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

const Login = (props: PropsFromRedux) => {
  return (
    <View style={styles.viewStyle}>
      <View  style={styles.viewTextStyle}>
        <Text  style={styles.textStyle}>appUser：{JSON.stringify(props.appUser)}</Text>
      </View>
      <View  style={styles.viewTextStyle}>
        <Button title='修改appUser' onPress={() => {props.onLogin({ id: '1', userName: '123' })}} />
      </View>
      <View  style={styles.viewTextStyle}>
        <Button title='修改appUser name' onPress={() => {props.onChangeName({ id: '1', userName: '456' })}} />
      </View>
      <Button title='清空appUser' onPress={props.onLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle:{
    display:'flex',
    flexDirection:'column',
    width:300
  },
  viewTextStyle: {
    marginBottom:10
  },
  textStyle:{
    fontSize:20
  }
});

export default connector(Login);