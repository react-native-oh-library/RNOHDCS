import React from 'react'
import {
    TouchableOpacity,
    Text
} from 'react-native'
const Link = ({active, children, onClick})=> {
    if (active) {
        return <Text style={{color:'green',fontSize:24,marginTop:10}}>{children}</Text>
    }
    return (
        <TouchableOpacity
            onPress={()=> {
                onClick()
            }}
        >
            <Text style={{fontSize:24,marginTop:10}}>{children}</Text>
        </TouchableOpacity>
    )
};
export default Link
