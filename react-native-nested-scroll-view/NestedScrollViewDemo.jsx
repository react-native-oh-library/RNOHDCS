import {
    StyleSheet,
    Text,
    StatusBar,
    Button,
    View
} from 'react-native';
import React, { useRef } from 'react';

import NestedScrollView from 'react-native-nested-scroll-view';

const NestedScrollViewDemo = () => {
    const scrollViewRef = useRef();

    const scrollToSpecificCoordinate = () => {
        scrollViewRef.current?.scrollTo({ x: 300, y: 500, animated: true })
    };

    return (
        <View style={styles.container}>
            <NestedScrollView ref={scrollViewRef}
                style={styles.scrollView}
                contentContainerStyle={{ flexGrow: 1 }}>
                <Text style={styles.text}>
                    A component that encapsulates the platform's ScrollView, while also integrating a touch-locked "responder" system.
                    Keep in mind that the ScrollView must have a definite height in order for it to work,
                    because what it actually does is pack a series of sub-components of indeterminate height into a container with a definite height (via scrolling).
                    To give a ScrollView a definite height, either set the height to it directly (not recommended), or make sure that all parent containers have a definite height.
                    Generally speaking, we will set the ScrollView to automatically fill the empty space of the parent container, but only if all the parent containers themselves are also flex or have a height specified, otherwise it will not scroll properly,
                    and you can use the Element Viewer to find out which layer is the correct height.flex: 1
                    Other responders inside ScrollView can't yet prevent ScrollView from becoming a responder itself.
                </Text>
            </NestedScrollView>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Button title="滚动到特定坐标" onPress={scrollToSpecificCoordinate} />
            </View>
        </View>
    );

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        paddingBottom: 40
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
});

export default NestedScrollViewDemo;  