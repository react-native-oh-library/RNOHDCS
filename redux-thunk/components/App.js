
import React, {Component} from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer'
import {
    View,
    Text
} from 'react-native';

class App extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <AddTodo/>
                <VisibleTodoList/>
                <Footer/>
            </View>
        );
    }
}

export default App
