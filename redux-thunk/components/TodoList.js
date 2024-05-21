
import Todo from './Todo';
import React, {Component} from 'react'
import {
    View,
    Text,
    Alert
} from 'react-native'

const TodoList = ({todos, onTodoClick}) => {
    return (
        <View style={{borderTopWidth:1,borderColor:'red'}}>
            <Text>待办列表:（点击后字体颜色变为红色表示完成）</Text>
            {
                todos.map(todo=> {
                    return (
                        <Todo
                            key={todo.id}
                            onPress={()=>{
                                // Alert.alert('延时3秒后更新...', [{ text: 'OK' }]);
                                onTodoClick(todo.id);
                            } 
                            }
                            {...todo}
                        />
                    )
                })
            }
        </View>
    )
};

export default TodoList

