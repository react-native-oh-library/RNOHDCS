import React from 'react';
import { View, Text, StyleSheet, ColorValue, ScrollView } from 'react-native';
import { resolveColor, resolveColorSync } from '@klarna/platform-colors';
import { PlatformColor } from 'react-native';

const accent = PlatformColor('rnpc_accent');

export const PlatformColorsDemo = () => {
    const [asyncColor, setAsyncColor] = React.useState<ColorValue | undefined>(undefined);
    const syncColor = resolveColorSync(accent);
    React.useEffect(() => {
        resolveColor(accent).then((color) => setAsyncColor(color));
    }, []);

    return (
        <View style={{ top: 48, flex: 1 }}>
            <ScrollView>
                <ColorRow label="show color of id: rnpc_background" color={PlatformColor('rnpc_background')} />
                <ColorRow label="show color of id: rnpc_text" color={PlatformColor('rnpc_text')} />
                <ColorRow label="show color of id: rnpc_contrasted" color={PlatformColor('rnpc_contrasted')} />
                <ColorRow label="show color of id: rnpc_accent" color={PlatformColor('rnpc_accent')} />
                <ColorRow label="get 'rnpc_accent' color by resolveColor api" color={asyncColor} />
                <ColorRow label="get 'rnpc_accent' color by resolveColorSync api" color={syncColor} />
            </ScrollView>
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
        <View style={{ flex: 1 }}>
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