import React, { ReactNode } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import SimpleGradient from './SimpleGradient';
import SimpleGradientSecond from './SimpleGradientSecond';
import AngleGradient from './AngleGradient';
import AnimatedGradient from './AnimatedGradient';
import GradientButtons from './GradientButtons';
import GradientTimer from './GradientTimer';

const Section: React.FC<{
  children: ReactNode;
  title: string;
}> = ({children, title}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle]}>{title}</Text>
      {children}
    </View>
  );
};

function LinearGradientDemo() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#ffffff00"
        barStyle={'dark-content'}
        translucent={true}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Section title="Simple Gradient">
          <SimpleGradient />
        </Section>
        
        <Section title="Angle Gradient">
          <AngleGradient />
        </Section>
        <Section title="Animated Gradient">
          <AnimatedGradient />
        </Section>
        <Section title="Gradient Timer">
          <GradientTimer />
        </Section>
        <Section title="Simple Gradient Second">
          <SimpleGradientSecond />
        </Section>
        <Section title="Gradient Buttons">
          <GradientButtons />
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 24,
  },
  titleContainer: {
    marginBottom: 8,
  },
  titleGradient: {
    height: 96,
    justifyContent: 'center',
  },
  logo: {
    marginLeft: -48,
    marginTop: -48,
    opacity: 0.2,
    width: '55%',
  },
  titleText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  badge: {
    alignSelf: 'flex-end',
    position: 'absolute',
  },
  badgeText: {
    color: '#777',
    padding: 4,
  },
  sectionContainer: {
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    margin: 4,
  },
});

export default LinearGradientDemo;