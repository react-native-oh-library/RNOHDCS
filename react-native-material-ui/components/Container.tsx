import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import  PropTypes  from 'prop-types';

const propTypes = {
    children: PropTypes.node.isRequired,
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

class Container extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.propTypes.children}
            </View>
        );
    }
}

Container.propTypes = propTypes;

export default Container;