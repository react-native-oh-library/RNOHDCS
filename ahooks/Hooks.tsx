import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { NavigationContainer, Page } from '../../components';
import { PortalProvider } from '@gorhom/portal';
import {
    BasicCancel,
    BasicDefault,
    BasicDefaultFalse,
    BasicLifeCycle,
    BasicManualRun,
    BasicManualRunAsync,
    BasicMutate,
    BasicParams,
    BasicRefresh,
    Boolean1,
    CacheCacheKey,
    CacheClearCache,
    CacheParams,
    CacheShare,
    CacheStaleTime,
    CookieState1,
    CookieState2,
    CookieState3,
    CountDown1,
    CountDown2,
    CountDown3,
    Counter1,
    Debounce1,
    DebounceDebounce,
    GetState1,
    HistoryTravel1,
    HistoryTravel2,
    HistoryTravel3,
    IndexDefault,
    IndexManual,
    LoadingDelayLoadingDelay,
    Map1,
    Mount1,
    PollingPolling,
    PollingPollingError,
    Previous1,
    Previous2,
    RafState1,
    ReadyManualReady,
    ReadyReady,
    RefreshDepsRefreshDeps,
    RefreshDepsRrefreshDepsAction,
    RefreshOnWindowFocusRefreshOnWindowFocus,
    ResetState1,
    RetryRetry,
    SafeState1,
    Set1,
    SetState1,
    SetState2,
    Throttle1,
    ThrottleThrottle,
    Toggle1,
    Toggle2,
    Unmount1,
    UnmountedRef1,
    WebSocket1
} from './index';
import {
    UseUpdateEffect,
    UseUpdateLayoutEffect,
    UseAsyncEffect,
    UseAsyncEffectInterrupt,
    UseDebounceEffect,
    UseDebounceFn,
    UseThrottleFn,
    UseThrottleEffect,
    UseDeepCompareEffect,
    UseDeepCompareLayoutEffect,
    UseInterval,
    UseInterval2,
    UseRafInterval,
    UseRafInterval2,
    UseTimeout,
    UseTimeout2,
    UseRafTimeout,
    UseRafTimeout2,
    UseLockFn,
    UseUpdate
} from './Effect';

import { MutationObserver } from './Dom'

import {
    ChangeControllableValue,
    ControlledControllableValue,
    UncontrolledControllableValue,
    Creation,
    EventEmitter,
    Latest,
    FoundationMemoizedFn,
    MemoizedFn
} from './Advanced'

import { TrackedEffect, WhyDidYouUpdate } from './Dev'

function Hooks() {
    return (
        <NavigationContainer>
            <PortalProvider>
                <View>
                    <Page name="TEST:Request_IndexDefault">
                        <IndexDefault />
                    </Page>
                    <Page name="TEST:Request_IndexManual">
                        <IndexManual />
                    </Page>
                    <Page name="TEST:Request_BasicCancel">
                        <BasicCancel />
                    </Page>
                    <Page name="TEST:Request_BasicDefault">
                        <BasicDefault />
                    </Page>
                    <Page name="TEST:Request_BasicDefaultFalse">
                        <BasicDefaultFalse />
                    </Page>
                    <Page name="TEST:Request_BasicLifeCycle">
                        <BasicLifeCycle />
                    </Page>
                    <Page name="TEST:Request_BasicManualRun">
                        <BasicManualRun />
                    </Page>
                    <Page name="TEST:Request_BasicManualRunAsync">
                        <BasicManualRunAsync />
                    </Page>
                    <Page name="TEST:Request_BasicMutate">
                        <BasicMutate />
                    </Page>
                    <Page name="TEST:Request_BasicParams">
                        <BasicParams />
                    </Page>
                    <Page name="TEST:Request_BasicRefresh">
                        <BasicRefresh />
                    </Page>
                    <Page name="TEST:LoadingDelayLoadingDelay">
                        <LoadingDelayLoadingDelay />
                    </Page>
                    <Page name="TEST:PollingPolling">
                        <PollingPolling />
                    </Page>
                    <Page name="TEST:PollingPollingError">
                        <PollingPollingError />
                    </Page>
                    <Page name="TEST:ReadyManualReady">
                        <ReadyManualReady />
                    </Page>
                    <Page name="TEST:ReadyReady">
                        <ReadyReady />
                    </Page>
                    <Page name="TEST:RefreshDepsRefreshDeps">
                        <RefreshDepsRefreshDeps />
                    </Page>
                    <Page name="TEST:RefreshDepsRrefreshDepsAction">
                        <RefreshDepsRrefreshDepsAction />
                    </Page>
                    <Page name="TEST:RefreshOnWindowFocusRefreshOnWindowFocus">
                        <RefreshOnWindowFocusRefreshOnWindowFocus />
                    </Page>
                    <Page name="TEST:DebounceDebounce">
                        <DebounceDebounce />
                    </Page>
                    <Page name="TEST:ThrottleThrottle">
                        <ThrottleThrottle />
                    </Page>
                    <Page name="TEST:CacheCacheKey">
                        <CacheCacheKey />
                    </Page>
                    <Page name="TEST:CacheClearCache">
                        <CacheClearCache />
                    </Page>
                    <Page name="TEST:CacheParams">
                        <CacheParams />
                    </Page>
                    <Page name="TEST:CacheShare">
                        <CacheShare />
                    </Page>
                    <Page name="TEST:CacheStaleTime">
                        <CacheStaleTime />
                    </Page>
                    <Page name="TEST:RetryRetry">
                        <RetryRetry />
                    </Page>
                    <Page name="TEST:HistoryTravel1">
                        <HistoryTravel1 />
                    </Page>
                    <Page name="TEST:HistoryTravel2">
                        <HistoryTravel2 />
                    </Page>
                    <Page name="TEST:HistoryTravel3">
                        <HistoryTravel3 />
                    </Page>
                    <Page name="TEST:CountDown1">
                        <CountDown1 />
                    </Page>
                    <Page name="TEST:CountDown2">
                        <CountDown2 />
                    </Page>
                    <Page name="TEST:CountDown3">
                        <CountDown3 />
                    </Page>
                    <Page name="TEST:Counter1">
                        <Counter1 />
                    </Page>
                    <Page name="TEST:WebSocket1">
                        <WebSocket1 />
                    </Page>
                    <Page name="TEST:Mount1">
                        <Mount1 />
                    </Page>
                    <Page name="TEST:Unmount1">
                        <Unmount1 />
                    </Page>
                    <Page name="TEST:UnmountedRef1">
                        <UnmountedRef1 />
                    </Page>
                    <Page name="TEST:SetState1">
                        <SetState1 />
                    </Page>
                    <Page name="TEST:SetState2">
                        <SetState2 />
                    </Page>
                    <Page name="TEST:Boolean1">
                        <Boolean1 />
                    </Page>
                    <Page name="TEST:Toggle1">
                        <Toggle1 />
                    </Page>
                    <Page name="TEST:Toggle2">
                        <Toggle2 />
                    </Page>
                    <Page name="TEST:CookieState1">
                        <CookieState1 />
                    </Page>
                    <Page name="TEST:CookieState2">
                        <CookieState2 />
                    </Page>
                    <Page name="TEST:CookieState3">
                        <CookieState3 />
                    </Page>
                    <Page name="TEST:Debounce1">
                        <Debounce1 />
                    </Page>
                    <Page name="TEST:Throttle1">
                        <Throttle1 />
                    </Page>
                    <Page name="TEST:Map1">
                        <Map1 />
                    </Page>
                    <Page name="TEST:Set1">
                        <Set1 />
                    </Page>
                    <Page name="TEST:Previous1">
                        <Previous1 />
                    </Page>
                    <Page name="TEST:Previous2">
                        <Previous2 />
                    </Page>
                    <Page name="TEST:RafState1">
                        <RafState1 />
                    </Page>
                    <Page name="TEST:SafeState1">
                        <SafeState1 />
                    </Page>
                    <Page name="TEST:GetState1">
                        <GetState1 />
                    </Page>
                    <Page name="TEST:ResetState1">
                        <ResetState1 />
                    </Page>
                </View>

                <View>
                    <Page name="EFFECT:UseUpdateEffect ">
                        <UseUpdateEffect />
                    </Page>
                    <Page name="EFFECT:UseUpdateLayoutEffect ">
                        <UseUpdateLayoutEffect />
                    </Page>
                    <Page name="EFFECT:UseAsyncEffect ">
                        <UseAsyncEffect />
                    </Page>
                    <Page name="EFFECT:UseAsyncEffectInterrupt ">
                        <UseAsyncEffectInterrupt />
                    </Page>
                    <Page name="EFFECT:UseDebounceEffect ">
                        <UseDebounceEffect />
                    </Page>
                    <Page name="EFFECT:UseDebounceFn ">
                        <UseDebounceFn />
                    </Page>
                    <Page name="EFFECT:UseThrottleFn ">
                        <UseThrottleFn />
                    </Page>
                    <Page name="EFFECT:UseThrottleEffect ">
                        <UseThrottleEffect />
                    </Page>
                    <Page name="EFFECT:UseDeepCompareEffect ">
                        <UseDeepCompareEffect />
                    </Page>
                    <Page name="EFFECT:UseDeepCompareLayoutEffect ">
                        <UseDeepCompareLayoutEffect />
                    </Page>
                    <Page name="EFFECT:UseInterval ">
                        <UseInterval />
                    </Page>
                    <Page name="EFFECT:UseInterval2 ">
                        <UseInterval2 />
                    </Page>
                    <Page name="EFFECT:UseRafInterval ">
                        <UseRafInterval />
                    </Page>
                    <Page name="EFFECT:UseRafInterval2 ">
                        <UseRafInterval2 />
                    </Page>
                    <Page name="EFFECT:UseTimeout ">
                        <UseTimeout />
                    </Page>
                    <Page name="EFFECT:UseTimeout2 ">
                        <UseTimeout2 />
                    </Page>
                    <Page name="EFFECT:UseRafTimeout ">
                        <UseRafTimeout />
                    </Page>
                    <Page name="EFFECT:UseRafTimeout2 ">
                        <UseRafTimeout2 />
                    </Page>
                    <Page name="EFFECT:UseLockFn ">
                        <UseLockFn />
                    </Page>
                    <Page name="EFFECT:UseUpdate ">
                        <UseUpdate />
                    </Page>
                </View>

                <View>
                    <Page name="DOM:MutationObserver ">
                        <MutationObserver />
                    </Page>
                    <Page name="Advanced:ChangeControllableValue ">
                        <ChangeControllableValue />
                    </Page>
                    <Page name="Advanced:ControlledControllableValue ">
                        <ControlledControllableValue />
                    </Page>
                    <Page name="Advanced:UncontrolledControllableValue ">
                        <UncontrolledControllableValue defaultValue />
                    </Page>
                    <Page name="Advanced:Creation ">
                        <Creation />
                    </Page>
                    <Page name="Advanced:EventEmitter ">
                        <EventEmitter />
                    </Page>
                    <Page name="Advanced:Latest ">
                        <Latest />
                    </Page>
                    <Page name="Advanced:FoundationMemoizedFn ">
                        <FoundationMemoizedFn />
                    </Page>
                    <Page name="Advanced:MemoizedFn ">
                        <MemoizedFn />
                    </Page>

                </View>

                <View>
                    <Page name="Dev:TrackedEffect ">
                        <TrackedEffect />
                    </Page>
                    <Page name="Dev:WhyDidYouUpdate ">
                        <WhyDidYouUpdate />
                    </Page>
                </View>
            </PortalProvider>
        </NavigationContainer>
    );
}

export default Hooks;
