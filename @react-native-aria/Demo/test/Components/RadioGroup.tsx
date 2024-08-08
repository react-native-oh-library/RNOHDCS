import React, { useEffect } from "react";
import { useRadioGroupState } from "@react-stately/radio";
import { useRadio, useRadioGroup } from "@react-native-aria/radio";
import { Image, Pressable, Text, View } from "react-native";
import { useFocusRing } from "@react-native-aria/focus";

let RadioContext = React.createContext<any>({});

export function RadioGroup(props: any) {
    let { children, label } = props;
    let state = useRadioGroupState(props);
    let { radioGroupProps, labelProps } = useRadioGroup(props, state);

    return (
        <View {...radioGroupProps} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text {...labelProps}>{label}</Text>
            <RadioContext.Provider
                value={{
                    isDisabled: props.isDisabled,
                    isReadOnly: props.isReadOnly,
                    state,
                }}
            >
                {children}
            </RadioContext.Provider>
        </View>
    );
}

export function Radio(props: any) {
    let { state, isReadOnly, isDisabled } = React.useContext(RadioContext);
    const inputRef = React.useRef(null);
    const { setState, ...other } = props;
    let { inputProps } = useRadio(
        { isReadOnly, isDisabled, ...other },
        state,
        inputRef
    );
    let { isFocusVisible, focusProps } = useFocusRing();
    let isSelected = state.selectedValue === other.value;
    const icon = isSelected ? require('../Images/radioon.png') : require('../Images/radiooff.png');

    useEffect(() => {
        isSelected && setState(true)
    }, [isSelected])

    return (
        <Pressable {...inputProps}{...focusProps} style={{ marginRight: 5 }}>
            <View style={[{ flexDirection: 'row', alignItems: 'center' }, isFocusVisible ? { borderWidth: 1 } : {},]}>
                <Image style={{ width: 20, height: 20 }} source={icon} />
                <Text>{other.children}</Text>
            </View>
        </Pressable>
    );
}

const RadioExample = (props: any) => {

    return (
        <RadioGroup label="RadioGroup：" >
            <Radio value="dogs" {...props}>狗子</Radio>
            <Radio value="cats" {...props}>猫儿</Radio>
        </RadioGroup>
    );
};
export default RadioExample
