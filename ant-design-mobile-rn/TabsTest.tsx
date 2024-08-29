
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
      <TestCase itShould="render a Tabs useOnPan={true}, useOnPan={false}" tags={['C_API']}>
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
        <Tabs tabs={tabs} useOnPan={false}>
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
      <TestCase itShould="render a Tabs prerenderingSiblingsNumber={1}, prerenderingSiblingsNumber={2}" tags={['C_API']}>
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
          <View style={style}>
            <Text>Content of Fourth Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Five Tab</Text>
          </View>
        </Tabs>
        <Tabs tabs={tabs} prerenderingSiblingsNumber={2}>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Fourth Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Five Tab</Text>
          </View>
        </Tabs>
      </TestCase>
      <TestCase itShould="render a Tabs animated={true}, animated={false}" tags={['C_API']}>
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
        <Tabs tabs={tabs} animated={false}>
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
      <TestCase itShould="render a Tabs destroyInactiveTab={true}, destroyInactiveTab={false}" tags={['C_API']}>
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
        <Tabs tabs={tabs} destroyInactiveTab={false}>
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
      <TestCase itShould="render a Tabs distanceToChangeTab={1}, distanceToChangeTab={0.1}" tags={['C_API']}>
        <Tabs tabs={tabs} distanceToChangeTab={1}>
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
        <Tabs tabs={tabs} distanceToChangeTab={0.1}>
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
      <TestCase itShould="render a Tabs usePaged={false}, usePaged={true}" tags={['C_API']}>
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
        <Tabs tabs={tabs} usePaged={true}>
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
      <TestCase itShould="render a Tabs.DefaultTabBar tabs" tags={['C_API']}>
        <CustomRenderTabsrContentTest />
      </TestCase>
      <TestCase itShould="render a Tabs.DefaultTabBar activeTab Color='blue'" tags={['C_API']}>
        <CustomRenderTabsActiveTabContentTest />
      </TestCase>
      <TestCase itShould="render a Tabs.DefaultTabBar gotoTab='3rd Tab'" tags={['C_API']}>
        <CustomRenderTabsGotoTabContentTest />
      </TestCase>
      <TestCase itShould="render a Tabs.DefaultTabBar onTabClick()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
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
                        goToTab && goToTab(i);
                        setState(true);
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
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Tabs.DefaultTabBar page={1}" tags={['C_API']}>
        <View>
          <Tabs
            tabs={tabs}
            page={1}
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
                      goToTab && goToTab(i);
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
      </TestCase>
      <TestCase itShould="render a Tabs.DefaultTabBar renderTabBar = backgroundColor:'pink'" tags={['C_API']}>
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
                  backgroundColor: 'pink',
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
                      goToTab && goToTab(i);
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
      </TestCase>
      <TestCase itShould="render a Tabs.DefaultTabBar animated={false}" tags={['C_API']}>
        <View>
          <Tabs
            tabs={tabs}
            animated={false}
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
                      goToTab && goToTab(i);
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
    { title: '1st TabBar' },
    { title: '2nd TabBar' },
    { title: '3rd TabBar' },
    { title: '4th TabBar' }
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
    const content = [1, 2, 3, 4].map((i) => {
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

function CustomRenderTabsActiveTabContentTest() {
  const tabs2 = [
    { title: '1st Tab' },
    { title: '2nd Tab' },
    { title: '3rd Tab' },
    { title: '4th Tab' },
  ]
  const renderContent = (tab: any, index: any) => {
    const style = {
      paddingVertical: 40,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      width: '100%',
      height: 100,
      backgroundColor: '#ddd',
    } as any
    const content = [1, 2, 3, 4].map((i) => {
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
  const CustomTabBar = (props: any) => {
    const { tabs, activeTab } = props;

    return (
      <View style={styles.tabBarContainer}>
        {tabs.map((tab: any, i: any) => (
          <View key={i} style={styles.tab}>
            <Text
              style={[
                styles.tabText,
                activeTab === i && styles.activeTabText,
              ]}
            >
              {tab.title}
            </Text>
          </View>
        ))}
      </View>
    );
  };
  return (
    <View>
      <Tabs tabs={tabs2} initialPage={1} renderTabBar={(props) => <CustomTabBar {...props} />}>
        {tabs2.map((tab, index) => renderContent(tab, index))}
      </Tabs>
    </View>
  )
}

function CustomRenderTabsGotoTabContentTest() {
  const tabs2 = [
    { title: '1st Tab' },
    { title: '2nd Tab' },
    { title: '3rd Tab' },
  ]
  const renderContent = (tab: any, index: any) => {
    const style = {
      paddingVertical: 40,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      width: '100%',
      height: 100,
      backgroundColor: '#ddd',
    } as any
    const content = [1, 2, 3].map((i) => {
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
  const CustomTabBar = (props: any) => {
    const { tabs, goToTab, activeTab } = props;
    return (
      <View style={styles.tabBarContainer}>
        {tabs.map((tab: any, i: any) => (
          <View key={i} style={styles.tab}>
            <Text
              style={[
                styles.tabText,
                activeTab === i && styles.activeTabText,
              ]}
              onPress={() => goToTab(2)}
            >
              {tab.title}
            </Text>
          </View>
        ))}
      </View>
    );
  };
  return (
    <View>
      <Tabs tabs={tabs2} initialPage={0} renderTabBar={(props) => <CustomTabBar {...props} />}>
        {tabs2.map((tab, index) => renderContent(tab, index))}
      </Tabs>
    </View>
  )
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
  },
  tab: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    color: 'black',
  },
  activeTabText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});