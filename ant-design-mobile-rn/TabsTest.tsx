
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Tabs } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  return (
    <TestSuite name="TabsTest">
      <TestCase itShould="render a Tabs tabs" tags={['C_API']}>
        <Tabs tabs={tabs}></Tabs>
      </TestCase>
      <TestCase itShould="render a Tabs tabBarPosition='bottom'" tags={['C_API']}>
        <Tabs tabs={tabs} tabBarPosition='bottom'>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
      </TestCase>
      <TestCase itShould="render a Tabs renderTabBar" tags={['C_API']}>
        <RenderTabBarTest />
      </TestCase>
      <TestCase itShould="render a Tabs initialPage={1}" tags={['C_API']}>
        <Tabs tabs={tabs} initialPage={1}>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
      </TestCase>
      <TestCase itShould="render a Tabs page={2}" tags={['C_API']}>
        <Tabs tabs={tabs} page={2}>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
      </TestCase>
      <TestCase itShould="render a Tabs swipeable={false}" tags={['C_API']}>
        <Tabs tabs={tabs} swipeable={false}>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
      </TestCase>
      <TestCase itShould="render a Tabs useOnPan={true}" tags={['C_API']}>
        <Tabs tabs={tabs} useOnPan={true}>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
      </TestCase>
      <TestCase itShould="render a Tabs prerenderingSiblingsNumber={1}" tags={['C_API']}>
        <Tabs tabs={tabs} prerenderingSiblingsNumber={1}>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
      </TestCase>
      <TestCase itShould="render a Tabs animated={true}" tags={['C_API']}>
        <Tabs tabs={tabs} animated={true}>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
      </TestCase>
      <TestCase itShould="render a Tabs onChange()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Tabs tabs={tabs} onChange={() => { setState(true) }}>
            <View style={style}>
              <Text>Content of First Tab</Text>
            </View>
            <View style={style}>
              <Text>Content of Second Tab</Text>
            </View>
            <View style={style}>
              <Text>Content of Third Tab</Text>
            </View>
          </Tabs>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Tabs onTabClick()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Tabs tabs={tabs} onTabClick={() => { setState(true) }}>
            <View style={style}>
              <Text>Content of First Tab</Text>
            </View>
            <View style={style}>
              <Text>Content of Second Tab</Text>
            </View>
            <View style={style}>
              <Text>Content of Third Tab</Text>
            </View>
          </Tabs>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Tabs destroyInactiveTab={true}" tags={['C_API']}>
        <Tabs tabs={tabs} destroyInactiveTab={true}>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
      </TestCase>
      <TestCase itShould="render a Tabs distanceToChangeTab={0.5}" tags={['C_API']}>
        <Tabs tabs={tabs} distanceToChangeTab={0.5}>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
      </TestCase>
      <TestCase itShould="render a Tabs usePaged={false}" tags={['C_API']}>
        <Tabs tabs={tabs} usePaged={false}>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
      </TestCase>
      <TestCase itShould="render a Tabs tabBarUnderlineStyle={{backgroundColor:'pink'}}" tags={['C_API']}>
        <Tabs tabs={tabs} tabBarUnderlineStyle={{ backgroundColor: 'pink' }}>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
      </TestCase>
      <TestCase itShould="render a Tabs tabBarBackgroundColor='blue'" tags={['C_API']}>
        <Tabs tabs={tabs} tabBarBackgroundColor='blue'>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
      </TestCase>
      <TestCase itShould="render a Tabs tabBarActiveTextColor='red'" tags={['C_API']}>
        <Tabs tabs={tabs} tabBarActiveTextColor='red'>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
      </TestCase>
      <TestCase itShould="render a Tabs tabBarInactiveTextColor='green'" tags={['C_API']}>
        <Tabs tabs={tabs} tabBarInactiveTextColor='green'>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
      </TestCase>
      <TestCase itShould="render a Tabs tabBarTextStyle={{fontSize:20}}" tags={['C_API']}>
        <Tabs tabs={tabs} tabBarTextStyle={{ fontSize: 20 }}>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
      </TestCase>
      <TestCase itShould="render a Tabs renderTab" tags={['C_API']}>
        <TabsRenderTabTest />
      </TestCase>
      <TestCase itShould="render a Tabs renderUnderline={null}" tags={['C_API']}>
        <Tabs tabs={tabs} renderUnderline={() => <View></View>}>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
      </TestCase>
      <TestCase itShould="render a Tabs.DefaultTabBar" tags={['C_API']}>
        <CustomRenderTabsrContentTest />
      </TestCase>
    </TestSuite>
  );
};
const style = {
  alignItems: 'center',
  justifyContent: 'center',
  height: 150,
  backgroundColor: '#fff',
} as any
const tabs = [
  { title: 'First Tab' },
  { title: 'Second Tab' },
  { title: 'Third Tab' },
]

function RenderTabBarTest() {
  return (
    <View>
      <Tabs
        tabs={tabs}
        renderTabBar={(tabProps) => (
          <View
            style={{
              paddingHorizontal: 16,
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              height: 100,
              justifyContent: 'space-evenly',
            }}>
            {tabProps.tabs.map((tab, i) => (
              <TouchableOpacity
                activeOpacity={0.9}
                key={tab.key || i}
                style={{
                  padding: 6,
                }}
                onPress={() => {
                  const { goToTab, onTabClick } = tabProps
                  onTabClick && onTabClick(tabs[i], i)
                  goToTab && goToTab(i)
                }}>
                <Text
                  style={{
                    color: tabProps.activeTab === i ? 'green' : '#333333',
                  }}>
                  {tab.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}>
        <View style={style}>
          <Text>Content of First Tab</Text>
        </View>
        <View style={style}>
          <Text>Content of Second Tab</Text>
        </View>
        <View style={style}>
          <Text>Content of Third Tab</Text>
        </View>
      </Tabs>
    </View>
  )
}

function TabsRenderTabTest() {
  const tabs1 = [
    { title: 'Tab 1' },
    { title: 'Tab 2' },
    { title: 'Tab 3' },
  ];
  const CustomTabContent = ({ title }: any) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{title}</Text>
      </View>
    );
  };

  return (
    <Tabs
      tabs={tabs1}
      renderTab={(tab) => <CustomTabContent title={tab.title} />}
    />
  );
}

function CustomRenderTabsrContentTest() {
  const tabs2 = [
    { title: '1st Tab' },
    { title: '2nd Tab' },
    { title: '3rd Tab' },
    { title: '4th Tab' },
    { title: '5th Tab' },
    { title: '6th Tab' },
  ]
  const renderContent = (tab: any, index: any) => {
    const style = {
      paddingVertical: 40,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      with: '100%',
      height: 100,
      backgroundColor: '#ddd',
    } as any
    const content = [1, 2, 3, 4, 5, 6].map((i) => {
      return (
        <View key={`${index}_${i}`} style={style}>
          <Text>
            {tab.title} - {i}
          </Text>
        </View>
      )
    })
    return (
      <ScrollView key={index} style={{ backgroundColor: '#fff' }}>
        {content}
      </ScrollView>
    )
  }
  return (
    <View>
      <Tabs tabs={tabs2} initialPage={1} tabBarPosition="top">
        {tabs2.map((tab, index) => renderContent(tab, index))}
      </Tabs>
    </View>
  )
}
