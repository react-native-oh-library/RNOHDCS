import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import {
    Badge,
    IconButton,
    MD2Colors,
    MD3Colors,
    MD2Theme,
    MD3Theme,
    useTheme,
} from 'react-native-paper';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';


export function BadgeTest() {
    const [visible, setVisible] = React.useState<boolean>(true);
    const useExampleTheme = () => useTheme<MD2Theme | MD3Theme>();
    const { isV3 } = useExampleTheme();
    return (
        <Tester> 
          <TestSuite name='Badge'>
            <TestCase itShould="Badge.Text">
                <View style={styles.row}>
                        <View style={styles.item}>
                            <IconButton icon="palette-swatch" size={36} style={styles.button} />
                            <Badge visible={visible} style={styles.badge}>
                                12
                            </Badge>
                        </View>
                        <View style={styles.item}>
                            <IconButton  icon="inbox" size={36} style={styles.button} />
                            <Badge
                                visible={visible}
                                style={[
                                    styles.badge,
                                    {
                                        backgroundColor: isV3
                                            ? MD3Colors.primary80
                                            : MD2Colors.blue500,
                                    },
                                ]}
                            >
                                999+
                            </Badge>
                        </View>
                </View>
            </TestCase>
            <TestCase itShould="Badge.Dot">
                <View style={styles.row}>
                        <View style={styles.item}>
                            <IconButton icon="book-open" size={50} style={styles.button} />
                            <Badge visible={visible} style={styles.badge} size={isV3 ? 10 : 8} />
                        </View>
                        <View style={styles.item}>
                            <IconButton icon="receipt" size={60} style={styles.button} />
                            <Badge visible={visible} style={styles.badge} size={isV3 ? 20 : 10} />
                        </View>
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
    },
    item: {
        margin: 16,
    },
    button: {
        opacity: 0.6,
    },
    badge: {
        position: 'absolute',
        top: 4,
        right: 0,
    },
    label: {
        flex: 1,
    },
});

export default BadgeTest;
