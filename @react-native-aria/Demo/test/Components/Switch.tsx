import { useToggleState } from "@react-stately/toggle";
import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated, Pressable } from "react-native";
import { useSwitch } from "@react-native-aria/switch";
import { useFocusRing } from "@react-native-aria/focus";
import { VisuallyHidden } from "@react-aria/visually-hidden";

const calculateDimensions = (size: any) => {
    switch (size) {
        case "small":
            return {
                width: 40,
                padding: 10,
                circleWidth: 15,
                circleHeight: 15,
                translateX: 22,
            };
        case "large":
            return {
                width: 70,
                padding: 20,
                circleWidth: 30,
                circleHeight: 30,
                translateX: 38,
            };
        default:
            return {
                width: 46,
                padding: 12,
                circleWidth: 18,
                circleHeight: 18,
                translateX: 26,
            };
    }
};

const defaultProps = {
    isOn: false,
    onColor: "#4cd137",
    offColor: "#ecf0f1",
    size: "medium",
    labelStyle: {},
    thumbOnStyle: {},
    thumbOffStyle: {},
    trackOnStyle: {},
    trackOffStyle: {},
    icon: null,
    disabled: false,
    animationSpeed: 300,
    useNativeDriver: true,
    circleColor: "white",
};

export function Switch(origProps: any) {
    const props = {
        ...defaultProps,
        ...origProps,
    };

    const offsetX = useRef(new Animated.Value(0));
    const dimensions = useRef(calculateDimensions(props.size));

    const createToggleSwitchStyle = () => [
        {
            justifyContent: "center",
            width: dimensions.current.width,
            borderRadius: 20,
            padding: dimensions.current.padding,
            backgroundColor: props.isOn ? props.onColor : props.offColor,
        },
        props.isOn ? props.trackOnStyle : props.trackOffStyle,
    ];

    const createInsideCircleStyle = () => [
        {
            alignItems: "center",
            justifyContent: "center",
            margin: 4,
            left: 0,
            position: "absolute",
            backgroundColor: props.circleColor,
            transform: [{ translateX: offsetX.current }],
            width: dimensions.current.circleWidth,
            height: dimensions.current.circleHeight,
            borderRadius: dimensions.current.circleWidth / 2,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.2,
            shadowRadius: 2.5,
            elevation: 1.5,
        },
        props.isOn ? props.thumbOnStyle : props.thumbOffStyle,
    ];

    const { isOn, icon, label, labelStyle = {} } = props;

    const toValue = isOn
        ? dimensions.current.width - dimensions.current.translateX
        : 0;

    Animated.timing(offsetX.current, {
        toValue,
        duration: props.animationSpeed,
        useNativeDriver: props.useNativeDriver,
    }).start();

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {label && <Text style={labelStyle}>{label}</Text>}
            <View style={[...createToggleSwitchStyle(), { marginBottom: 5 }]}>
                <Animated.View style={createInsideCircleStyle()}>{icon}</Animated.View>
            </View>
            <Text style={{ marginLeft: 5 }}>{isOn ? "开" : "关"}</Text>
        </View>
    );
}

export default function ControlledSwitch(props: any) {
    const state = useToggleState();
    const { setState } = props;
    const { isFocusVisible, focusProps } = useFocusRing();
    const inputRef = useRef(null);
    let { inputProps } = useSwitch(
        { "aria-label": "Example switch" },
        state,
        inputRef
    );

    useEffect(() => {
        state.isSelected && setState(true)
    }, [state.isSelected])

    return (
        <Pressable {...inputProps} {...focusProps} ref={inputRef}>
            <View style={isFocusVisible ? { borderWidth: 2 } : {}}>
                <Switch
                    isOn={state.isSelected}
                    onColor="green"
                    offColor="red"
                    label='Switch：'
                    size="large"
                    onToggle={state.toggle}
                />
            </View>
        </Pressable>
    );

}