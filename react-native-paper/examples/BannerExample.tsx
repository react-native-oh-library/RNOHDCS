import * as React from 'react';
import {
    Dimensions,
    Image,
    LayoutChangeEvent,
    Platform,
    StyleSheet,
    View
} from 'react-native';

import {
    Banner, FAB, MD2Colors, MD3Colors, MD2Theme,
    MD3Theme,
    useTheme,
} from 'react-native-paper';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

export function BannerTest() {
    return (
        <Tester>
            <TestSuite name='Banner' >
                <TestCase itShould='Two line text string with two actions'>
                    <BannerExample></BannerExample>
                </TestCase>  
            </TestSuite>
        </Tester>
    )

}

const BannerExample = () => {
    const [visible, setVisible] = React.useState<boolean>(true);
    const [useCustomTheme, setUseCustomTheme] = React.useState<boolean>(false);
    const useExampleTheme = () => useTheme<MD2Theme | MD3Theme>();
    const defaultTheme = useExampleTheme();
    const [height, setHeight] = React.useState(0);

    const handleLayout = ({ nativeEvent }: LayoutChangeEvent) => {
        const { height: layoutHeight } = nativeEvent.layout;
        setHeight(layoutHeight);
    };

    const customTheme = !defaultTheme.isV3
        ? {
            ...defaultTheme,
            colors: {
                text: MD2Colors.white,
                surface: MD2Colors.blue200,
                primary: MD2Colors.purple900,
            },
        }
        : {
            ...defaultTheme,
            colors: {
                onSurface: MD3Colors.tertiary100,
                elevation: {
                    level1: MD3Colors.tertiary50,
                },
                primary: MD3Colors.tertiary10,
            },
        };

    return (
        <View style={styles.container}>
            <Banner
                onLayout={handleLayout}
                actions={[
                    {
                        label: `Set ${useCustomTheme ? 'default' : 'custom'} theme`,
                        onPress: () => setUseCustomTheme(!useCustomTheme),
                    },
                    {
                        label: 'Fix it',
                        onPress: () => setVisible(false),
                    },
                ]}
                icon={require('../assets/images/email-icon.png')}
                visible={visible}
                onShowAnimationFinished={() =>
                    console.log('Completed opening animation')
                }
                onHideAnimationFinished={() =>
                    console.log('Completed closing animation')
                }
                theme={useCustomTheme ? customTheme : defaultTheme}
                style={styles.banner}
            >
                Two line text string with two actions. One to two lines is preferable on
                mobile.
            </Banner>
        </View>
    );
};

BannerExample.title = 'Banner';

const styles = StyleSheet.create({
    banner: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
    },
    photo: {
        flex: 1,
        resizeMode: 'cover',
    },
    fab: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
        margin: 16,
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    }
});

export default BannerTest;
