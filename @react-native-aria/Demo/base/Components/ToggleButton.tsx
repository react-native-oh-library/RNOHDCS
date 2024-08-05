import React from "react";
import { useToggleButton } from "@react-native-aria/button";
import { useToggleState } from "@react-stately/toggle";
import { Pressable, Text, View } from "react-native";
import { useRef } from "react";

export function ToggleButton(props: any) {
    const ref = useRef(null);
    let state = useToggleState(props);
    let { buttonProps, isPressed } = useToggleButton(props, state);

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>ToggleButton：</Text>
            <Pressable ref={ref} {...buttonProps}
                style={{
                    backgroundColor: state.isSelected ? "rgb(9, 90, 186)" : "#e1e1e1", borderRadius: 15,
                    padding: 5, width: 100, height: 30, justifyContent: 'center', alignItems: 'center'
                }}
            >
                <Text style={{ color: state.isSelected ? "#f1f1f1" : "#000" }} >点击切换</Text>
            </Pressable>
        </View>
    );
}

export default ToggleButton