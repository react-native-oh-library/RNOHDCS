import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {DropdownTest} from './DropdownTest';
import {MultiSelectTest} from './MultiSelectTest';
import {SelectCountryTest} from './SelectCountryTest';

interface TabsProps {
  title: string;
  content: React.ReactNode;
}

interface InProps {
  tabs: TabsProps[];
}

const TabNavigator = ({tabs}: InProps) => {
  const [selectedTab, setSelectedTab] = useState(0); // 默认选中第一个Tab
  const renderTabs = () => {
    return tabs.map((tab, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.tab,
          index === selectedTab ? styles.activeTab : null,
        ]}
        onPress={() => setSelectedTab(index)}>
        <Text style={styles.tabText}>{tab.title}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>{renderTabs()}</View>
      <View style={styles.content}>{tabs[selectedTab]?.content}</View>
    </View>
  );
};

const tabs = [
  {title: 'tab1', content: <DropdownTest />},
  {title: 'tab2', content: <MultiSelectTest />},
  {title: 'tab3', content: <SelectCountryTest />},
];

export const DropdownTestExample = () => {
  return (
    <>
      <TabNavigator tabs={tabs} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  tab: {
    padding: 10,
  },
  activeTab: {
    backgroundColor: '#FF21365A',
    borderRadius: 5,
  },
  tabText: {
    color: 'black',
  },
  content: {
    flex: 1,
    padding: 20,
  },
});
