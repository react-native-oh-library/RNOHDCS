import React, { useState, useReducer, useEffect } from 'react';  
import { Provider, useDispatch,useSelector } from 'react-redux';   
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import { logger } from './config' 
const defaultState = {  
  number: 100,  
};  

type State = {  
  counterState: {  
    number: number;  
  };  
};  

const counterReducerfun = (state = defaultState, action: { type: any; }) => {  
  switch (action.type) {  
    case 'ADD_NUMBER':  
      return {  
        ...state,  
        number: state.number + 1,  
      };  
    default:  
      return state;  
  }  
}; 

const rootReducer = combineReducers({ counterState: counterReducerfun }); 
// 加入日志 
const store = createStore(rootReducer, applyMiddleware(logger)); 

const addNumberAction = { type: 'ADD_NUMBER' };  

const Counter = () => {  
  // 初始化state与store同步  
  const [state, setState] = useState(store.getState().counterState); 
  // 获取dispatch函数  
  const dispatch = useDispatch(); 
  // 使用useReducer来处理state逻辑  
  const count:number = useSelector((state:State) => state.counterState.number)

   // 使用useReducer来处理state逻辑  

  // 使用useEffect来监听store的变化并更新state，替代componentDidMount和store subscription的逻辑。
  useEffect(()=> {
    setState(store.getState().counterState)
  },[store])//依赖store，当store变化时触发effect和重新渲染组件。

  return (  
    <View style={styles.counterViewStyle}>  
      <Text style={{ fontSize: 24 }}>{count}</Text>  
      <View>  
        <Text style={{ color: 'black', fontSize: 20 }} onPress={() => dispatch(addNumberAction)}>{'+'}</Text>  
      </View>  
    </View>  
  );  
}

// 导出组件  
export default function reduxLoggerDemo() {  
  return (  
    <Provider store={store}> 
      <View style={styles.container}>  
        <Counter /> 
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