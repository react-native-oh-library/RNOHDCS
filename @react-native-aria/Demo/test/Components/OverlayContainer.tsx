import React from "react";
import { Pressable, View, Text, Modal, Image, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { useOverlayPosition, OverlayContainer, OverlayProvider } from "@react-native-aria/overlays";

const OverlayContent = ({ targetRef }) => {
    let overlayRef = React.useRef(null);
    const { overlayProps } = useOverlayPosition({
        placement: "bottom",
        targetRef,
        overlayRef,
    });

    return (
        <View
            ref={overlayRef}
            style={{
                position: "absolute",
                ...overlayProps.style,
            }}
        >
            <Image source={require('../Images/background.jpg')} />
        </View>
    );
};

export default function OverlayContainerExample({ setState }: any) {
    const [visible, setVisible] = React.useState(false);

    let ref = React.useRef(null);

    return (
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Text>OverlayContainer：</Text>
            <Pressable
                ref={ref}
                role="button"
                onPress={() => setVisible(true)}
                style={{
                    backgroundColor: "#F3F4F6",
                    maxWidth: 100,
                    padding: 10,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text>点我一下</Text>
            </Pressable>
            <Modal visible={visible} onRequestClose={() => { setVisible(false); setState(true) }}>
                <OverlayProvider>
                    <OverlayContainer>
                        <OverlayContent targetRef={ref} />
                        <TouchableWithoutFeedback
                            onPress={() => { setVisible(false); setState(true) }}
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
