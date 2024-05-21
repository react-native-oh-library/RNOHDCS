import React, { ReactElement } from 'react';
import { ScrollView } from 'react-native';
import Demo0 from './Demo0';
import Demo1 from './example/src/App';

const App = (): ReactElement => {
    return (
        <ScrollView style={{ height: 'auto', paddingLeft: 10, paddingRight: 10 }}>
            <Demo0 />
            <Demo1 />
        </ScrollView>
    );
};

export default App;
