import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { TestSuite, Tester } from '@rnoh/testerino';
import { TestCase } from '../components';

const HOME_IMAGE = [require('../assets/tab-navigator/home_unselected.svg'), require('../assets/tab-navigator/home_selected.svg')];
const PROFILE_IMAGE = [require('../assets/tab-navigator/profile_unselected.svg'), require('../assets/tab-navigator/profile_selected.svg')];

export function TabNavigatorTest() {
    return (
        <Tester>
            <TestSuite name="TabNavigator">
                <TestCase.Example itShould="Test sceneStyle and tabBarStyle prop of TabNavigator, set sceneStyle and tabBarStyle height 100">
                    <View style={styles.container}>
                        <TabNavigatorSceneAndTabBarStyleTest />
                    </View>
                </TestCase.Example>
                <TestCase.Example itShould="Test tabBarShadowStyle prop of TabNavigator,set height 10 and backgroundColor[#32CD32]">
                    <View style={styles.container}>
                        <TabNavigatorTabBarShadowStyleTest />
                    </View>
                </TestCase.Example>
                <TestCase.Example itShould="Test hidesTabTouch prop of TabNavigator, set hidesTabTouch true">
                    <View style={styles.container}>
                        <TabNavigatorHidesTabTouchTest />
                    </View>
                </TestCase.Example>
                <TestCase.Example itShould="Test title props of TabNavigator, Customize the titleStyle and selectedTitleStyle of the first tab. set titleStyle[#8E2323], selectedTitleStyle[#E3CF57]">
                    <View style={styles.container}>
                        <TabNavigatorTitlePropsTest />
                    </View>
                </TestCase.Example>
                <TestCase.Example itShould="Test icon props of TabNavigator, Customize the icon of a tab and the icon when selected.">
                    <View style={styles.container}>
                        <TabNavigatorIconPropsTest />
                    </View>
                </TestCase.Example>
                <TestCase.Example itShould="Test badgeText prop of TabNavigator, set badgeText 1">
                    <View style={styles.container}>
                        <TabNavigatorBadgeTextPropTest />
                    </View>
                </TestCase.Example>
                <TestCase.Example itShould="Test renderBadge prop of TabNavigator, add a Custom Text Component">
                    <View style={styles.container}>
                        <TabNavigatorBadgePropTest />
                    </View>
                </TestCase.Example>
                <TestCase.Example itShould="Test tabStyle prop of TabNavigator, set tabStyle backgroundColor[#E9C2A6]">
                    <View style={styles.container}>
                        <TabNavigatorTabStyleTest />
                    </View>
                </TestCase.Example>
                <TestCase.Example itShould="Test allowFontScaling prop of TabNavigator, set allowFontScaling true">
                    <View style={styles.container}>
                        <TabNavigatorFontScalingTest />
                    </View>
                </TestCase.Example>
                <TestCase.Example itShould="Test accessible prop of TabNavigator, set accessible false">
                    <View style={styles.container}>
                        <TabNavigatorAccessibleTest />
                    </View>
                </TestCase.Example>
                <TestCase.Example itShould="Test accessibilityLabel prop of TabNavigator, set accessibilityLabel[Custom AccessibilityLabel]">
                    <View style={styles.container}>
                        <TabNavigatorAccessibilityLabelTest />
                    </View>
                </TestCase.Example>
                <TestCase.Example itShould="hide the tab bar">
                    <View style={styles.container}>
                        <TabNavigatorWithNoTabTest />
                    </View>
                </TestCase.Example>
            </TestSuite>
        </Tester>
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
        <TabNavigator style={styles.tabContainer} tabBarStyle={{height: 60}}>
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
                allowFontScaling={true}
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
                renderIcon={() => <Image source={HOME_IMAGE[0]} style={styles.iconSize} />}
                renderSelectedIcon={() => <Image source={HOME_IMAGE[1]} style={styles.iconSize} />}
                accessible={false}
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
