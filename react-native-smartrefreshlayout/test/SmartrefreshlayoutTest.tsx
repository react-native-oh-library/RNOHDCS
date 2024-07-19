import React from 'react';
import { ScrollView, View } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import SmartRefreshLayoutAnyHeader from '../capi-demo/SmartRefreshLayoutAnyHeader';
import SmartRefreshLayoutAutoRefreshExample from '../capi-demo/SmartRefreshLayoutAutoRefreshExample';
import SmartRefreshLayoutClassiscHeader from '../capi-demo/SmartRefreshLayoutClassiscHeader';
import SmartRefreshLayoutDefaultHeader from '../capi-demo/SmartRefreshLayoutDefaultHeader'
import SmartRefreshLayoutMaterialHeader from '../capi-demo/SmartRefreshLayoutMaterialHeader'
import SmartRefreshLayoutStoreHouseHeader from '../capi-demo/SmartRefreshLayoutStoreHouseHeader'

export const SmartRefreshTest = () => {
    return (
        <Tester style={{ flex: 1, marginTop: 30 }}>
            <ScrollView>
                <TestSuite name="Reanimated">
                    <TestCase
                        tags={['dev']}
                        itShould="SmartRefreshLayoutAnyHeader">
                        <View style={{ width: '100%', height: 500 }}>
                            <SmartRefreshLayoutAnyHeader />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['dev']}
                        itShould="SmartRefreshLayoutAutoRefreshExample">
                        <View style={{ width: '100%', height: 500 }}>
                            <SmartRefreshLayoutAutoRefreshExample />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['dev']}
                        itShould="SmartRefreshLayoutClassiscHeader">
                        <View style={{ width: '100%', height: 500 }}>
                            <SmartRefreshLayoutClassiscHeader />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['dev']}
                        itShould="SmartRefreshLayoutDefaultHeader">
                        <View style={{ width: '100%', height: 500 }}>
                            <SmartRefreshLayoutDefaultHeader />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['dev']}
                        itShould="SmartRefreshLayoutMaterialHeader">
                        <View style={{ width: '100%', height: 500 }}>
                            <SmartRefreshLayoutMaterialHeader />
                        </View>
                    </TestCase>

                    <TestCase
                        tags={['dev']}
                        itShould="SmartRefreshLayoutStoreHouseHeader">
                        <View style={{ width: '100%', height: 500 }}>
                            <SmartRefreshLayoutStoreHouseHeader />
                        </View>
                    </TestCase>

                </TestSuite>
            </ScrollView>
        </Tester>
    );
};