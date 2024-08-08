import React from "react";
import { useOverlayPosition, OverlayProvider, OverlayContainer } from "@react-native-aria/overlays";
import { useButton } from "@react-native-aria/button";
import { View, Text, Pressable, ScrollView, Modal, TouchableNativeFeedback, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { useToggleState } from "@react-stately/toggle";

const positions = [
    "top",
    "left",
    "right",
    "bottom",
    "top left",
    "top right",
    "left top",
    "left bottom",
    "bottom right, bottom left",
    "right top",
    "right bottom",
];

export function TriggerWrapper() {
    const [placement, setPlacement] = React.useState<any>(-1);
    React.useEffect(() => {
        const id = setInterval(() => {
            setPlacement((prev) => (prev + 1) % positions.length);
        }, 2000);
        return () => clearInterval(id);
    }, []);

    return <Trigger placement={positions[placement]}></Trigger>;
}

const OverlayView = ({ targetRef, placement = 'top' }) => {
    let overlayRef = React.useRef();

    const { overlayProps } = useOverlayPosition({
        placement: placement as any,
        targetRef,
        overlayRef,
        offset: 10,
    });

    return (
        <ScrollView
            bounces={false}
            style={{
                position: "absolute",
                height: 400,
                backgroundColor: "lightgray",
                ...overlayProps.style,
            }}
            ref={(node) => overlayRef.current = node}
        >
            <View
                style={{
                    padding: 20,
                    height: 5000,
                }}
            >
                <Text>Hello world</Text>
            </View>
        </ScrollView>
    );
};

export function Trigger({ placement }: any) {
    let ref = React.useRef();
    const toggleState = useToggleState();

    let { buttonProps } = useButton({ onPress: toggleState.toggle }, ref);

    return (
        <View style={{ flexDirection: 'row', alignItems: "center" }} >
            <Text>useOverlayPosition：</Text>
            <Pressable
                {...buttonProps}
                ref={ref}
                role="button"
                aria-label="Click here to perform some actions"
            >
                <View
                    style={{
                        flexDirection: "row",
                        borderWidth: 1,
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                    }}
                >
                    <Text>点我一下</Text>
                </View>
            </Pressable>
            <Modal visible={toggleState.isSelected} onRequestClose={toggleState.toggle}>
                <OverlayProvider>
                    <OverlayContainer>
                        <OverlayView targetRef={ref} placement={placement} />
                        <TouchableWithoutFeedback
                            onPress={() => toggleState.toggle()}
                            accessible={false}
                            importantForAccessibility={"no-hide-descendants"}
                        >
                            <View style={StyleSheet.absoluteFill}></View>
                        </TouchableWithoutFeedback>
                    </OverlayContainer>
                </OverlayProvider>
            </Modal>
        </View>
    );
}
export default TriggerWrapper