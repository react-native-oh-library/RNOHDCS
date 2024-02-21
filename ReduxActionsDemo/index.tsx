import { Provider} from 'react-redux';   
import { StyleSheet, View } from 'react-native';
import store from './loginStore';
import Login from './loginDemo'


// 导出组件  
export default function ReduxDemo() {  
    return (  
      <Provider store={store}> 
        <View style={styles.container}>
            <Login />
        </View>  
      </Provider>  
    );  
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  
    counterViewStyle: {
      backgroundColor: 'pink',
      width: 200,
      height: 60,
  
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
  });

  