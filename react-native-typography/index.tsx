import { View, StyleSheet, ScrollView, Text,} from 'react-native';
import React from 'react';
import {NavigationContainer, Page} from './Navigation';
import {PortalHost, PortalProvider} from '@gorhom/portal';
import {HumanExample} from './TypographyHuman';
import {HumanDenseExample} from './TypographyHumanDense';
import {HumanTallExample} from './TypographyHumanTall';
import {IOSColoirsExample} from './TypographyiOSColors';
import {IOSUIKitExample} from './TypographyIOSUIKit';
import {IOSUIKitDenseExample} from './TypographyIOSUIKitDense';
import {IOSUIKitTallExample} from './TypographyIOSUIKitTall';
import {MaterialExample} from './TypographyMaterial';
import {TypographyMaterialTall} from './TypographyMaterialTall';
import {TypographyMaterialDense} from './TypographyMaterialDense';
import {MaterialColorsExample} from './TypographymaterialColors';
import {NotoCJKWeightsExample} from './TypographynotoCJKWeights';
import {NotoTallWeightsExample} from './TypographynotoTallWeights';
import {RobotoWeightsExample} from './TypographyrobotoWeights';
import {SanFranciscoWeightsExample} from './TypographysanFranciscoWeights';
import {SystemDenseWeightsExample} from './TypographysystemDenseWeights';
import {SystemTallWeightsExample} from './TypographysystemTallWeights';
import {SystemWeightsExample} from './TypographysystemWeights';
import {WebWeightsExample} from './TypographywebWeights';

export function TypographyExample() {

  return (
    <View style={{backgroundColor: 'black'}}>
    <NavigationContainer>
        <PortalProvider>
          <Page name ='humanExample'><HumanExample/></Page>
          <Page name ='HumanDenseExample'><HumanDenseExample/></Page>
          <Page name ='HumanTallExample'><HumanTallExample/></Page>
          <Page name ='IOSColoirsExample'><IOSColoirsExample/></Page>
          <Page name ='IOSUIKitExample'><IOSUIKitExample/></Page>
          <Page name ='IOSUIKitDenseExample'><IOSUIKitDenseExample/></Page>
          <Page name ='IOSUIKitTallExample'><IOSUIKitTallExample/></Page>
          <Page name ='MaterialExample'><MaterialExample/></Page>
          <Page name ='materialTallExample'><materialTallExample/></Page>
          <Page name ='TypographyMaterialDense'><TypographyMaterialDense/></Page>
          <Page name ='MaterialColorsExample'><MaterialColorsExample/></Page>
          <Page name ='NotoCJKWeightsExample'><NotoCJKWeightsExample/></Page>
          <Page name ='NotoTallWeightsExample'><NotoTallWeightsExample/></Page>
          <Page name ='RobotoWeightsExample'><RobotoWeightsExample/></Page>
          <Page name ='SanFranciscoWeightsExample'><SanFranciscoWeightsExample/></Page>
          <Page name ='SystemDenseWeightsExample'><SystemDenseWeightsExample/></Page>
          <Page name ='SystemTallWeightsExample'><SystemTallWeightsExample/></Page>
          <Page name ='SystemWeightsExample'><SystemWeightsExample/></Page>
          <Page name ='WebWeightsExample'><WebWeightsExample/></Page>

          <View
          style={[
            StyleSheet.absoluteFill,
            {zIndex: 100, pointerEvents: 'box-none'},
          ]}>
          <PortalHost name="ModalHost" />
        </View>
        </PortalProvider>
      </NavigationContainer>
  </View>
  );
}