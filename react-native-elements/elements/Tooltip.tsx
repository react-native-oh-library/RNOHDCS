import React from 'react';
import { Tooltip, Text, TooltipProps } from '@rneui/themed';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';

const { height } = Dimensions.get('window');

type ToolTipComponentProps = {};

const TooltipComponent: React.FunctionComponent<ToolTipComponentProps> = () => {
  const toolProps = {};
  return (
    <>
      <Text style={styles.titleStyle}>Tooltip</Text>
      <ScrollView>
        <View style={{ marginVertical: height / 8 }}>
          <View style={styles.view}>
            <Tooltip
              {...(toolProps as TooltipProps)}
              popover={<Text>no caret!</Text>}
              withPointer={false}
            >
              <Text>without caret</Text>
            </Tooltip>
            <Tooltip
              {...(toolProps as TooltipProps)}
              popover={<Text>Tooltip info goes here</Text>}
              width={200}
              backgroundColor='#397af8'
            >
              <Text>Press me</Text>
            </Tooltip>
          </View>
          <View style={styles.view}>
            <Tooltip
              {...(toolProps as TooltipProps)}
              backgroundColor='#8F0CE8'
              popover={
                <Text>Tooltip info goes here too. Find tooltip everywhere</Text>
              }
              containerStyle={{ width: 200, height: 60 }}
            >
              <Text>Press me</Text>
            </Tooltip>
            <Tooltip
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
              <Text>HUGE</Text>
            </Tooltip>
          </View>
          <View style={styles.view}>
            <Tooltip
              {...(toolProps as TooltipProps)}
              width={200}
              backgroundColor='#4d86f7'
              popover={<Text>Tooltip info goes here</Text>}
            >
              <Text>More attention</Text>
            </Tooltip>
          </View>
          <View style={styles.view}>
            <Tooltip
              {...(toolProps as TooltipProps)}
              width={200}
              backgroundColor='#6296f9'
              popover={<Text>Tooltip info goes here</Text>}
            >
              <Text>I'm different</Text>
            </Tooltip>
            <Tooltip
              {...(toolProps as TooltipProps)}
              width={200}
              popover={<Text>Tooltip info goes here</Text>}
            >
              <Text>Press me</Text>
            </Tooltip>
          </View>
        </View>
      </ScrollView>
    </>
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
