
import React from 'react'
import {
    View,
    Text
} from 'react-native'
import FilterLink from '../containers/FilterLink'

const Footer =()=>(
    <View style={{borderWidth:1,borderColor:'red'}}>
        <Text>筛选:</Text>
        <FilterLink filter="SHOW_ALL">
            所有
        </FilterLink>
        <FilterLink filter="SHOW_ACTIVE">
            未完成
        </FilterLink>
        <FilterLink filter="SHOW_COMPLETED">
            已完成
        </FilterLink>
    </View>
)

export default Footer
