import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import * as React from 'react';
import { Switch, Text} from 'react-native';
import StatusBar from "react-native-bars"; 

export function BarExample() {

  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <Tester>
      <TestSuite name='BarTesteDemo'>
        <TestCase itShould='statusBar' tags={['C_API']}>
          <StatusBar     
            barStyle= {isEnabled ? "light-content" : "dark-content"} 
          />
            <Text style={{color:"black"}}>关 dark-content/ 开 light-content</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={ toggleSwitch }
              value={isEnabled}
              /> 
        </TestCase>
      </TestSuite>
    </Tester>
    
    
  );
}
