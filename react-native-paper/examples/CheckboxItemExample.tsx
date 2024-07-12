import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import {
    Checkbox,
    MD2Theme,
    MD3Theme,
    useTheme,
} from 'react-native-paper';

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

export function CheckboxText() {
    const useExampleTheme = () => useTheme<MD2Theme | MD3Theme>();
    const [checkedDefault, setCheckedDefault] = React.useState<boolean>(true);
    const [checkedAndroid, setCheckedAndroid] = React.useState<boolean>(true);
    const [checkedIOS, setCheckedIOS] = React.useState<boolean>(true);
    const [checkedLeadingControl, setCheckedLeadingControl] =
        React.useState<boolean>(true);
    const [checkedDisabled, setCheckedDisabled] = React.useState<boolean>(true);
    const [checkedLabelVariant, setCheckedLabelVariant] = React.useState(true);

    const { isV3 } = useExampleTheme();

    return (
        <Tester>
            <TestSuite name='Checkbox' >
                <TestCase itShould='Default (will look like whatever system this is running on)'>
                    <Checkbox.Item
                        label="Default (will look like whatever system this is running on)"
                        status={checkedDefault ? 'checked' : 'unchecked'}
                        onPress={() => setCheckedDefault(!checkedDefault)}
                    />
                </TestCase>

                <TestCase itShould='Material Design'>
                  <Checkbox.Item
                    label="Material Design"
                    mode="android"
                    status={checkedAndroid ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedAndroid(!checkedAndroid)}
                   />
                </TestCase>

                <TestCase itShould='iOS'>
                 <Checkbox.Item
                    label="iOS"
                    mode="ios"
                    status={checkedIOS ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedIOS(!checkedIOS)}
                    />
                </TestCase>

                <TestCase itShould='Default with leading control'>
                <Checkbox.Item
                    label="Default with leading control"
                    status={checkedLeadingControl ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedLeadingControl(!checkedLeadingControl)}
                    mode="ios"
                    position="leading"
                 />
                </TestCase>

                <TestCase itShould='Disabled checkbox'>
                <Checkbox.Item
                    label="Disabled checkbox"
                    status={checkedDisabled ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedDisabled(!checkedDisabled)}
                    disabled
                />
                </TestCase>
                <TestCase itShould='Default with titleLarge title variant'>
                <Checkbox.Item
                    label="Default with titleLarge title variant"
                    labelVariant="titleLarge"
                    status={checkedLabelVariant ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedLabelVariant(!checkedLabelVariant)}
                />
                </TestCase>
            </TestSuite>

        </Tester>
    )
}


export default CheckboxText;
