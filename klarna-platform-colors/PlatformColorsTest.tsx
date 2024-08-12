import React from 'react';
import { View, Text, StyleSheet, ColorValue, ScrollView } from 'react-native';
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import { resolveColor, resolveColorSync } from '@klarna/platform-colors';
import { PlatformColor } from 'react-native';

const accent = PlatformColor('rnpc_accent');

export const PlatformColorsTest = () => {
    const [asyncColor, setAsyncColor] = React.useState<ColorValue | undefined>(undefined);
    const syncColor = resolveColorSync(accent);
    React.useEffect(() => {
        resolveColor(accent).then((color) => setAsyncColor(color));
    }, []);

    return (
        <View style={{ top: 48, flex: 1 }}>
            <Tester>
                <TestSuite name="KLAPlatformColorsTest">
                    <ScrollView>
                        <TestCase itShould="Show the color of [rnpc_background]">
                            <ColorRow label="show color of id: rnpc_background" color={PlatformColor('rnpc_background')} />
                        </TestCase>
                        <TestCase itShould="Show the color of [rnpc_text]">
                            <ColorRow label="show color of id: rnpc_text" color={PlatformColor('rnpc_text')} />
                        </TestCase>
                        <TestCase itShould="Show the color of [rnpc_contrasted]">
                            <ColorRow label="show color of id: rnpc_contrasted" color={PlatformColor('rnpc_contrasted')} />
                        </TestCase>
                        <TestCase itShould="Show the color of [rnpc_accent]">
                            <ColorRow label="show color of id: rnpc_accent" color={PlatformColor('rnpc_accent')} />
                        </TestCase>
                        <TestCase itShould="Show the color of  [rnpc_accent] by resolveColor api">
                            <ColorRow label="get 'rnpc_accent' color by resolveColor api" color={asyncColor} />
                        </TestCase>
                        <TestCase itShould="Show the color of [rnpc_accent] by resolveColorSync api">
                            <ColorRow label="get 'rnpc_accent' color by resolveColorSync api" color={syncColor} />
                        </TestCase>
                    </ScrollView>
                </TestSuite>
            </Tester>
        </View>
    );
};
const ColorRow = ({ label, color }: { label: string; color?: ColorValue }) => (
    <View style={styles.colorRow}>
        <View
            style={[
                styles.colorSample,
                {
                    backgroundColor: color,
                },
            ]}
        />
        <View style={{flex: 1}}>
            <Text ellipsizeMode="tail" numberOfLines={2}>{label}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    colorRow: {
        paddingHorizontal: 10,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    colorSample: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        shadowOpacity: 0.2,
        shadowColor: '#999',
        shadowRadius: 1,
        shadowOffset: { width: 0, height: 0 },
    }
});