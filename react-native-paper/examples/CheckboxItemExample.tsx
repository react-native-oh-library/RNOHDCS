import * as React from 'react';

import {
    Checkbox,
    MD2Colors,
    MD2Theme,
    MD3Theme,
    useTheme,
} from 'react-native-paper';

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { ScrollView } from 'react-native-harmony';

type CheckboxVisibility = {
    [key: string]: boolean | undefined;
  };
type status = 'checked' | 'unchecked' | 'indeterminate';
export function CheckboxText() {
    const [visible, setVisible] = React.useState<CheckboxVisibility>({});

    const _getVisible = (name: string) => !!visible[name];
    const _showCheckbox = (name: string) => () =>
    setVisible({ ...visible, [name]: !visible[name] });


    const _onLongPress =() => {
        console.info('fuction onLongPress ')
    }

    const CheckboxProps = [
        {
            key: 'Checkbox style: status  is checked/unchecked',
            value: {
                status:_getVisible('checkedDefault') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault')
            } 
        },
        {
            key: 'Checkbox style: status  is indeterminate',
            value: {
                status:'indeterminate' as status,
            } 
        },
        {
            key: 'Checkbox function: _onPress',
            value: {
                status:_getVisible('checkedDefault1') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault1')
            } 
        },
        {
            key: 'Checkbox style: uncheckedColor  is MD2Colors.red100',
            value: {
                status:_getVisible('checkedDefault2') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault2'),
                uncheckedColor:MD2Colors.red100
            } 
        },
        {
            key: 'Checkbox style: uncheckedColor  is MD2Colors.blue100',
            value: {
                status:_getVisible('checkedDefault3') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault3'),
                uncheckedColor:MD2Colors.blue100
            } 
        },
        {
            key: 'Checkbox style: color  is checked/unchecked',
            value: {
                status:_getVisible('checkedDefault4') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault4'),
                color:MD2Colors.red100
            } 
        },
        {
            key: 'Checkbox style: testID  is checked',
            value: {
                status:_getVisible('checkedDefault5') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault5'),
                testID:'checked'
            } 
        },
        {
            key: 'Checkbox style: testID  is checked1',
            value: {
                status:_getVisible('checkedDefault6') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault6'),
                testID:'checked1'
            } 
        },
        {
            key: 'Checkbox style: theme  is { colors: { primary: "green"} }',
            value: {
                status:_getVisible('checkedDefault7') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault7'),
                theme:{ colors: { primary: 'green' } }
            } 
        },
    ]

    const ChecAndroidkboxProps = [
        {
            key: 'ChecAndroidkboxProps style: status  is checked/unchecked',
            value: {
                status:_getVisible('ChecAndroid1') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('ChecAndroid1'),
            } 
        },
        {
            key: 'ChecAndroidkboxProps style: status = {indeterminate}',
            value: {
                status:'indeterminate' as status
            } 
        },
        {
            key: 'ChecAndroidkboxProps fuction: onPress = {_showCheckbox("ChecAndroids")}',
            value: {
                status:_getVisible('ChecAndroids') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('ChecAndroids'),
            } 
        },
        {
            key: 'ChecAndroidkboxProps style: disabled  is true',
            value: {
                status:_getVisible('ChecAndroid2') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('ChecAndroid2'),
                disabled:true
            } 
        },
        {
            key: 'ChecAndroidkboxProps style: disabled  is false',
            value: {
                status:_getVisible('ChecAndroid3') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('ChecAndroid3'),
                disabled:false
            } 
        },
        {
            key: 'ChecAndroidkboxProps style: uncheckedColor is MD2Colors.red100',
            value: {
                status:_getVisible('ChecAndroid4') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('ChecAndroid4'),
                uncheckedColor:MD2Colors.red100
            } 
        },
        {
            key: 'ChecAndroidkboxProps style: color is MD2Colors.red100',
            value: {
                status:_getVisible('ChecAndroid5') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('ChecAndroid5'),
                color:MD2Colors.red100
            } 
        },
        {
            key: 'ChecAndroidkboxProps style: theme  is { colors: { primary: "green" } }',
            value: {
                status:_getVisible('ChecAndroid6') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('ChecAndroid6'),
                theme :{ colors: { primary: 'green' } }
            } 
        },
        {
            key: 'ChecAndroidkboxProps style: testID  is testID1',
            value: {
                status:_getVisible('ChecAndroid6') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('ChecAndroid6'),
                testID:'testID1'
            } 
        },
        {
            key: 'ChecAndroidkboxProps style: testID  is testID2',
            value: {
                status:_getVisible('ChecAndroid6') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('ChecAndroid6'),
                testID:'testID2'
            } 
        },

    ]


    const ChecIOSkboxProps = [
        {
            key: 'ChecIOSkboxProps style: status  is checked/unchecked',
            value: {
                status:_getVisible('ChecIOS1') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('ChecIOS1'),
            } 
        },
        {
            key: 'ChecIOSkboxProps style: status = {indeterminate}',
            value: {
                status:'indeterminate' as status
            } 
        },
        {
            key: 'ChecIOSkboxProps fuction: onPress = {_showCheckbox("ChecIOSs")}',
            value: {
                status:_getVisible('ChecIOSs') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('ChecIOSs'),
            } 
        },
        {
            key: 'ChecIOSkboxProps style: disabled  is true',
            value: {
                status:_getVisible('ChecIOSs2') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('ChecIOSs2'),
                disabled:true
            } 
        },
        {
            key: 'ChecIOSkboxProps style: disabled  is false',
            value: {
                status:_getVisible('ChecIOSs3') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('ChecIOSs3'),
                disabled:false
            } 
        },
        {
            key: 'ChecIOSkboxProps style: color is MD2Colors.red100',
            value: {
                status:_getVisible('ChecIOSs5') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('ChecIOSs5'),
                color:MD2Colors.red100
            } 
        },
        {
            key: 'ChecIOSkboxProps style: theme  is { colors: { primary: "green" } }',
            value: {
                status:_getVisible('ChecIOSs6') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('ChecIOSs6'),
                theme :{ colors: { primary: 'green' } }
            } 
        },
        {
            key: 'ChecIOSkboxProps style: testID  is testID1',
            value: {
                status:_getVisible('ChecIOSs6') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('ChecIOSs6'),
                testID:'testID1'
            } 
        },
        {
            key: 'ChecIOSkboxProps style: testID  is testID2',
            value: {
                status:_getVisible('ChecIOSs6') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('ChecIOSs6'),
                testID:'testID2'
            } 
        },

    ]

    const CheckboxItemProps = [
        {
            key: 'Checkbox.Item style: status  is checked/unchecked',
            value: {
                label:'Default (will look like whatever system this is running on)',
                status:_getVisible('checkedDefault8') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault8'),
            } 
        },
        {
            key: 'Checkbox.Item style: model  is android',
            value: {
                label:'Material Design',
                mode:'android' as 'android' | 'ios',
                status:_getVisible('checkedDefault9') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault9'),
            } 
        },
        {
            key: 'Checkbox.Item style: model  is ios',
            value: {
                label:'iOS',
                mode:'ios' as 'android' | 'ios',
                status:_getVisible('checkedDefault10') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault10'),
            } 
        },
        {
            key: 'Checkbox.Item style: disabled  is true',
            value: {
                label:'Default ',
                status:_getVisible('checkedDefault11') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault11'),
                disabled:true
            } 
        },
        {
            key: 'Checkbox.Item style: disabled  is false',
            value: {
                label:'Default ',
                status:_getVisible('checkedDefault12') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault12'),
                disabled:false
            } 
        },
        {
            key: 'Checkbox.Item style: label  is Default',
            value: {
                label:'Default ',
                status:_getVisible('checkedDefault13') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault13'),
            } 
        },
        {
            key: 'Checkbox.Item function: onPress',
            value: {
                label:'Default ',
                status:_getVisible('checkedDefault14') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault14'),
            } 
        },
        {
            key: 'Checkbox.Item function: onLongPress',
            value: {
                label:'Default ',
                status:_getVisible('checkedDefault15') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault15'),
                onLongPress:_onLongPress
            } 
        },
        {
            key: 'Checkbox.Item style: background is style:{backgroundColor:MD2Colors.red100}',
            value: {
                label:'Default ',
                status:_getVisible('checkedDefault16') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault16'),
                // style:{backgroundColor:MD2Colors.red100},
                background:{backgroundColor:MD2Colors.red100}
            } 
        },
        {
            key: 'Checkbox.Item style: accessibilityLabel is accessibility label',
            value: {
                label:'Default ',
                status:_getVisible('checkedDefault17') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault17'),
                accessibilityLabel:'accessibility Label'
            } 
        },
        {
            key: 'Checkbox.Item style: accessibilityLabel is label',
            value: {
                label:'Default ',
                status:_getVisible('checkedDefault18') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault18'),
                accessibilityLabel:'Label'
            } 
        },
        {
            key: 'Checkbox.Item style: uncheckedColor is MD2Colors.red100',
            value: {
                label:'Default ',
                status:_getVisible('checkedDefault19') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault19'),
                uncheckedColor:MD2Colors.red100
            } 
        },
        {
            key: 'Checkbox.Item style: color is MD2Colors.red100',
            value: {
                label:'Default ',
                status:_getVisible('checkedDefault20') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault20'),
                color:MD2Colors.red100
            } 
        },
        {
            key: 'Checkbox.Item style: rippleColor is MD2Colors.red100',
            value: {
                label:'Default ',
                status:_getVisible('checkedDefault21') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault21'),
                rippleColor:MD2Colors.red100
            } 
        },
        {
            key: 'Checkbox.Item style: {backgroundColor:MD2Colors.blue100},',
            value: {
                label:'Default ',
                status:_getVisible('checkedDefault22') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault22'),
                style:{backgroundColor:MD2Colors.blue100},
            } 
        },
        {
            key: 'Checkbox.Item style: labelMaxFontSizeMultiplier is 1',
            value: {
                label:'Default ',
                status:_getVisible('checkedDefault23') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault23'),
                labelMaxFontSizeMultiplier:1,
            } 
        },
        {
            key: 'Checkbox.Item style: labelMaxFontSizeMultiplier is 2',
            value: {
                label:'Default ',
                status:_getVisible('checkedDefault24') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault24'),
                labelMaxFontSizeMultiplier:2,
            } 
        },
        {
            key: 'Checkbox.Item style: labelStyle is {color:MD2Colors.red100}',
            value: {
                label:'Default ',
                status:_getVisible('checkedDefault25') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault25'),
                labelStyle:{color:MD2Colors.red100},
            } 
        },
        {
            key: 'Checkbox.Item style: labelVariant  is bodyLarge',
            value: {
                label:'Default ',
                status:_getVisible('checkedDefault26') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault26'),
                labelVariant :'bodyLarge' as 'bodyLarge'|'bodyMedium'|'bodySmall',
            } 
        },
        {
            key: 'Checkbox.Item style: labelVariant  is bodyMedium',
            value: {
                label:'Default ',
                status:_getVisible('checkedDefault27') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault27'),
                labelVariant :'bodyMedium' as 'bodyLarge'|'bodyMedium'|'bodySmall',
            } 
        },
        {
            key: 'Checkbox.Item style: labelVariant  is bodySmall',
            value: {
                label:'Default ',
                status:_getVisible('checkedDefault28') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault28'),
                labelVariant :'bodySmall' as 'bodyLarge'|'bodyMedium'|'bodySmall',
            } 
        },
        {
            key: 'Checkbox.Item style: theme  is { colors: { primary: "green" } }',
            value: {
                label:'Default ',
                status:_getVisible('checkedDefault29') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault29'),
                theme :{ colors: { primary: 'green' } }
            } 
        },
        {
            key: 'Checkbox.Item style: testID is Checkbox',
            value: {
                label:'Default ',
                status:_getVisible('checkedDefault30') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault30'),
                testID :'Checkbox'
            } 
        },
        {
            key: 'Checkbox.Item style: testID is Checkbox1',
            value: {
                label:'Default ',
                status:_getVisible('checkedDefault31') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault31'),
                testID :'Checkbox1'
            } 
        },
        {
            key: 'Checkbox.Item style: position is leading',
            value: {
                label:'Default ',
                status:_getVisible('checkedDefault32') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault32'),
                position :'leading' as 'leading' | 'trailing'
            } 
        },
        {
            key: 'Checkbox.Item style: position is trailing',
            value: {
                label:'Default ',
                status:_getVisible('checkedDefault33') ? 'checked' : 'unchecked' as status,
                onPress:_showCheckbox('checkedDefault33'),
                position :'trailing' as 'leading' | 'trailing'
            } 
        },
    ]

    return (
        <ScrollView>
          <Tester>
            <TestSuite name='Checkbox' >
                {CheckboxProps.map((item) => {
                    return (
                    <TestCase itShould={item.key}  key={item.key}>
                        <Checkbox {...item.value}/>
                    </TestCase>
                    );
                })} 
                {ChecAndroidkboxProps.map((item) => {
                    return (
                    <TestCase itShould={item.key}  key={item.key}>
                        <Checkbox.Android {...item.value}/>
                    </TestCase>
                    );
                })} 
                {ChecIOSkboxProps.map((item) => {
                    return (
                    <TestCase itShould={item.key}  key={item.key}>
                        <Checkbox.Android {...item.value}/>
                    </TestCase>
                    );
                })} 
                {CheckboxItemProps.map((item) => {
                    return (
                    <TestCase itShould={item.key}  key={item.key}>
                        <Checkbox.Item {...item.value}
                        />
                    </TestCase>
                    );
                })}       
            </TestSuite>
         </Tester>
        </ScrollView>
    )
}


export default CheckboxText;
