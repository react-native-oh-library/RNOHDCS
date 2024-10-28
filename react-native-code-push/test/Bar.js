import React, { PureComponent } from 'react';
import {
    View,
    Animated,
} from 'react-native';
import PropTypes from 'prop-types';


const propTypes = {
    progress: PropTypes.number.isRequired,
    backgroundStyle: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
};

/* 进度条组件 */
class Bar extends PureComponent {

    constructor(props) {
        super(props);
        this.progress = new Animated.Value(0);
        this.update = this.update.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.progress >= 0 && this.props.progress !== nextProps.progress) {
            this.update(nextProps.progress);
        }
    }

    update(progress) {
        Animated.spring(this.progress, {
            useNativeDriver:false,
            toValue: progress
        }).start();
    }

    render() {
        return (
            <View style={[this.props.backgroundStyle, this.props.style]}>
                <Animated.View useNativeDriver={true} style={{
                    backgroundColor: '#1083E6',
                    height:28,
                    borderRadius: 30,
                    width: this.progress.interpolate({
                        inputRange: [0, 100],
                        outputRange: [0, 1 * this.props.style.width],
                    }) }}
                />
            </View>
        );
    }
}

Bar.propTypes = propTypes;

export default Bar;