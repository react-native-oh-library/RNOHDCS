import React from 'react';
import { NavigationContainer, Page } from '../../components';
import { PortalProvider } from '@gorhom/portal';
import CreateGlobalStateDemo from './Demo/CreateGlobalState';
import CreateStateContextDemo from './Demo/CreateStateContext';
import UseAsyncDemo from './Demo/UseAsync';
import UseAsyncFnDemo from './Demo/UseAsyncFn';
import UseAsyncRetryDemo from './Demo/UseAsyncRetry';
import UseBeforeUnloadDemo from './Demo/UseBeforeUnload';
import UseCookieDemo from './Demo/UseCookie';
import UseCounterDemo from './Demo/UseCounter';
import UseCustomCompareEffectDemo from './Demo/UseCustomCompareEffect';
import UseDebounceDemo from './Demo/UseDebounce';
import UseDeepCompareEffectDemo from './Demo/UseDeepCompareEffect';
import UseDefaultDemo from './Demo/UseDefault';
import UseEffectOnceDemo from './Demo/UseEffectOnce';
import UseEnsuredForwardedRefDemo from './Demo/UseEnsuredForwardedRef';
import UseErrorDemo from './Demo/UseError';
import UseFirstMountStateDemo from './Demo/UseFirstMountState';
import UseGetSetDemo from './Demo/UseGetSet';
import UseGetSetStateDemo from './Demo/UseGetSetState';
import UseHarmonicIntervalFnDemo from './Demo/UseHarmonicIntervalFn';
import UseIntervalDemo from './Demo/UseInterval';
import UseIsomorphicLayoutEffectDemo from './Demo/UseIsomorphicLayoutEffect';
import UseLatestDemo from './Demo/UseLatest';
import UseLifecyclesDemo from './Demo/UseLifecycles';
import UseListDemo from './Demo/UseList';
import UseLoggerDemo from './Demo/UseLogger';
import UseMapDemo from './Demo/UseMap';
import UseMediatedStateDemo from './Demo/UseMediatedState';
import UseMethodsDemo from './Demo/UseMethods';
import UseMotionDemo from './Demo/UseMotion';
import UseMountDemo from './Demo/UseMount';
import UseMountedStateDemo from './Demo/UseMountedState';
import UseMultiStateValidatorDemo from './Demo/UseMultiStateValidator';
import UseObservableDemo from './Demo/UseObservable';
import UsePreviousDemo from './Demo/UsePrevious';
import UsePreviousDistinctDemo from './Demo/UsePreviousDistinct';
import UseQueueDemo from './Demo/UseQueue';
import UseRafDemo from './Demo/UseRaf';
import UseRafLoopDemo from './Demo/UseRafLoop';
import UseRafStateDemo from './Demo/UseRafState';
import UseRendersCountDemo from './Demo/UseRendersCount';
import UseSetDemo from './Demo/UseSet';
import UseSetStateDemo from './Demo/UseSetState';
import UseSpringDemo from './Demo/UseSpring';
import UseStateListDemo from './Demo/UseStateList';
import UseStateValidatorDemo from './Demo/UseStateValidator';
import UseStateHistoryDemo from './Demo/UseStateWithHistory';
import UseThrottleDemo from './Demo/UseThrottle';
import UseThrottleFnDemo from './Demo/UseThrottleFn';
import UseTimeoutFnDemo from './Demo/UseTimeoutFn';
import UseToggleDemo from './Demo/UseToggle';
import UseTweenDemo from './Demo/UseTween';
import UseUnmountDemo from './Demo/UseUnmount';
import UseUnmountPromiseDemo from './Demo/UseUnmountPromise';
import UseUpdateDemo from './Demo/UseUpdate';
import UseUpdateEffectDemo from './Demo/UseUpdateEffect';
import CreateReducerContextDemo from './Demo/CreateReducerContext';
import CreateMemoDemo from './Demo/CreateMemo';
import UseTimeoutDemo from './Demo/UseTimeout'

function ReactUseDemo() {
    return (
        <NavigationContainer>
            <PortalProvider>
                <Page name="Dev:CreateGlobalStateDemo "><CreateGlobalStateDemo /></Page>
                <Page name="Dev:CreateMemoDemo "><CreateMemoDemo /></Page>
                <Page name="Dev:CreateReducerContextDemo "><CreateReducerContextDemo /></Page>
                <Page name="Dev:CreateStateContextDemo "><CreateStateContextDemo /></Page>
                <Page name="Dev:UseAsyncDemo "><UseAsyncDemo /></Page>
                <Page name="Dev:UseAsyncFnDemo "><UseAsyncFnDemo /></Page>
                <Page name="Dev:UseAsyncRetryDemo "><UseAsyncRetryDemo /></Page>
                <Page name="Dev:UseBeforeUnloadDemo "><UseBeforeUnloadDemo /></Page>
                <Page name="Dev:UseCookieDemo "><UseCookieDemo /></Page>
                <Page name="Dev:UseCounterDemo "><UseCounterDemo /></Page>
                <Page name="Dev:UseCustomCompareEffectDemo "><UseCustomCompareEffectDemo /></Page>
                <Page name="Dev:UseDebounceDemo "><UseDebounceDemo /></Page>
                <Page name="Dev:UseDeepCompareEffectDemo "><UseDeepCompareEffectDemo /></Page>
                <Page name="Dev:UseDefaultDemo "><UseDefaultDemo /></Page>
                <Page name="Dev:UseEffectOnceDemo "><UseEffectOnceDemo /></Page>
                <Page name="Dev:UseEnsuredForwardedRefDemo "><UseEnsuredForwardedRefDemo /></Page>
                <Page name="Dev:UseErrorDemo "><UseErrorDemo /></Page>
                <Page name="Dev:UseFirstMountStateDemo "><UseFirstMountStateDemo /></Page>
                <Page name="Dev:UseGetSetDemo "><UseGetSetDemo /></Page>
                <Page name="Dev:UseGetSetStateDemo "><UseGetSetStateDemo /></Page>
                <Page name="Dev:UseIntervalDemo "><UseIntervalDemo /></Page>
                <Page name="Dev:UseHarmonicIntervalFnDemo "><UseHarmonicIntervalFnDemo /></Page>
                <Page name="Dev:UseIsomorphicLayoutEffectDemo "><UseIsomorphicLayoutEffectDemo /></Page>
                <Page name="Dev:UseLatestDemo "><UseLatestDemo /></Page>
                <Page name="Dev:UseLifecyclesDemo "><UseLifecyclesDemo /></Page>
                <Page name="Dev:UseListDemo "><UseListDemo /></Page>
                <Page name="Dev:UseLoggerDemo "><UseLoggerDemo /></Page>
                <Page name="Dev:UseMapDemo "><UseMapDemo /></Page>
                <Page name="Dev:UseMediatedStateDemo "><UseMediatedStateDemo /></Page>
                <Page name="Dev:UseMethodsDemo "><UseMethodsDemo /></Page>
                <Page name="Dev:UseMotionDemo "><UseMotionDemo /></Page>
                <Page name="Dev:UseMountDemo "><UseMountDemo /></Page>
                <Page name="Dev:UseMountedStateDemo "><UseMountedStateDemo /></Page>
                <Page name="Dev:UseMultiStateValidatorDemo "><UseMultiStateValidatorDemo /></Page>
                <Page name="Dev:UseObservableDemo "><UseObservableDemo /></Page>
                <Page name="Dev:UsePreviousDemo "><UsePreviousDemo /></Page>
                <Page name="Dev:UsePreviousDistinctDemo "><UsePreviousDistinctDemo /></Page>
                <Page name="Dev:UseQueueDemo "><UseQueueDemo /></Page>
                <Page name="Dev:UseRafDemo "><UseRafDemo /></Page>
                <Page name="Dev:UseRafLoopDemo "><UseRafLoopDemo /></Page>
                <Page name="Dev:UseRafStateDemo "><UseRafStateDemo /></Page>
                <Page name="Dev:UseRendersCountDemo "><UseRendersCountDemo /></Page>
                <Page name="Dev:UseSetDemo "><UseSetDemo /></Page>
                <Page name="Dev:UseSetStateDemo "><UseSetStateDemo /></Page>
                <Page name="Dev:UseSpringDemo "><UseSpringDemo /></Page>
                <Page name="Dev:UseStateListDemo "><UseStateListDemo /></Page>
                <Page name="Dev:UseStateValidatorDemo "><UseStateValidatorDemo /></Page>
                <Page name="Dev:UseStateHistoryDemo "><UseStateHistoryDemo /></Page>
                <Page name="Dev:UseThrottleDemo "><UseThrottleDemo /></Page>
                <Page name="Dev:UseThrottleFnDemo "><UseThrottleFnDemo /></Page>
                <Page name="Dev:UseTimeoutDemo "><UseTimeoutDemo /></Page>
                <Page name="Dev:UseTimeoutFnDemo "><UseTimeoutFnDemo /></Page>
                <Page name="Dev:UseToggleDemo "><UseToggleDemo /></Page>
                <Page name="Dev:UseTweenDemo "><UseTweenDemo /></Page>
                <Page name="Dev:UseUnmountDemo "><UseUnmountDemo /></Page>
                <Page name="Dev:UseUnmountPromiseDemo "><UseUnmountPromiseDemo /></Page>
                <Page name="Dev:UseUpdateDemo "><UseUpdateDemo /></Page>
                <Page name="Dev:UseUpdateEffectDemo "><UseUpdateEffectDemo /></Page>
            </PortalProvider>
        </NavigationContainer>
    );
}

export default ReactUseDemo;