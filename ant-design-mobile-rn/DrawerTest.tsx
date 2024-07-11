import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Drawer } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default () => {
  return (
    <TestSuite name="DrawerAntTest" >
      <TestCase itShould="render a Drawer Test" tags={['C_API']} >
        <DrawerAntExample />
      </TestCase>
    </TestSuite>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

class DrawerAntExample extends React.Component<any, any> {
  drawer: any

  onOpenChange = (isOpen: any) => {
  }

  render() {
    const itemArr = Array.apply(null, Array(20))
      .map(function (_: any, i: any) {
        return i
      })
      .map((_i: any, index: any) => {
        if (index === 0) {
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>Categories - {index}</Text>
              <Button
                type="primary"
                size="small"
                onPress={() => this.drawer.closeDrawer()}>
                close drawer
              </Button>
            </View>
          )
        }
        return (
          <Text>Categories - {index}</Text>
        )
      })

    const sidebar = (
      <ScrollView style={[styles.container as any]}>
        <View>{itemArr}</View>
      </ScrollView>
    )

    return (
      <GestureHandlerRootView>
        <Drawer
          sidebar={sidebar}
          position="left"
          open={false}
          drawerRef={(el: any) => (this.drawer = el)}
          onOpenChange={this.onOpenChange}
          drawerBackgroundColor="#ccc">
          <View style={{ flex: 1, marginTop: 114, padding: 8 }}>
            <Button onPress={() => this.drawer && this.drawer.openDrawer()}>
              Open drawer
            </Button>
          </View>
        </Drawer>
      </GestureHandlerRootView>
    )
  }
}
