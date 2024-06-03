import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Alert, Button } from 'react-native'
import ScrollableTabView from '@itenl/react-native-scrollable-tabview';

export default function ScrollTabsDemo() {

  let [scrollDate, setScrollDate] = useState(Date.now())
  const myRef = useRef<any>(null);

  //  console.error('test-yxc')

  return (
    <View style={{ flex: 1 }}>
      <ScrollableTabView
        ref={myRef}
        stacks={[
          {
            screen: ({ onRefresh,layoutHeight }: any) => {
              onRefresh((toggled: (arg0: boolean) => void) => {
                setScrollDate(Date.now())
              });
              console.log(layoutHeight)
              return (<View style={{ flex: 1, backgroundColor: 'blue', height: 2000 }}><Text>one{scrollDate}</Text></View>)
            },
            // tabLabel:'00'
            // tabLabelRender: (tabLabel: any) => {
            //   return `--- ${tabLabel} ---`;
            // },
            // badge: [<Text>one</Text>],
            // toProps: {
            //   xx: 123,
            // },
          }, {
            screen: () => <View style={{ flex: 1, backgroundColor: 'grey', height: 2000 }}><Text>twotwo{scrollDate}</Text></View>,
            // tabLabel: 'twoTab',
            // tabLabelRender: (tabLabel: any) => {
            //   return `--- ${tabLabel} ---`;
            // },
            // badge: [<Text>two</Text>],
            // toProps: {
            //   xx: 123,
            // },
          },
          {
            screen: () => {
              return (
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "green",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 2000
                  }}
                >
                  <Text>
                    {Date.now()} {scrollDate}
                  </Text>
                </View>
              );
            },
            // tabLabel: "TestFunctionComponent",
          },{
            sticky:(screenContext) => {
              console.log(screenContext)
              return (
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "green",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 2000
                  }}
                >
                  <Text>
                    {Date.now()} {scrollDate}
                  </Text>
                </View>
              );
            }
          }
        ]}
        mappingProps={{ layoutHeight: 30 }}
        badges={[
          <View>
            <Text>Hello,</Text>
          </View>,
          <View>
            <Text>React</Text>
          </View>,
          <View>
            <Text>Native!</Text>
          </View>
        ]}
        tabsStyle={{ backgroundColor: 'yellow', }}
        tabWrapStyle={{ zIndex: 1 }}
        tabInnerStyle={{ paddingLeft: 5 }}
        tabActiveOpacity={0}
        tabStyle={{ backgroundColor: 'orange', width: 100 }}
        textStyle={{ textAlign: 'center', color: 'green' }}
        textActiveStyle={{ fontSize: 30 }}
        tabUnderlineStyle={{ backgroundcolor: 'red', height: 10 }}
        firstIndex={0}
        syncToSticky={true}
        onEndReachedThreshold={0.4}
        // onBeforeRefresh={(next, toggled) => {
        //   toggled();
        //   next();
        // }}
        // onBeforeEndReached={(next: () => void) => {
        //   next();
        // }}
        onTabviewChanged={(index: any, tabLabel: any, isFirst: any) => {
          setScrollDate(index + tabLabel + isFirst)
        }}
        screenScrollThrottle={100}
        header={() => {
          return <View style={{ backgroundColor: 'pink', height: 80 }}><Text>header</Text></View>;
        }}
        stickyHeader={() => {
          return <View style={{ backgroundColor: 'red', height: 80 }}><Text>stickyHeader</Text></View>;
        }}
        // oneTabHidden={true}
        // enableCachePage={false}
        // carouselProps={{activeSlideOffset:10,activeSlideAlignment:'end',callbackOffsetMargin:10}}
        // sectionListProps={{initialNumToRender:20,inverted:true}}
        toHeaderOnTab={true}
        toTabsOnTab={false}
        tabsShown={true}
        fixedTabs={false}
        fixedHeader={false}
        useScroll={true}
        useScrollStyle={{ paddingLeft: 10 }}
        fillScreen={false}
        title={<View><Text>动画标题</Text></View>}
        titleArgs={{
          opacity: 0.5, // Binds directly
          inputRange: [0, 1],
          outputRange: [0, 100],
        }}
        // onScroll={function () {
        //   return setScrollDate(Date.now())
        // }}
        // onScroll2Horizontal={function () {
        //   return setScrollDate(Date.now())
        // }}
        tabsEnableAnimated={true}
        tabsEnableAnimatedUnderlineWidth={30}
      // errorToThrow={true}
      ></ScrollableTabView>

      <View style={{ flexDirection: 'row' }}>
        <Button title='getCurrentRef' onPress={() => {
          console.log(myRef.current.getCurrentRef())
        }}></Button>
        <Button title='toTabView' onPress={() => {
          myRef.current.toTabView(1);
        }}></Button>
        <Button title='scrollTo' onPress={() => {
          myRef.current.scrollTo(0);
        }}></Button>
        <Button title='clearStacks' onPress={() => {
          myRef.current.clearStacks(() => { });
        }}></Button>
      </View>

    </View>
  );
}
