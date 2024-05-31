import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import {
    Avatar, 
    List, 
    MD2Colors, 
    MD3Colors, 
    MD2Theme,
    MD3Theme,
    useTheme,
} from 'react-native-paper';

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

export function AvatarTest() {
    const useExampleTheme = () => useTheme<MD2Theme | MD3Theme>();
    const { isV3 } = useExampleTheme();
    return (
        <Tester> 
          <TestSuite name='Avatar'>
            <TestCase itShould="Avatar.Text">
                <View style={styles.row}>
                    <Avatar.Text
                        style={[
                        styles.avatar,
                        {
                            backgroundColor: isV3 ? MD3Colors.error70 : MD2Colors.yellow500,
                        },
                        ]}
                        label="XD"
                        color={isV3 ? MD3Colors.primary0 : MD2Colors.black}
                    />
                    <Avatar.Text style={styles.avatar} label="XD" />
                    <Avatar.Text style={styles.avatar} label="XD" size={80} />
                </View>
            </TestCase>

            <TestCase itShould="Avatar.Icon">
            <View style={styles.row}>
                <Avatar.Icon
                    style={[
                    styles.avatar,
                    {
                        backgroundColor: isV3 ? MD3Colors.error70 : MD2Colors.yellow500,
                    },
                    ]}
                    icon="folder"
                    color={isV3 ? MD3Colors.primary0 : MD2Colors.black}
                />
                <Avatar.Icon style={styles.avatar} icon="folder" />
                <Avatar.Icon style={styles.avatar} icon="folder" size={80} />
            </View>
            </TestCase>

            <TestCase itShould="Avatar.Image">
               <View style={styles.row}>
                    <Avatar.Image
                        style={styles.avatar}
                        source={require('../assets/images/avatar.png')}
                    />
                    <Avatar.Image
                        style={styles.avatar}
                        source={require('../assets/images/avatar.png')}
                        size={80}
                    />
                </View>
            </TestCase>            
          </TestSuite>
        </Tester>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        margin: 8,
    },
    avatar: {
        margin: 8,
    },
});

export default AvatarTest;
