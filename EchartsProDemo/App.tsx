import React, { useState, ReactElement } from 'react';
import { View, Button, Text } from 'react-native';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo4 from './Demo4';
import Demo5 from './Demo5';
import Demo6 from './Demo6';

const App = (): ReactElement => {
    const [activeTab, setActiveTab] = useState<string>('Demo3');

    const renderTab = (): ReactElement => {
        switch (activeTab) {
            case 'Demo1':
                return <Demo1 />;
            case 'Demo2':
                return <Demo2 />;
            case 'Demo3':
                return <Demo3 />;
            case 'Demo4':
                return <Demo4 />;
            case 'Demo5':
                return <Demo5 />;
            case 'Demo6':
                return <Demo6 />;
            default:
                return <View><Text>Demo Page</Text></View>;
        }
    };

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ paddingBottom: 10, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flexWrap: "wrap", gap: 10 }}>
                <Button title="Demo1" onPress={() => setActiveTab('Demo1')} />
                <Button title="Demo2" onPress={() => setActiveTab('Demo2')} />
                <Button title="Demo3" onPress={() => setActiveTab('Demo3')} />
                <Button title="Demo4" onPress={() => setActiveTab('Demo4')} />
                <Button title="Demo5" onPress={() => setActiveTab('Demo5')} />
                <Button title="Demo6" onPress={() => setActiveTab('Demo6')} />
            </View>
            {renderTab()}
        </View>
    );
};

export default App;
