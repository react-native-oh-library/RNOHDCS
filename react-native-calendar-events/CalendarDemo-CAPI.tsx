/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  Platform,
} from 'react-native';
import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
import RNCalendarEvents from 'react-native-calendar-events';

const sourceStruct = {
  /** The Account name */
  name: "testName",
  /** The Account type */
  type: "testTyoe",
}

//saveEvent
const calendarOptions = {
  title: 'test1',
  type: 'local',
  displayName: "testSaveCalendar"
};

//saveEvent
const location = {
  location: "nanjin",
  longitude: 118,
  latitude: 31,
}
const eventService = {
  type: 'Meeting',
  uri: "",
  description: "testEventService",
}
const attendees = {
  name: "testAttendees",
  email: "testEmail",
}
const recurrenceRuleHarmony = {
  recurrenceFrequency: 2,
  expire: 0,
}
const eventDetails = {
  id: 1,
  type: 0,
  title: 'testEvent',
  location: location,
  startTime: new Date().getTime() + 60 * 60 * 1000 * 3,
  endTime: new Date().getTime() + 60 * 60 * 1000 * 10,
  isAllDay: false,
  attendee: [attendees],
  timeZone: "beijing",
  reminderTime: [new Date().getTime()],
  recurrenceRule: recurrenceRuleHarmony,
  description: "test",
  service: eventService,
};
//fetchAllEvent
const fetchAllEventStartTime: string = (new Date().getTime() + 60 * 60 * 1000).toString()
const fetchAllEventEndTime: string = (new Date().getTime() + 60 * 60 * 1000 * 15).toString()
function CalendarDemo() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
          
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Read/Write Auth</Text>
              <Text style={styles.sectionDescription}>
                <Button
                  title="Request auth"
                  onPress={() => {
                    RNCalendarEvents.requestPermissions().then(
                      (result) => {
                        Alert.alert('Auth requested', result);
                      },
                      (result) => {
                        console.error(result);
                      },
                    );
                  }}
                />
                <Text>{'\n'}</Text>
                <Button
                  title="Check auth"
                  onPress={() => {
                    RNCalendarEvents.checkPermissions().then(
                      (result) => {
                        Alert.alert('Auth check', result);
                      },
                      (result) => {
                        console.error(result);
                      },
                    );
                  }}
                />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Calendars</Text>
              <Text style={styles.sectionDescription}>
                <Button
                  title="Find calendars"
                  onPress={() => {
                    RNCalendarEvents.findCalendars().then(
                      (result) => {
                        Alert.alert(
                          'Calendars',
                          result
                            .reduce((acc: string[], cal) => {
                              acc.push(cal.title);
                              return acc;
                            }, [])
                            .join('\n'),
                        );
                      },
                      (result) => {
                        console.error(result);
                      },
                    );
                  }}
                />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>other function</Text>
              <Text style={styles.sectionDescription}>
              <Button
                  title="saveCalendar"
                  onPress={() => {
                    RNCalendarEvents.saveCalendar(calendarOptions).then(
                      (result) => {
                        Alert.alert('Save Calendar', result + "");
                      },
                      (result) => {
                        console.error(result);
                      },
                    );
                  }}
                />
                <Button
                  title="removeCalendar"
                  onPress={() => {
                    RNCalendarEvents.findCalendars().then(
                      (result) => {
                        RNCalendarEvents.removeCalendar(result.length > 1 ? result[1].id : "1").then(
                          (result) => {
                            Alert.alert('Remove Calendar', result + "");
                          },
                          (result) => {
                            console.error(result);
                          },
                        );
                      },
                      (result) => {
                        console.error(result);
                      },
                    );
                  }}
                />

                <Button
                  title="findEventById"
                  onPress={() => {
                    RNCalendarEvents.fetchAllEvents(fetchAllEventStartTime, fetchAllEventEndTime).then(
                      (result) => {
                        RNCalendarEvents.findEventById(result.length > 0 ? result[0].id : "1").then(
                          (result) => {
                            Alert.alert('find Event', result + "");
                          },
                          (result) => {
                            console.error(result);
                          },
                        );
                      },
                      (result) => {
                        console.error(result);
                      },
                    );
                  }}
                />

                <Button
                  title="fetchAllEvents"
                  onPress={() => {
                    RNCalendarEvents.fetchAllEvents(fetchAllEventStartTime, fetchAllEventEndTime).then(
                      (result) => {
                        Alert.alert('fetch all event', result + "");
                      },
                      (result) => {
                        console.error(result);
                      },
                    );
                  }}
                />

                <Button
                  title="saveEvent"
                  onPress={() => {
                    RNCalendarEvents.saveEvent("test23", eventDetails).then(
                      (result) => {
                        Alert.alert('save event', result + "");
                      },
                      (result) => {
                        console.error(result);
                      },
                    );
                  }}
                />

                <Button
                  title="removeEvent"
                  onPress={() => {
                    RNCalendarEvents.fetchAllEvents(fetchAllEventStartTime, fetchAllEventEndTime).then(
                      (result) => {
                        RNCalendarEvents.removeEvent(result.length > 0 ? result[0].id : "1").then(
                          (result) => {
                            Alert.alert('Remove event', result + "");
                          },
                          (result) => {
                            console.error(result);
                          },
                        );
                      },
                      (result) => {
                        console.error(result);
                      },
                    );
                  }}
                />
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default CalendarDemo;