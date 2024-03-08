import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import { Page, NavigationContainer } from "../../components";
import {PortalHost, PortalProvider} from '@gorhom/portal';
import RenderTabBarDemo from './RenderTabBarDemo';
import TabBarPositionDemo from './TabBarPositionDemo';
import OnChangeTabDemo from './OnChangeTabDemo';
import LockedDemo from './LockedDemo';
import InitialPageDemo from './InitialPageDemo';
import TabBarUnderlineStyleDemo from './TabBarUnderlineStyleDemo';
import TabBarBackgroundColorDemo from './TabBarBackgroundColorDemo';
import TabBarActiveTextColorDemo from './TabBarActiveTextColorDemo';
import TabBarInActiveTextColorDemo from './TabBarInActiveTextColorDemo';
import TabBarTextStyleDemo from './TabBarTextStyleDemo';
import ScrollWithoutAnimationDemo from './ScrollWithoutAnimationDemo';

function App() {
    return (
        <NavigationContainer>
            <PortalProvider>
                <Page name="Example: renderTabBar">
                    <RenderTabBarDemo />
                </Page>
                <Page name="Example: tabBarPosition">
                    <TabBarPositionDemo />
                </Page>
                <Page name="Example: onChangeTab">
                    <OnChangeTabDemo />
                </Page>
                <Page name="Example: lock">
                    <LockedDemo />
                </Page>
                <Page name="Example: initialPage">
                    <InitialPageDemo />
                </Page>
                <Page name="Example: tabBarUnderlineStyle">
                    <TabBarUnderlineStyleDemo />
                </Page>
                <Page name="Example: tabBarBackgroundColor">
                    <TabBarBackgroundColorDemo />
                </Page>
                <Page name="Example: tabBarActiveTextColor">
                    <TabBarActiveTextColorDemo />
                </Page>
                <Page name="Example: tabBarInActiveTextColor">
                    <TabBarInActiveTextColorDemo />
                </Page>
                <Page name="Example: tabBarTextStyle">
                    <TabBarTextStyleDemo />
                </Page>
                <Page name="Example: scrollWithoutAnimation">
                    <ScrollWithoutAnimationDemo />
                </Page>
                <Page name="Example: renderTabBar">
                    <RenderTabBarDemo />
                </Page>
                <Page name="Example: renderTabBar">
                    <RenderTabBarDemo />
                </Page>
            </PortalProvider>
        </NavigationContainer>
    );
}

export default App;