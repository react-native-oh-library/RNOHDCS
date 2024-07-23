import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import RootSiblings, {
    RootSiblingParent,
    RootSiblingPortal,
    setSiblingWrapper
} from 'react-native-root-siblings';

// 自定义 sibling 的包裹器
const customWrapper = component => (
    <View style={styles.wrapper}>{component}</View>
);
setSiblingWrapper(customWrapper)
export default class setSiblingWrapperTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sibling: null,
        };
    }

    componentDidMount() {
        this.createSibling();
    }

    createSibling = () => {
        const sibling = new RootSiblings(
            (
                <View style={styles.container}>
                    <Text style={styles.text}>Hello, I'm a RootSibling!</Text>
                </View>
            ),
        );
        this.setState({ sibling });
    };
    updateSibling = () => {
        if (this.state.sibling) {
            this.state.sibling.update(
                <View style={styles.container}>
                    <Text style={styles.text}>Updated Sibling!</Text>
                </View>,
            );
        }
    };

    destroySibling = () => {
        if (this.state.sibling) {
            this.state.sibling.destroy();
            this.setState({ sibling: null });
        }
    };
    render() {
        return (
            <Tester>
                <TestSuite name="RootSiblings">
                    <TestCase itShould="setSiblingWrapperTest">
                        <RootSiblingParent>
                            <RootSiblingPortal>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={this.updateSibling}>
                                        <Text style={styles.button}>Update Sibling</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={this.destroySibling}>
                                        <Text style={styles.button}>Destroy Sibling</Text>
                                    </TouchableOpacity>
                                </View>
                            </RootSiblingPortal>
                        </RootSiblingParent>
                    </TestCase>
                </TestSuite>
            </Tester>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0011f980',
        paddingHorizontal: 20,
    },
    container: {
        backgroundColor: 'lightblue',
        padding: 20,
        borderRadius: 10,
    },
    text: {
        fontSize: 18,
        color: 'black',
    },
    button: {
        fontSize: 20,
        color: 'blue',
        marginVertical: 10,
    },
});