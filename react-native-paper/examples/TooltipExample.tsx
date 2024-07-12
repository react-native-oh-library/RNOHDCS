import * as React from 'react';
import { Platform, StyleSheet, View, Image, ScrollView } from 'react-native';

import {
  Avatar,
  Chip,
  IconButton,
  ToggleButton,
  Tooltip,
  Card,
} from 'react-native-paper';

const DURATION_MEDIUM = 1500;
const DURATION_LONG = 3000;

const formOfTransport = [
  { title: 'Car - default delays' },
  { title: 'Airplane - default delays' },
  { title: 'Taxi - long enter delay', enterTouchDelay: DURATION_MEDIUM },
  { title: 'Train - long enter delay', enterTouchDelay: DURATION_MEDIUM },
  { title: 'Ferry - long leave delay', leaveTouchDelay: DURATION_MEDIUM },
  { title: 'Bus - long leave delay', leaveTouchDelay: DURATION_MEDIUM },
  {
    title: 'Walk - long both delays',
    enterTouchDelay: DURATION_MEDIUM,
    leaveTouchDelay: DURATION_LONG,
  },
];

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

function TooltipDemo() { 
  const [textAlign, setTextAlign] = React.useState('bold');
  return (
    <Tester>
      <ScrollView>
      <TestSuite name='Tooltip' >
        <TestCase itShould='Icon Buttons'>
          <View style={styles.iconButtonContainer}>
              {formOfTransport.map((transport, index) => (
                <Tooltip
                  key={index}
                  title={transport.title}
                  enterTouchDelay={transport.enterTouchDelay}
                  leaveTouchDelay={transport.leaveTouchDelay}
                >
                  <IconButton
                    icon={transport.title.split(' ')[0].toLowerCase()}
                    size={24}
                    onPress={() => {}}
                  />
                </Tooltip>
              ))}
            </View>
        </TestCase>

        <TestCase itShould='Icon Buttons'>
          <ToggleButton.Row
              value={textAlign}
              style={styles.toggleButtonRow}
              onValueChange={setTextAlign}
            >
              <Tooltip title="Align left">
                <ToggleButton icon="format-align-left" value="left" />
              </Tooltip>
              <Tooltip title="Align center">
                <ToggleButton icon="format-align-center" value="center" />
              </Tooltip>
              <Tooltip title="Align right">
                <ToggleButton icon="format-align-right" value="right" disabled />
              </Tooltip>
            </ToggleButton.Row>
          </TestCase>

          <TestCase itShould='Avatar'>
            <View style={styles.avatarContainer}>
              <Tooltip title="Username">
                <Avatar.Text label="U" />
              </Tooltip>
            </View>
          </TestCase>

          <TestCase itShould='Chip'>
            <View style={styles.chipContainer}>
              <Tooltip title="Copied">
                <Chip
                  mode="outlined"
                  avatar={
                    <Image
                      source={require('../assets/images/avatar.png')}
                      accessibilityIgnoresInvertColors
                    />
                  }
                >
                  John Doe
                </Chip>
              </Tooltip>
            </View>
          </TestCase>


          <TestCase itShould='Card'>
            <View style={styles.chipContainer}>
            <Tooltip title="Cafeteria, 1st floor">
            <Card style={styles.cardContainer}>
              <Card.Title
                title="Lunch break"
                subtitle="1:00-2:00 PM"
                left={(props) => (
                  <Avatar.Icon {...props} icon="food-fork-drink" />
                )}
              />
            </Card>
            </Tooltip>
            </View>
          </TestCase>
     </TestSuite>
      </ScrollView>
    </Tester>
  )
}


export default TooltipDemo;

const styles = StyleSheet.create({
  avatarContainer: {
    marginHorizontal: 16,
    width: 64,
  },
  chipContainer: {
    marginHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  fabContainer: {
    margin: 16,
    right: 0,
    position: 'absolute',
    bottom: 0,
  },
  cardContainer: {
    margin: 16,
  },
  toggleButtonRow: {
    paddingHorizontal: 16,
  },
  iconButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});