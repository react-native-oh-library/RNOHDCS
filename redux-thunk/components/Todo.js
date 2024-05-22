
import React from 'react'
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native'
const Todo =({onPress,completed,text})=>(
        <TouchableOpacity onPress={onPress}>
            <Text style={{color:completed?'red':'blue',marginLeft:10,fontSize: 24,marginTop:10}}>{text}</Text>
        </TouchableOpacity>
);

export default Todo
