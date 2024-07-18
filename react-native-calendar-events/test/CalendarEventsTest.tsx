import {TestSuite,Tester}from '@rnoh/testerino';
import * as React from 'react';
import {
   SafeAreaView,
   ScrollView,
   View,
   StatusBar,
   Alert
 } from "react-native";
import { TestCase } from '../components';
import  RNCalendarEvents  from "react-native-calendar-events";
import {CalendarType, EventType, ServiceType, RecurrenceFrequency} from "@react-native-oh-tpl/react-native-calendar-events/src/calendarType";

function RNCalendarEventsTest() {
   const calendarOptions = {
      title: 'test1',
      type: CalendarType.LOCAL,
      displayName: "testSaveCalendar"
    };
    const location = {
      location: "nanjin",
      longitude: 118,
      latitude: 31,
    }
    const eventService = {
      type: ServiceType.MEETING,
      uri: "",
      description: "testEventService",
    }
    const attendees = {
      name: "testAttendees",
      email: "testEmail",
    }
    const recurrenceRuleHarmony = {
      recurrenceFrequency: RecurrenceFrequency.WEEKLY,
      expire: 0,
    }
    const eventDetails = {
      id: 1,
      type: EventType.NORMAL,
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
    const fetchAllEventStartTime: string = (new Date().getTime() + 60 * 60 * 1000).toString()
    const fetchAllEventEndTime: string = (new Date().getTime() + 60 * 60 * 1000 * 15).toString()
   return (
       <TestSuite name="RNCalendarEvents">
           <TestCase.Logical
        itShould="RNCalendarEvents.requestPermissions"
        fn={({expect}:any)=>{
            RNCalendarEvents.requestPermissions().then((result) => {
               expect((result)).to.not.be.undefined;
            }).catch((error) => {
               expect((error)).to.not.be.undefined;
            });
        }}
           />
          <TestCase.Logical
        itShould="RNCalendarEvents.checkPermissions"
        fn={({expect}:any)=>{
         RNCalendarEvents.checkPermissions().then((result) => {
            expect((result)).to.not.be.undefined;
         }).catch((error) => {
            expect((error)).to.not.be.undefined;
         });
        }}
           />
           <TestCase.Logical
        itShould="RNCalendarEvents.findCalendars"
        fn={({expect}:any)=>{
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
            expect((result)).to.not.be.undefined;
            }).catch((error) => {
            });
        }}
       />
       <TestCase.Logical
    itShould="RNCalendarEvents.saveCalendar"
    fn={({expect}:any)=>{
       RNCalendarEvents.saveCalendar(calendarOptions).then(
        (result) => {
           Alert.alert('Save Calendar', result + "");
           expect((result)).to.not.be.undefined;
           expect(JSON.stringify(result)).to.be.eq('{"test1",CalendarType.Local,"testSaveCalendar"}');
         }).catch((error) =>{
            expect((error)).to.not.be.undefined;
         });
    }}
       />
       <TestCase.Logical
    itShould="RNCalendarEvents.removeCalendar"
    fn={({expect}:any)=>{
       RNCalendarEvents.removeCalendar("1").then(
        (result) => {
          Alert.alert('Remove Calendar', result + "");
          expect((result)).to.not.be.undefined;
        }).catch((error) =>{
           expect((error)).to.not.be.undefined;
        });
    }}
       />
       <TestCase.Logical
    itShould="RNCalendarEvents.findEventById"
    fn={({expect}:any)=>{
       RNCalendarEvents.findEventById("1").then(
                  (result) => {
                    Alert.alert('find Event', result + "");
                    expect((result)).to.not.be.undefined;
                  }).catch((error) =>{
                    expect((error)).to.not.be.undefined;
                 });
    }}
       />
       <TestCase.Logical
    itShould="RNCalendarEvents.fetchAllEvents"
    fn={({expect}:any)=>{
       RNCalendarEvents.fetchAllEvents(fetchAllEventStartTime, fetchAllEventEndTime).then(
        (result) => {
          Alert.alert('fetch all event', result + "");
          expect((result)).to.not.be.undefined;
        }).catch((error) =>{
           expect((error)).to.not.be.undefined;
        });
    }}
       />
       <TestCase.Logical
    itShould="RNCalendarEvents.saveEvent"
    fn={({expect}:any)=>{
       RNCalendarEvents.saveEvent("test23", eventDetails).then(
                  (result) => {
                    Alert.alert('save event', result + "");
                    expect((result)).to.not.be.undefined;
                  }).catch((error) => {
                    expect((error)).to.not.be.undefined;
                  });
    }}
       />
       <TestCase.Logical
    itShould="RNCalendarEvents.removeEvent"
    fn={({expect}:any)=>{
      RNCalendarEvents.removeEvent("9").then(
        (result) => {
          Alert.alert('Remove event', result + "");
          expect((result)).to.not.be.undefined;
        }).catch((error) => {
          expect((error)).to.not.be.undefined;
        });
    }}
       />
   </TestSuite>

);
}

function App(){
    return(
        <View>
        <StatusBar />
            <SafeAreaView style={{backgroundColor: '#222'}}>
                <Tester >
                  <ScrollView style={{width: '100%'}}>
                    <RNCalendarEventsTest/>
                  </ScrollView>
                </Tester>
            </SafeAreaView>
        </View>
    )
 }
 
 export default App;