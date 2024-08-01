import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';

const HOME_IMAGE = [require('../assets/tab-navigator/home_unselected.svg'), require('../assets/tab-navigator/home_selected.svg')];
const PROFILE_IMAGE = [require('../assets/tab-navigator/profile_unselected.svg'), require('../assets/tab-navigator/profile_selected.svg')];

export function TabNavigatorTest() {
    return (
        <View style={{ flex: 1, paddingVertical: 48 }}>
            <Tester>
                <ScrollView>
                    <TestSuite name="TabNavigator">
                        <TestCase itShould="Test sceneStyle and tabBarStyle prop of TabNavigator, set sceneStyle and tabBarStyle height 100">
                            <View style={styles.container}>
                                <TabNavigatorSceneAndTabBarStyleTest />
                            </View>
                        </TestCase>
                        <TestCase itShould="Test sceneStyle and tabBarStyle prop of TabNavigator, set sceneStyle height 150 and set tabBarStyle height 50">
                            <View style={styles.container}>
                                <TabNavigatorSceneAndTabBarStyle1Test />
                            </View>
                        </TestCase>
                        <TestCase itShould="Test tabBarShadowStyle prop of TabNavigator,set height 10 and backgroundColor[#32CD32]">
                            <View style={styles.container}>
                                <TabNavigatorTabBarShadowStyleTest />
                            </View>
                        </TestCase>
                        <TestCase itShould="Test tabBarShadowStyle prop of TabNavigator,set height 5 and backgroundColor[#FFE4C4]">
                            <View style={styles.container}>
                                <TabNavigatorTabBarShadowStyle1Test />
                            </View>
                        </TestCase>
                        <TestCase itShould="Test hidesTabTouch prop of TabNavigator, set hidesTabTouch true, no transparent effect when touch Tab">
                            <View style={styles.container}>
                                <TabNavigatorHidesTabTouchTest />
                            </View>
                        </TestCase>
                        <TestCase itShould="Test title props and selected prop of TabNavigator, Customize the titleStyle and selectedTitleStyle, set titleStyle[#8E2323], selectedTitleStyle[#E3CF57] of the first tab. When the first tab is selected, the color of the title changes to the selectedTitleStyle color.">
                            <View style={styles.container}>
                                <TabNavigatorTitlePropsTest />
                            </View>
                        </TestCase>
                        <TestCase itShould="Test icon props of TabNavigator, Customize the icon of a tab and the icon when selected.">
                            <View style={styles.container}>
                                <TabNavigatorIconPropsTest />
                            </View>
                        </TestCase>
                        <TestCase itShould="Test badgeText prop of TabNavigator, set badgeText 1">
                            <View style={styles.container}>
                                <TabNavigatorBadgeTextPropTest />
                            </View>
                        </TestCase>
                        <TestCase itShould="Test renderBadge prop of TabNavigator, add a Custom Text Component">
                            <View style={styles.container}>
                                <TabNavigatorBadgePropTest />
                            </View>
                        </TestCase>
                        <TestCase itShould="Test tabStyle prop of TabNavigator, set tabStyle backgroundColor[#E9C2A6]">
                            <View style={styles.container}>
                                <TabNavigatorTabStyleTest />
                            </View>
                        </TestCase>
                        <TestCase itShould="Test tabStyle prop of TabNavigator, set tabStyle backgroundColor[#FFFACD]">
                            <View style={styles.container}>
                                <TabNavigatorTabStyle1Test />
                            </View>
                        </TestCase>
                        <TestCase itShould="Test allowFontScaling prop of TabNavigator, set first tab allowFontScaling true, font size will change with system settings">
                            <View style={styles.container}>
                                <TabNavigatorFontScalingTest />
                            </View>
                        </TestCase>
                        <TestCase itShould="Test accessible prop of TabNavigator, set first tab accessible false, the barrier-free function cannot obtain the tab component.">
                            <View style={styles.container}>
                                <TabNavigatorAccessibleTest />
                            </View>
                        </TestCase>
                        <TestCase itShould="Test accessibilityLabel prop of TabNavigator, set accessibilityLabel[Custom AccessibilityLabel]">
                            <View style={styles.container}>
                                <TabNavigatorAccessibilityLabelTest />
                            </View>
                        </TestCase>
                        <TestCase itShould="hide the tab bar">
                            <View style={styles.container}>
                                <TabNavigatorWithNoTabTest />
                            </View>
                        </TestCase>
                    </TestSuite>
                </ScrollView>
            </Tester>
        </View>
    );
}

function Home() {
    return (
        <View style={styles.tabContainer}>
            <Text style={styles.welcome}>
                Home
            </Text>
        </View>
    );
}

function Profile() {
    return (
        <View style={styles.tabContainer}>
            <Text style={styles.welcome}>
                Profile
            </Text>
        </View>
    );
}

function TabNavigatorSceneAndTabBarStyleTest() {
    const [selectedTab, setSelectedTab] = useState('home');
    let sceneStyle = {
        height: 100,
        width: '100%',
    }
    let tabBarStyle = {
        height: 100,
        width: '100%',
    }
    return (
        <TabNavigator
            style={styles.tabContainer}
            sceneStyle={sceneStyle}
            tabBarStyle={tabBarStyle}>
            <TabNavigator.Item
                selected={selectedTab === 'home'}
                title="Home"
                onPress={() => setSelectedTab('home')}>
                <Home />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={selectedTab === 'profile'}
                title="Profile"
                onPress={() => setSelectedTab('profile')}>
                <Profile />
            </TabNavigator.Item>
        </TabNavigator>
    );
}

function TabNavigatorSceneAndTabBarStyle1Test() {
    const [selectedTab, setSelectedTab] = useState('home');
    let sceneStyle = {
        height: 150,
        width: '100%',
    }
    let tabBarStyle = {
        height: 50,
        width: '100%',
    }
    return (
        <TabNavigator
            style={styles.tabContainer}
            sceneStyle={sceneStyle}
            tabBarStyle={tabBarStyle}>
            <TabNavigator.Item
                selected={selectedTab === 'home'}
                title="Home"
                onPress={() => setSelectedTab('home')}>
                <Home />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={selectedTab === 'profile'}
                title="Profile"
                onPress={() => setSelectedTab('profile')}>
                <Profile />
            </TabNavigator.Item>
        </TabNavigator>
    );
}

function TabNavigatorTabBarShadowStyleTest() {
    const [selectedTab, setSelectedTab] = useState('home');
    return (
        <TabNavigator
            style={styles.tabContainer}
            tabBarShadowStyle={{ backgroundColor: '#32CD32', height: 10 }}>
            <TabNavigator.Item
                selected={selectedTab === 'home'}
                title="Home"
                onPress={() => setSelectedTab('home')}>
                <Home />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={selectedTab === 'profile'}
                title="Profile"
                onPress={() => setSelectedTab('profile')}>
                <Profile />
            </TabNavigator.Item>
        </TabNavigator>
    );
}

function TabNavigatorTabBarShadowStyle1Test() {
    const [selectedTab, setSelectedTab] = useState('home');
    return (
        <TabNavigator
            style={styles.tabContainer}
            tabBarShadowStyle={{ backgroundColor: '#FFE4C4', height: 5 }}>
            <TabNavigator.Item
                selected={selectedTab === 'home'}
                title="Home"
                onPress={() => setSelectedTab('home')}>
                <Home />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={selectedTab === 'profile'}
                title="Profile"
                onPress={() => setSelectedTab('profile')}>
                <Profile />
            </TabNavigator.Item>
        </TabNavigator>
    );
}

function TabNavigatorHidesTabTouchTest() {
    const [selectedTab, setSelectedTab] = useState('home');
    return (
        <TabNavigator
            style={styles.tabContainer}
            hidesTabTouch={true}>
            <TabNavigator.Item
                selected={selectedTab === 'home'}
                title="Home"
                onPress={() => setSelectedTab('home')}>
                <Home />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={selectedTab === 'profile'}
                title="Profile"
                onPress={() => setSelectedTab('profile')}>
                <Profile />
            </TabNavigator.Item>
        </TabNavigator>
    );
}

function TabNavigatorTitlePropsTest() {
    const [selectedTab, setSelectedTab] = useState('home');
    return (
        <TabNavigator style={styles.tabContainer}>
            <TabNavigator.Item
                selected={selectedTab === 'home'}
                title="Home"
                titleStyle={{ color: "#8E2323" }}
                selectedTitleStyle={{ color: "#E3CF57" }}
                onPress={() => setSelectedTab('home')}>
                <Home />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={selectedTab === 'profile'}
                title="Profile"
                onPress={() => setSelectedTab('profile')}>
                <Profile />
            </TabNavigator.Item>
        </TabNavigator>
    );
}

function TabNavigatorIconPropsTest() {
    const [selectedTab, setSelectedTab] = useState('home');
    return (
        <TabNavigator style={styles.tabContainer}>
            <TabNavigator.Item
                selected={selectedTab === 'home'}
                title="Home"
                selectedTitleStyle={{ color: "#3496f0" }}
                renderIcon={() => <Image source={HOME_IMAGE[0]} style={styles.iconSize} />}
                renderSelectedIcon={() => <Image source={HOME_IMAGE[1]} style={styles.iconSize} />}
                onPress={() => setSelectedTab('home')}>
                <Home />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={selectedTab === 'profile'}
                title="Profile"
                selectedTitleStyle={{ color: "#3496f0" }}
                renderIcon={() => <Image source={PROFILE_IMAGE[0]} style={styles.iconSize} />}
                renderSelectedIcon={() => <Image source={PROFILE_IMAGE[1]} style={styles.iconSize} />}
                onPress={() => setSelectedTab('profile')}>
                <Profile />
            </TabNavigator.Item>
        </TabNavigator>
    );
}

function TabNavigatorBadgeTextPropTest() {
    const [selectedTab, setSelectedTab] = useState('home');
    return (
        <TabNavigator style={styles.tabContainer}>
            <TabNavigator.Item
                selected={selectedTab === 'home'}
                title="Home"
                selectedTitleStyle={{ color: "#3496f0" }}
                renderIcon={() => <Image source={HOME_IMAGE[0]} style={styles.iconSize} />}
                renderSelectedIcon={() => <Image source={HOME_IMAGE[1]} style={styles.iconSize} />}
                badgeText="1"
                onPress={() => setSelectedTab('home')}>
                <Home />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={selectedTab === 'profile'}
                title="Profile"
                selectedTitleStyle={{ color: "#3496f0" }}
                renderIcon={() => <Image source={PROFILE_IMAGE[0]} style={styles.iconSize} />}
                renderSelectedIcon={() => <Image source={PROFILE_IMAGE[1]} style={styles.iconSize} />}
                onPress={() => setSelectedTab('profile')}>
                <Profile />
            </TabNavigator.Item>
        </TabNavigator>
    );
}

function TabNavigatorBadgePropTest() {
    const [selectedTab, setSelectedTab] = useState('home');
    return (
        <TabNavigator style={styles.tabContainer}>
            <TabNavigator.Item
                selected={selectedTab === 'home'}
                title="Home"
                selectedTitleStyle={{ color: "#3496f0" }}
                renderIcon={() => <Image source={HOME_IMAGE[0]} style={styles.iconSize} />}
                renderSelectedIcon={() => <Image source={HOME_IMAGE[1]} style={styles.iconSize} />}
                renderBadge={() => <Text style={styles.customBadge}>2</Text>}
                onPress={() => setSelectedTab('home')}>
                <Home />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={selectedTab === 'profile'}
                title="Profile"
                selectedTitleStyle={{ color: "#3496f0" }}
                renderIcon={() => <Image source={PROFILE_IMAGE[0]} style={styles.iconSize} />}
                renderSelectedIcon={() => <Image source={PROFILE_IMAGE[1]} style={styles.iconSize} />}
                onPress={() => setSelectedTab('profile')}>
                <Profile />
            </TabNavigator.Item>
        </TabNavigator>
    );
}

function TabNavigatorTabStyleTest() {
    const [selectedTab, setSelectedTab] = useState('home');
    return (
        <TabNavigator style={styles.tabContainer}>
            <TabNavigator.Item
                selected={selectedTab === 'home'}
                title="Home"
                selectedTitleStyle={{ color: "#3496f0" }}
                renderIcon={() => <Image source={HOME_IMAGE[0]} style={styles.iconSize} />}
                renderSelectedIcon={() => <Image source={HOME_IMAGE[1]} style={styles.iconSize} />}
                tabStyle={{ backgroundColor: "#E9C2A6" }}
                onPress={() => setSelectedTab('home')}>
                <Home />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={selectedTab === 'profile'}
                title="Profile"
                selectedTitleStyle={{ color: "#3496f0" }}
                renderIcon={() => <Image source={PROFILE_IMAGE[0]} style={styles.iconSize} />}
                renderSelectedIcon={() => <Image source={PROFILE_IMAGE[1]} style={styles.iconSize} />}
                onPress={() => setSelectedTab('profile')}>
                <Profile />
            </TabNavigator.Item>
        </TabNavigator>
    );
}

function TabNavigatorTabStyle1Test() {
    const [selectedTab, setSelectedTab] = useState('home');
    return (
        <TabNavigator style={styles.tabContainer}>
            <TabNavigator.Item
                selected={selectedTab === 'home'}
                title="Home"
                selectedTitleStyle={{ color: "#3496f0" }}
                renderIcon={() => <Image source={HOME_IMAGE[0]} style={styles.iconSize} />}
                renderSelectedIcon={() => <Image source={HOME_IMAGE[1]} style={styles.iconSize} />}
                tabStyle={{ backgroundColor: "#FFFACD" }}
                onPress={() => setSelectedTab('home')}>
                <Home />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={selectedTab === 'profile'}
                title="Profile"
                selectedTitleStyle={{ color: "#3496f0" }}
                renderIcon={() => <Image source={PROFILE_IMAGE[0]} style={styles.iconSize} />}
                renderSelectedIcon={() => <Image source={PROFILE_IMAGE[1]} style={styles.iconSize} />}
                onPress={() => setSelectedTab('profile')}>
                <Profile />
            </TabNavigator.Item>
        </TabNavigator>
    );
}

function TabNavigatorFontScalingTest() {
    const [selectedTab, setSelectedTab] = useState('home');
    return (
        <TabNavigator style={styles.tabContainer}>
            <TabNavigator.Item
                selected={selectedTab === 'home'}
                title="Home"
                selectedTitleStyle={{ color: "#3496f0" }}
                renderIcon={() => <Image source={HOME_IMAGE[0]} style={styles.iconSize} />}
                renderSelectedIcon={() => <Image source={HOME_IMAGE[1]} style={styles.iconSize} />}
                allowFontScaling={false}
                onPress={() => setSelectedTab('home')}>
                <Home />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={selectedTab === 'profile'}
                title="Profile"
                selectedTitleStyle={{ color: "#3496f0" }}
                renderIcon={() => <Image source={PROFILE_IMAGE[0]} style={styles.iconSize} />}
                renderSelectedIcon={() => <Image source={PROFILE_IMAGE[1]} style={styles.iconSize} />}
                onPress={() => setSelectedTab('profile')}>
                <Profile />
            </TabNavigator.Item>
        </TabNavigator>
    );
}

function TabNavigatorAccessibleTest() {
    const [selectedTab, setSelectedTab] = useState('home');
    return (
        <TabNavigator style={styles.tabContainer}>
            <TabNavigator.Item
                selected={selectedTab === 'home'}
                title="Home"
                selectedTitleStyle={{ color: "#3496f0" }}
                accessible={false}
                onPress={() => setSelectedTab('home')}>
                <Home />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={selectedTab === 'profile'}
                title="Profile"
                selectedTitleStyle={{ color: "#3496f0" }}
                onPress={() => setSelectedTab('profile')}>
                <Profile />
            </TabNavigator.Item>
        </TabNavigator>
    );
}

function TabNavigatorAccessibilityLabelTest() {
    const [selectedTab, setSelectedTab] = useState('home');
    return (
        <TabNavigator style={styles.tabContainer}>
            <TabNavigator.Item
                selected={selectedTab === 'home'}
                title="Home"
                selectedTitleStyle={{ color: "#3496f0" }}
                renderIcon={() => <Image source={HOME_IMAGE[0]} style={styles.iconSize} />}
                renderSelectedIcon={() => <Image source={HOME_IMAGE[1]} style={styles.iconSize} />}
                accessibilityLabel="Custom AccessibilityLabel"
                onPress={() => setSelectedTab('home')}>
                <Home />
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={selectedTab === 'profile'}
                title="Profile"
                selectedTitleStyle={{ color: "#3496f0" }}
                renderIcon={() => <Image source={PROFILE_IMAGE[0]} style={styles.iconSize} />}
                renderSelectedIcon={() => <Image source={PROFILE_IMAGE[1]} style={styles.iconSize} />}
                accessible={false}
                accessibilityLabel="Custom ProfileLabel accessible false"
                onPress={() => setSelectedTab('profile')}>
                <Profile />
            </TabNavigator.Item>
        </TabNavigator>
    );
}

function TabNavigatorWithNoTabTest() {
    let tabBarHeight = 0;
    return (
        <TabNavigator
            tabBarStyle={{ height: tabBarHeight, overflow: 'hidden' }}
            sceneStyle={{ paddingBottom: tabBarHeight }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '100%',
    },
    tabContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    iconSize: {
        width: 22,
        height: 22
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    customBadge: {
        textAlign: 'center',
        color: 'rgb(0, 122, 255)',
        marginBottom: 5,
        marginRight: 5
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
