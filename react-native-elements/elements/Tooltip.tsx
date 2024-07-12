import React from 'react';
import { Tooltip, Text, TooltipProps } from '@rneui/themed';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino'

const { height } = Dimensions.get('window');

type ToolTipComponentProps = {};

const TooltipComponent: React.FunctionComponent<ToolTipComponentProps> = () => {
  const [open1, setOpen1] = React.useState(false)
  const [open2, setOpen2] = React.useState(false)
  const [open3, setOpen3] = React.useState(false)
  const [open4, setOpen4] = React.useState(false)
  const [open5, setOpen5] = React.useState(false)
  const [open6, setOpen6] = React.useState(false)
  const [open7, setOpen7] = React.useState(false)
  const [open8, setOpen8] = React.useState(false)
  const toolProps = {};
  return (
    <Tester>
      <TestSuite name='Tooltip'>
      <TestCase itShould='Tooltip' tags={['C_API']}>
        <ScrollView>
          <View style={{ marginVertical: height / 8 }}>
            <View style={styles.view}>
              <Tooltip
                visible={open1}
                onOpen={() => {
                  setOpen1(true);
                }}
                onClose={() => {
                  setOpen1(false);
                }}
                {...(toolProps as TooltipProps)}
                popover={<Text>no caret!</Text>}
                withPointer={false}
              >
                <Text style={{ color: '#000' }}>without caret</Text>
              </Tooltip>
              <Tooltip
                visible={open2}
                onOpen={() => {
                  setOpen2(true);
                }}
                onClose={() => {
                  setOpen2(false);
                }}
                {...(toolProps as TooltipProps)}
                popover={<Text>Tooltip info goes here</Text>}
                width={200}
                backgroundColor='#397af8'
              >
                <Text style={{ color: '#000' }}>Press me</Text>
              </Tooltip>
            </View>
            <View style={styles.view}>
              <Tooltip
                visible={open3}
                onOpen={() => {
                  setOpen3(true);
                }}
                onClose={() => {
                  setOpen3(false);
                }}
                {...(toolProps as TooltipProps)}
                backgroundColor='#8F0CE8'
                popover={
                  <Text>Tooltip info goes here too. Find tooltip everywhere</Text>
                }
                containerStyle={{ width: 200, height: 60 }}
              >
                <Text style={{ color: '#000' }}>Press me</Text>
              </Tooltip>
              <Tooltip
                visible={open4}
                onOpen={() => {
                  setOpen4(true);
                }}
                onClose={() => {
                  setOpen4(false);
                }}
                {...(toolProps as TooltipProps)}
                containerStyle={{ width: 145, height: 130 }}
                popover={
                  <Text>
                    {
                      'Some big text full of important stuff for the super duper user that our design has been created for'
                    }
                  </Text>
                }
              >
                <Text style={{ color: '#000' }}>HUGE</Text>
              </Tooltip>
            </View>
            <View style={styles.view}>
              <Tooltip
                visible={open5}
                onOpen={() => {
                  setOpen5(true);
                }}
                onClose={() => {
                  setOpen5(false);
                }}
                {...(toolProps as TooltipProps)}
                width={200}
                backgroundColor='#4d86f7'
                popover={<Text>Tooltip info goes here</Text>}
              >
                <Text style={{ color: '#000' }}>More attention</Text>
              </Tooltip>
            </View>
            <View style={styles.view}>
              <Tooltip
                visible={open6}
                onOpen={() => {
                  setOpen6(true);
                }}
                onClose={() => {
                  setOpen6(false);
                }}
                {...(toolProps as TooltipProps)}
                width={200}
                backgroundColor='#6296f9'
                popover={<Text>Tooltip info goes here</Text>}
              >
                <Text style={{ color: '#000' }}>I'm different</Text>
              </Tooltip>
              <Tooltip
                visible={open7}
                onOpen={() => {
                  setOpen7(true);
                }}
                onClose={() => {
                  setOpen7(false);
                }}
                {...(toolProps as TooltipProps)}
                width={200}
                popover={<Text>Tooltip info goes here</Text>}
              >
                <Text style={{ color: '#000' }}>Press me</Text>
              </Tooltip>
            </View>
          </View>
        </ScrollView>
        </TestCase>
      </TestSuite>
    </Tester>
  );
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 50,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  }
});

export default TooltipComponent;
