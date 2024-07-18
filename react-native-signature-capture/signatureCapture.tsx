import { Button, ScrollView, StyleProp, Text, View, ViewStyle } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import React, { useRef, useState } from 'react';
import SignatureCapture from 'react-native-signature-capture'

export type SignatureComponentRef = {
    saveImage: () => void
    resetImage: () => void
}

const styles: StyleProp<ViewStyle> = {
    width: 330,
    margin: 10,
    height: 420,
}

const SignatureCaputureAllDemo = () => {

    const [count, setcount] = useState(0);
    return (
        <Tester>
            <TestSuite name='signature capture'>
                <TestCase modal itShould='background: black | strokeColor: white'>
                    <BasicSignatureComponent />
                </TestCase>
                <TestCase modal itShould='background: white | strokeColor: red'>
                    <BasicSignatureComponent
                        backgroundColor="#fff"
                        strokeColor="red"
                    />
                </TestCase>
                <TestCase modal itShould='showNaitveButtons: true'>
                    <BasicSignatureComponent
                        backgroundColor="#fff"
                        strokeColor="#2883d2"
                        showNativeButtons={true}
                    />
                </TestCase>
                <TestCase modal itShould='showTitleLabel: true'>
                    <BasicSignatureComponent
                        showTitleLabel={true}
                    />
                </TestCase>
                <TestCase modal itShould='showBorder: true'>
                    <BasicSignatureComponent
                        backgroundColor="#fff"
                        strokeColor="#2883d2"
                        showBorder={true}
                    />
                </TestCase>
                <TestCase modal itShould='minStrokeWidth: 1 | maxStrokeWidth: 4'>
                    <BasicSignatureComponent
                        backgroundColor="#fff"
                        strokeColor="#2883d2"
                        minStrokeWidth={1}
                        maxStrokeWidth={4}
                    />
                </TestCase>
                <TestCase modal itShould='minStrokeWidth: 2 | maxStrokeWidth: 8'>
                    <BasicSignatureComponent
                        backgroundColor="#fff"
                        strokeColor="#2883d2"
                        minStrokeWidth={2}
                        maxStrokeWidth={8}
                    />
                </TestCase>
                <TestCase modal itShould='command resetImage'>
                    <BasicSignatureComponent
                        backgroundColor="#fff"
                        strokeColor="#2883d2"
                    />
                </TestCase>
                <TestCase modal itShould='command saveImage & onSaveEvent'>
                    <SignatureSaveImageDemo />
                </TestCase>
                <TestCase modal itShould='Event onDragged'>
                    <Text>DragCount: {count}</Text>
                    <BasicSignatureComponent
                        onDragEvent={() => {
                            console.log('dragged');
                            setcount(count + 1);
                        }}
                    />
                </TestCase>
                <TestCase modal itShould='ViewMode'>
                    <SignatureViewModeDemo />
                </TestCase>
                <TestCase modal itShould='maxSize: 50'>
                    <SignatureSaveImageDemo maxSize={50} />
                </TestCase>
                <TestCase modal itShould='maxSize: 100'>
                    <SignatureSaveImageDemo maxSize={100} />
                </TestCase>
            </TestSuite>
        </Tester>
    );
}


function SignatureViewModeDemo() {

    const [viewMode, setviewMode] = useState<'portrait' | 'landscape'>('portrait');

    const dyWh: Record<string, StyleProp<ViewStyle>> = {
        'portrait': {
            width: 300,
            height: 400
        },
        'landscape': {
            width: '80%',
            height: 200,
        }
    }

    return (
        <>
            <SignatureCapture
                backgroundColor={'#fff'}
                strokeColor={'#2883d2'}
                showTitleLabel={false}
                showBorder={true}
                maxSize={50}
                viewMode={viewMode}
                minStrokeWidth={1}
                maxStrokeWidth={4}
                showNativeButtons={true}
                style={[styles, { marginTop: 0 }, dyWh[viewMode]]}
            />

            <Button title='toggle viewMode' onPress={() => {
                setviewMode(viewMode === 'portrait' ? 'landscape' : 'portrait');
            }}></Button>
        </>
    )
}


function SignatureSaveImageDemo(props: any) {

    const [saveRes, setsaveRes] = useState('');

    return (
        <>
            <BasicSignatureComponent
                backgroundColor="#fff"
                strokeColor="#2883d2"
                showSaveButton={true}
                maxSize={160}
                onSaveEvent={(ev: any) => {
                    setsaveRes(JSON.stringify(ev))
                }}
                {...props}
            />
            <ScrollView style={{ height: 160 }}>
                <Text style={{ fontWeight: 'bold' }}>Save Result:</Text>
                <Text>{saveRes}</Text>
            </ScrollView>
        </>
    )
}


function BasicSignatureComponent(props: any) {
    const ref = useRef<SignatureComponentRef>(null);
    return (
        <View style={{ display: 'flex', justifyContent: 'center' }}>
            <SignatureCapture
                ref={ref}
                backgroundColor={'black'}
                strokeColor={'#fff'}
                showTitleLabel={false}
                showNativeButtons={false}
                style={[styles, { marginTop: 0 }, props?.styles]}
                {...props}
            />
            <View style={{ marginTop: 10 }}>
                <Button title='reset' onPress={() => {
                    ref.current?.resetImage();
                }}></Button>
                {
                    props.showSaveButton &&
                    <Button title='saveImage' onPress={() => {
                        ref.current?.saveImage();
                    }}></Button>
                }
            </View>

        </View>
    )
}

export default SignatureCaputureAllDemo;
