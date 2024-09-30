import React, { useContext, useRef } from 'react';
import { Pressable, View, Text, Image, Alert } from 'react-native';
import { useCheckbox, useCheckboxGroupItem, useCheckboxGroup } from '@react-native-aria/checkbox';
import { useToggleState } from '@react-stately/toggle';
import { useCheckboxGroupState } from "@react-stately/checkbox";
import { useFocusRing } from '@react-native-aria/focus';

let CheckboxGroupContext = React.createContext<any>(null);

export function CheckboxGroup(props: any) {
    let { children, label } = props;
    let state = useCheckboxGroupState(props);
    let { groupProps, labelProps } = useCheckboxGroup(props, state);

    return (
        <View {...groupProps} style={{ flexDirection: 'row', alignItems: 'center' }}>
            {label && <Text {...labelProps}>{label}</Text>}
            <CheckboxGroupContext.Provider value={state}>
                {children}
            </CheckboxGroupContext.Provider>
        </View>
    );
}


export function Checkbox(props: any) {
    let groupState = useContext(CheckboxGroupContext);
    let inputRef = useRef<HTMLInputElement>(null);

    let { isFocusVisible, focusProps } = useFocusRing();

    let { inputProps } = groupState ? useCheckboxGroupItem(
        {
            ...props,
            isRequired: props.isRequired,
            validationState: props.validationState,
        },
        groupState,
        inputRef
    ) : useCheckbox(props, useToggleState(props), inputRef);

    let image: any = props.isIndeterminate
        ? require('../Images/checkboxoff.png')
        : inputProps.checked
            ? require('../Images/checkboxon.png')
            : require('../Images/checkboxoff.png')

    return (
        <View style={isFocusVisible ? { borderWidth: 2 } : {}}>
            <Pressable {...inputProps} {...focusProps} >
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 5 }}>
                    <Image style={{ width: 20, height: 20 }} source={image} />
                    {props.children}
                </View>
            </Pressable>
        </View>
    );
}

export const CheckboxExample = () => {
    const [state, setCheckbox] = React.useState([]);

    return (
        <CheckboxGroup
            label="CheckboxGroup："
            value={state}
            onChange={(val: any) => {
                setCheckbox(val);
            }}
        >
            <Checkbox value="soccer">
                <Text>足球</Text>
            </Checkbox>
            <Checkbox value="baseball">
                <Text>棒球</Text>
            </Checkbox>
            <Checkbox value="basketball">
                <Text>篮球</Text>
            </Checkbox>
        </CheckboxGroup>
    );
};
export default CheckboxExample