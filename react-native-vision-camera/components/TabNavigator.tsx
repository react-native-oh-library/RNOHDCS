import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';

interface TabsProps {
  title: string;
  content: React.ReactNode;
}

interface InProps {
  tabs: TabsProps[];
}

export const  TabNavigator = ({tabs}: InProps) => {
  const [selectedTab, setSelectedTab] = useState(0); // 默认选中第一个Tab
  const renderTabs = () => {
    return tabs.map((tab, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.tab, index === selectedTab ? styles.activeTab : null]}
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

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    position:'absolute',
    width:'100%',
    zIndex:100
  },
  tab: {
    padding: 10,
  },
  activeTab: {
    backgroundColor: '#FF0034',
    borderRadius: 5,
  },
  tabText: {
    color: '#fff',
  },
  content: {
    // flex: 1,
    padding: 20,
    marginTop:20
  },
});
