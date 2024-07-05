import React, { useState, ReactElement } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import PhotoDemo from './PhotoDemo';
import CodeScanDemo from './CodeScanDemo';
import VideoDemo from './VideoDemo.tsx';

export const App = (): ReactElement => {
    const [activeTab, setActiveTab] = useState<string>('');

    const renderTab = (): ReactElement => {
        switch (activeTab) {
            case 'PhotoDemo':
                return <PhotoDemo />;
            case 'CodeScanDemo':
                return <CodeScanDemo />;
            case 'VideoDemo':
                return <VideoDemo />;
            default:
                return <View><Text>Camera Demo Page</Text></View>;
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={style.btnContainer}>
                <Button title="PhotoDemo" onPress={() => setActiveTab('PhotoDemo')} />
                <Button title="CodeScanDemo" onPress={() => setActiveTab('CodeScanDemo')} />
                <Button title="VideoDemo" onPress={() => setActiveTab('VideoDemo')} />
            </View>
            {renderTab()}
        </View>
    );
};

const style = StyleSheet.create({
    btnContainer: {
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: "wrap",
        gap: 10,
        zIndex: 999999999999999,
        position: 'absolute',
        top: 50,
        left: 0,
    }
})

export default App;