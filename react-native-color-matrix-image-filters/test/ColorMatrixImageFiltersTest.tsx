import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { TestSuite } from '@rnoh/testerino';
import { TestCase } from '../../components';
import {
    Achromatomaly,
    Achromatopsia,
    Brightness,
    Browni,
    ColorTone,
    Contrast,
    Cool,
    Deuteranomaly,
    Deuteranopia,
    DuoTone,
    Grayscale,
    HueRotate,
    Invert,
    Kodachrome,
    Lsd,
    LuminanceToAlpha,
    Night,
    Nightvision,
    Normal,
    Polaroid,
    Predator,
    Protanomaly,
    Protanopia,
    RGBA,
    Saturate,
    Sepia,
    Technicolor,
    Temperature,
    threshold,
    Tint,
    ToBGR,
    Tritanomaly,
    Tritanopia,
    Vintage,
    ColorMatrix,
    concatColorMatrices,
    Warm
} from 'react-native-color-matrix-image-filters';

declare const require: (name: string) => number
export const ColorMatrixImageFiltersTest = () => {
    return (
        <TestSuite name="ColorMatrixImageFilters">
            <TestCase.Example
                tags={['C_API']}
                itShould="Achromatomaly">
                <Achromatomaly>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Achromatomaly>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Achromatopsia">
                <Achromatopsia>
                    <Image style={styles.image} source={require('.../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Achromatopsia>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Brightness">
                <Brightness>
                    <Image style={styles.image} source={require('.../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Brightness>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Browni">
                <Browni>
                    <Image style={styles.image} source={require('.../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Browni>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="ColorTone">
                <ColorTone>
                    <Image style={styles.image} source={require('.../mini-parrot.jpg')} resizeMode={'stretch'} />
                </ColorTone>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Contrast">
                <Contrast>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Contrast>
            </TestCase.Example>
            <TestCase.Example
                tags={['C_API']}
                itShould="Cool">
                <Cool>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Cool>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Deuteranomaly">
                <Deuteranomaly>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Deuteranomaly>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Deuteranopia">
                <Deuteranopia>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Deuteranopia>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="DuoTone">
                <DuoTone>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </DuoTone>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Grayscale">
                <Grayscale>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Grayscale>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="HueRotate">
                <HueRotate>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </HueRotate>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Invert">
                <Invert>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Invert>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Kodachrome">
                <Kodachrome>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Kodachrome>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Lsd">
                <Lsd>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Lsd>
            </TestCase.Example>
            <TestCase.Example
                tags={['C_API']}
                itShould="LuminanceToAlpha">
                <LuminanceToAlpha>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </LuminanceToAlpha>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Night">
                <Night>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Night>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Nightvision">
                <Nightvision>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Nightvision>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Normal">
                <Normal>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Normal>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Polaroid">
                <Polaroid>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Polaroid>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Predator">
                <Predator>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Predator>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Protanomaly">
                <Protanomaly>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Protanomaly>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Protanopia">
                <Protanopia>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Protanopia>
            </TestCase.Example>
            <TestCase.Example
                tags={['C_API']}
                itShould="RGBA">
                <RGBA>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </RGBA>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Saturate">
                <Saturate secondColor={'red'}>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Saturate>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Sepia">
                <Sepia>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Sepia>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Technicolor">
                <Technicolor>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Technicolor>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Temperature">
                <Temperature>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Temperature>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Threshold">
                <ColorMatrix matrix={concatColorMatrices(threshold(10))}>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </ColorMatrix>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Tint">
                <Tint>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Tint>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="ToBGR">
                <ToBGR>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </ToBGR>
            </TestCase.Example>
            <TestCase.Example
                tags={['C_API']}
                itShould="Tritanomaly">
                <Tritanomaly>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Tritanomaly>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Tritanopia">
                <Tritanopia>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Tritanopia>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Vintage">
                <Vintage>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Vintage>
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Warm">
                <Warm>
                    <Image style={styles.image} source={require('../mini-parrot.jpg')} resizeMode={'stretch'} />
                </Warm>
            </TestCase.Example>
        </TestSuite>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    image: {
        width: 150,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
})