import * as React from 'react';
import { StyleSheet, TextInput, View, Button, Text, Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import {
  BottomSheetScreenProps,
  createBottomSheetNavigator,
} from '@th3rdwave/react-navigation-bottom-sheet';
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
const { width, height } = Dimensions.get('window');

type BottomSheetParams = {
  Home: undefined;
  Sheet: { id: number };
  BigSheet: { id: number };
};
const BottomSheet = createBottomSheetNavigator<BottomSheetParams>();
function HomeScreen({
  navigation,
}: BottomSheetScreenProps<BottomSheetParams, 'Home'>) {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>Home Screen</Text>
      <View style={styles.spacer} />
      <Button
        title="Open sheet"
        onPress={() => {
          navigation.navigate('Sheet', { id: 1 });
        }}
      />
      <View style={styles.spacer} />
      <Button
        title="Open a big sheet"
        onPress={() => {
          navigation.navigate('BigSheet', { id: 1 });
        }}
      />
    </View>
  );
}
function SheetScreen({
  route,
  navigation,
}: BottomSheetScreenProps<BottomSheetParams, 'Sheet'>) {
  let timer: any = null
  React.useEffect(() => {
    return () => {
      clearTimeout(timer)
    }
  })
  return (
    <View style={[styles.container, styles.content]}>
      <Text>Sheet Screen {route.params.id}</Text>
      <View style={styles.spacer} />
      <Button
        title="Open new sheet"
        onPress={() => {
          navigation.navigate('Sheet', { id: route.params.id + 1 });
        }}
      />
      <View style={styles.spacer} />
      <Button
        title="Open new big sheet"
        onPress={() => {
          navigation.navigate('BigSheet', { id: route.params.id + 1 });
        }}
      />
      <View style={styles.spacer} />
      <Button
        title="Close this sheet"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.spacer} />
      {route.name === ('BigSheet' as unknown) && (
        <>
        <TextInput style={{ borderColor:'black'}} placeholder="Input here..." />
          <Button
            title="Snap to top"
            onPress={() => {
              timer = setTimeout(() => {
                navigation.snapTo(1);
              })
            }}
          />
        </>
      )}
    </View>
  );
}
const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
);
function SimpleExample() {
  return (
    <NavigationContainer>
      <BottomSheet.Navigator
        screenOptions={{
          backdropComponent: renderBackdrop,
        }}
      >
        <BottomSheet.Screen name="Home" component={HomeScreen} />
        <BottomSheet.Screen
          name="Sheet"
          component={SheetScreen}
          getId={({ params }) => `sheet-${params.id}`}
        />
        <BottomSheet.Screen
          name="BigSheet"
          component={SheetScreen}
          options={{
            snapPoints: ['70%', '90%'],
            keyboardBehavior: 'interactive'
          }}
          getId={({ params }) => `sheet-${params.id}`}
        />
      </BottomSheet.Navigator>
    </NavigationContainer>
  );
}
export function BottomTestExample() {
  return (
    <Tester>
        <TestSuite name='BottomSheetTesteDemo'>
              <TestCase itShould={'SimpleExample'} tags={['C_API']} >
                <View style={styles.app}>
                <GestureHandlerRootView style={styles.container1}>
                  <SimpleExample />
                </GestureHandlerRootView>
                </View>
              </TestCase>
        </TestSuite>
      </Tester>
    
  );
}

const styles = StyleSheet.create({
  app: {
    height: height
  },
  container1: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    marginVertical: 20,
  },
  spacer: {
    margin: 5,
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row'
  }
});
