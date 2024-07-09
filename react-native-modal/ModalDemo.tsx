import React, { useState, useRef } from 'react';
import { Text, TextInput, StyleSheet, View, Button, ScrollView, SafeAreaView } from 'react-native';
import { Tester, TestSuite, TestCase as _TestCase } from '@rnoh/testerino';
import { SmartManualTestCaseProps } from '@rnoh/testerino/src/react-native/ManualTestCase';

import Modal from 'react-native-modal';

export function ModalDemo() {
  const scrollViewRef = useRef<ScrollView>(null);

  const [isModalVisible, setModalVisible] = useState({
    default: false,
    animationSlide: false,
    animationSlide2: false,
    animationTiming: false,
    animationTiming2: false,
    avoidKeyboard: false,
    avoidKeyboard2: false,
    coverScreen: false,
    coverScreen2: false,
    hasBackdrop: false,
    hasBackdrop2: false,
    backdropCO: false,
    backdropCO2: false,
    backdropTransitionTiming: false,
    backdropTransitionTiming2: false,
    customBackdrop: false,
    deviceWH: false,
    deviceWH2: false,
    onBackButtonPress: false,
    onBackdropPress: false,
    onModalWillHide: false,
    onModalHide: false,
    onModalWillShow: false,
    onModalShow: false,
    onSwipeStart: false,
    onSwipeMove: false,
    onSwipeComplete: false,
    onSwipeCancel: false,
    panResponderThreshold: false,
    panResponderThreshold2: false,
    scrollOffsetMax: false,
    scrollOffsetMax2: false,
    scrollTo: false,
    scrollHorizontal: false,
    swipeThreshold: false,
    swipeThreshold2: false,
    useNativeDriver: false,
    useNativeDriver2: false,
    useNativeDriverForBackdrop: false,
    useNativeDriverForBackdrop2: false,
    hideModalContentWhileAnimating: false,
    hideModalContentWhileAnimating2: false,
    propagateSwipe: false
  });

  const [scrollOffset, setScrollOffset] = useState(undefined)

  // 切换显示状态
  const toggleModal = (type: keyof typeof isModalVisible) => {
    return new Promise((resolve, reject) => {
      setModalVisible({ ...isModalVisible, [type]: !isModalVisible[type] });
      resolve(!isModalVisible[type])
    })
  };

  const handleOnScroll = (y: any) => {
    setScrollOffset(y);
  };
  const handleScrollTo = (p: any) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo(p);
    }
  };

  return (
    <ScrollView style={{ flex: 1, height: '100%' }}>
      <Tester>
        <TestSuite name="react-native-modal">
          <TestCase
            itShould="default-modal-open"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'Default'}
                    onPress={() => { toggleModal('default').then(res => setState(res)) }}
                  />
                  <Modal isVisible={isModalVisible.default}>
                    <DefaultModalContent onPress={() => toggleModal('default')} />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />

          <TestCase
            itShould="animationIn=slideInUp animationOut=slideOutDown"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'animationSlide'}
                    onPress={() => { toggleModal('animationSlide').then(res => setState(res)) }}
                  />
                  <Modal
                    isVisible={isModalVisible.animationSlide}
                    animationIn="slideInUp"
                    animationOut="slideOutDown">
                    <DefaultModalContent onPress={() => toggleModal('animationSlide')} />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />

          <TestCase
            itShould="animationIn=slideInLeft animationOut=slideOutRight"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'animationSlide'}
                    onPress={() => { toggleModal('animationSlide2').then(res => setState(res)) }}
                  />
                  <Modal
                    isVisible={isModalVisible.animationSlide2}
                    animationIn="slideInLeft"
                    animationOut="slideOutRight">
                    <DefaultModalContent onPress={() => toggleModal('animationSlide2')} />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />

          <TestCase
            itShould="animationInTiming=300 animationOutTiming=300"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'animationTiming'}
                    onPress={() => { toggleModal('animationTiming').then(res => setState(res)) }}
                  />
                  <Modal
                    isVisible={isModalVisible.animationTiming}
                    animationInTiming={300}
                    animationOutTiming={300}>
                    <DefaultModalContent onPress={() => toggleModal('animationTiming')} />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould="animationInTiming=900 animationOutTiming=900"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'animationTiming'}
                    onPress={() => { toggleModal('animationTiming2').then(res => setState(res)) }}
                  />
                  <Modal
                    isVisible={isModalVisible.animationTiming2}
                    animationInTiming={900}
                    animationOutTiming={900}>
                    <DefaultModalContent onPress={() => toggleModal('animationTiming2')} />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />

          <TestCase
            itShould="avoidKeyboard=false"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'avoidKeyboard'}
                    onPress={() => { toggleModal('avoidKeyboard').then(res => setState(res)) }}
                  />
                  <Modal isVisible={isModalVisible.avoidKeyboard} avoidKeyboard={false}>
                    <DefaultModalContent
                      input={true}
                      onPress={() => toggleModal('avoidKeyboard')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould="avoidKeyboard=true"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'avoidKeyboard'}
                    onPress={() => { toggleModal('avoidKeyboard2').then(res => setState(res)) }}
                  />
                  <Modal isVisible={isModalVisible.avoidKeyboard2} avoidKeyboard={true}>
                    <DefaultModalContent
                      input={true}
                      onPress={() => toggleModal('avoidKeyboard2')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />

          <TestCase
            itShould="coverScreen=false"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'coverScreen'}
                    onPress={() => { toggleModal('coverScreen').then(res => setState(res)) }}
                  />
                  <Modal
                    isVisible={isModalVisible.coverScreen} coverScreen={false} >
                    <DefaultModalContent
                      onPress={() => toggleModal('coverScreen')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould="coverScreen=true"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'coverScreen'}
                    onPress={() => { toggleModal('coverScreen2').then(res => setState(res)) }}
                  />
                  <Modal
                    isVisible={isModalVisible.coverScreen2} coverScreen={true} >
                    <DefaultModalContent
                      onPress={() => toggleModal('coverScreen2')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />

          <TestCase
            itShould="hasBackdrop=false"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'hasBackdrop'}
                    onPress={() => { toggleModal('hasBackdrop').then(res => setState(res)) }}
                  />
                  <Modal
                    isVisible={isModalVisible.hasBackdrop}
                    hasBackdrop={false}>
                    <DefaultModalContent
                      onPress={() => toggleModal('hasBackdrop')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould="hasBackdrop=true"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'hasBackdrop'}
                    onPress={() => { toggleModal('hasBackdrop2').then(res => setState(res)) }}
                  />
                  <Modal
                    isVisible={isModalVisible.hasBackdrop2}
                    hasBackdrop={true}>
                    <DefaultModalContent
                      onPress={() => toggleModal('hasBackdrop2')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />

          <TestCase
            itShould="backdropColor=green backdropOpacity=0.8"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'backdropColor'}
                    onPress={() => { toggleModal('backdropCO').then(res => setState(res)) }}
                  />
                  <Modal
                    isVisible={isModalVisible.backdropCO}
                    backdropColor="green"
                    backdropOpacity={0.8}>
                    <DefaultModalContent
                      onPress={() => toggleModal('backdropCO')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould="backdropColor=blue backdropOpacity=0.3"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'backdropColor'}
                    onPress={() => { toggleModal('backdropCO2').then(res => setState(res)) }}
                  />
                  <Modal
                    isVisible={isModalVisible.backdropCO2}
                    backdropColor="blue"
                    backdropOpacity={0.3}>
                    <DefaultModalContent
                      onPress={() => toggleModal('backdropCO2')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />

          <TestCase
            itShould="backdropTransitionInTiming=300 backdropTransitionOutTiming=300"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'backdropTransitionInTiming'}
                    onPress={() => { toggleModal('backdropTransitionTiming').then(res => setState(res)) }}
                  />
                  <Modal
                    isVisible={isModalVisible.backdropTransitionTiming}
                    backdropTransitionInTiming={300}
                    backdropTransitionOutTiming={300}>
                    <DefaultModalContent
                      onPress={() => toggleModal('backdropTransitionTiming')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould="backdropTransitionInTiming=900 backdropTransitionOutTiming=900"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'backdropTransitionInTiming'}
                    onPress={() => { toggleModal('backdropTransitionTiming2').then(res => setState(res)) }}
                  />
                  <Modal
                    isVisible={isModalVisible.backdropTransitionTiming2}
                    backdropTransitionInTiming={900}
                    backdropTransitionOutTiming={900}>
                    <DefaultModalContent
                      onPress={() => toggleModal('backdropTransitionTiming2')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />

          <TestCase
            itShould="customBackdrop"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'customBackdrop'}
                    onPress={() => { toggleModal('customBackdrop').then(res => setState(res)) }}
                  />
                  <Modal
                    isVisible={isModalVisible.customBackdrop}
                    customBackdrop={
                      <SafeAreaView style={styles.customBackdrop}>
                        <Text style={styles.customBackdropText}>
                          I'm in the backdrop! 👋
                        </Text>
                      </SafeAreaView>
                    }>
                    <DefaultModalContent
                      onPress={() => toggleModal('customBackdrop')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />

          <TestCase
            itShould="deviceHeight=300 deviceWidth=200"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'deviceWH'}
                    onPress={() => { toggleModal('deviceWH').then(res => setState(res)) }}
                  />
                  <Modal
                    isVisible={isModalVisible.deviceWH}
                    deviceHeight={300}
                    deviceWidth={200}>
                    <DefaultModalContent
                      onPress={() => toggleModal('deviceWH')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould="deviceHeight=400 deviceWidth=300"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'deviceWH'}
                    onPress={() => { toggleModal('deviceWH2').then(res => setState(res)) }}
                  />
                  <Modal
                    isVisible={isModalVisible.deviceWH2}
                    deviceHeight={400}
                    deviceWidth={300}>
                    <DefaultModalContent onPress={() => toggleModal('deviceWH2')} />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />

          <TestCase
            itShould="onBackButtonPress"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'onBackButtonPress'}
                    onPress={() => { toggleModal('onBackButtonPress') }}
                  />
                  <Modal
                    isVisible={isModalVisible.onBackButtonPress}
                    onBackButtonPress={() => {
                      setState(true);
                      toggleModal('onBackButtonPress');
                    }}>
                    <DefaultModalContent onPress={() => toggleModal('onBackButtonPress')} />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />

          <TestCase
            itShould="onBackdropPress"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'onBackdropPress'}
                    onPress={() => { toggleModal('onBackdropPress').then(res => setState(res)) }}
                  />
                  <Modal
                    isVisible={isModalVisible.onBackdropPress}
                    onBackdropPress={() => {
                      setState(true);
                      toggleModal('onBackdropPress');
                    }}>
                    <DefaultModalContent onPress={() => toggleModal('onBackdropPress')} />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />

          <TestCase
            itShould="onModalWillHide"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'onModalWillHide'}
                    onPress={() => toggleModal('onModalWillHide')}
                  />
                  <Modal
                    isVisible={isModalVisible.onModalWillHide}
                    onModalWillHide={() => setState(true)}>
                    <DefaultModalContent
                      onPress={() => toggleModal('onModalWillHide')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould="onModalHide"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'onModalHide'}
                    onPress={() => toggleModal('onModalHide')}
                  />
                  <Modal
                    isVisible={isModalVisible.onModalHide}
                    onModalHide={() => setState(true)}>
                    <DefaultModalContent
                      onPress={() => toggleModal('onModalHide')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould="onModalWillShow"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'onModalWillShow'}
                    onPress={() => toggleModal('onModalWillShow')}
                  />
                  <Modal
                    isVisible={isModalVisible.onModalWillShow}
                    onModalWillShow={() => setState(true)}>
                    <DefaultModalContent
                      onPress={() => toggleModal('onModalWillShow')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould="onModalShow"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'onModalShow'}
                    onPress={() => toggleModal('onModalShow')}
                  />
                  <Modal
                    isVisible={isModalVisible.onModalShow}
                    onModalShow={() => setState(true)}>
                    <DefaultModalContent
                      onPress={() => toggleModal('onModalShow')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />

          <TestCase
            itShould="onSwipeStart"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'onSwipeStart'}
                    onPress={() => toggleModal('onSwipeStart')}
                  />
                  <Modal
                    isVisible={isModalVisible.onSwipeStart}
                    onSwipeStart={() => { setState(true) }}
                    swipeDirection={['up', 'left', 'right', 'down']}>
                    <DefaultModalContent
                      onPress={() => toggleModal('onSwipeStart')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            itShould="onSwipeMove"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'onSwipeMove'}
                    onPress={() => toggleModal('onSwipeMove')}
                  />
                  <Modal
                    isVisible={isModalVisible.onSwipeMove}
                    onSwipeMove={() => { setState(true) }}
                    swipeDirection={['up', 'left', 'right', 'down']}>
                    <DefaultModalContent
                      onPress={() => toggleModal('onSwipeMove')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            itShould="onSwipeComplete"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'onSwipeComplete'}
                    onPress={() => toggleModal('onSwipeComplete')}
                  />
                  <Modal
                    isVisible={isModalVisible.onSwipeComplete}
                    onSwipeComplete={() => {
                      setState(true)
                      toggleModal('onSwipeComplete');
                    }}
                    swipeDirection={['up', 'left', 'right', 'down']}>
                    <DefaultModalContent
                      onPress={() => toggleModal('onSwipeComplete')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            itShould="onSwipeCancel"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'onSwipeCancel'}
                    onPress={() => toggleModal('onSwipeCancel')}
                  />
                  <Modal
                    isVisible={isModalVisible.onSwipeCancel}
                    onSwipeCancel={() => setState(true)}
                    swipeDirection={['up', 'left', 'right', 'down']}>
                    <DefaultModalContent
                      onPress={() => toggleModal('onSwipeCancel')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            itShould="panResponderThreshold=4"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'panResponderThreshold'}
                    onPress={() => toggleModal('panResponderThreshold')}
                  />
                  <Modal
                    isVisible={isModalVisible.panResponderThreshold}
                    onSwipeComplete={() => toggleModal('panResponderThreshold').then(res => setState(res))}
                    panResponderThreshold={4}
                    swipeDirection={['up', 'left', 'right', 'down']}>
                    <DefaultModalContent
                      onPress={() => toggleModal('panResponderThreshold')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => {
              expect(state).to.be.false;
            }}
          />
          <TestCase
            itShould="panResponderThreshold=8"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'panResponderThreshold2'}
                    onPress={() => toggleModal('panResponderThreshold2')}
                  />
                  <Modal
                    isVisible={isModalVisible.panResponderThreshold2}
                    onSwipeComplete={() => toggleModal('panResponderThreshold2').then(res => setState(res))}
                    panResponderThreshold={8}
                    swipeDirection={['up', 'left', 'right', 'down']}>
                    <DefaultModalContent
                      onPress={() => toggleModal('panResponderThreshold2')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => {
              expect(state).to.be.false;
            }}
          />

          <TestCase
            itShould="scrollOffset>0 scrollOffsetMax=100 scrollTo=fn propagateSwipe=true scrollHorizontal=false"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'scrollOffsetMax'}
                    onPress={() => toggleModal('scrollOffsetMax').then(res => setState(res))}
                  />
                  <Modal
                    isVisible={isModalVisible.scrollOffsetMax}
                    onSwipeComplete={() => toggleModal('scrollOffsetMax')}
                    swipeDirection={['left', 'right']}
                    scrollTo={handleScrollTo}
                    scrollOffset={scrollOffset}
                    scrollOffsetMax={100} // content height - ScrollView height
                    propagateSwipe={true}
                    scrollHorizontal={false}
                    style={styles.modal}>
                    <View style={styles.scrollableModal}>
                      <ScrollView
                        ref={scrollViewRef}
                        onScroll={e => handleOnScroll(e.nativeEvent.contentOffset.y)}
                        scrollEventThrottle={16}>
                        <View style={styles.scrollableModalContent1}>
                          <Text style={styles.scrollableModalText1}>
                            You can scroll me up! 👆
                          </Text>
                        </View>
                        <View style={styles.scrollableModalContent2}>
                          <Text style={styles.scrollableModalText2}>
                            Same here as well! ☝
                          </Text>
                          <DefaultModalContent
                            onPress={() => toggleModal('scrollOffsetMax')}
                          />
                        </View>
                      </ScrollView>
                    </View>
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            itShould="scrollOffset>0 scrollOffsetMax=50 scrollTo=fn propagateSwipe=true scrollHorizontal=false"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'scrollOffsetMax'}
                    onPress={() => toggleModal('scrollOffsetMax2').then(res => setState(res))}
                  />
                  <Modal
                    isVisible={isModalVisible.scrollOffsetMax2}
                    onSwipeComplete={() => toggleModal('scrollOffsetMax2')}
                    swipeDirection={['left', 'right']}
                    scrollTo={handleScrollTo}
                    scrollOffset={scrollOffset}
                    scrollOffsetMax={50} // content height - ScrollView height
                    propagateSwipe={true}
                    scrollHorizontal={false}
                    style={styles.modal}>
                    <View style={styles.scrollableModal}>
                      <ScrollView
                        ref={scrollViewRef}
                        onScroll={e => handleOnScroll(e.nativeEvent.contentOffset.y)}
                        scrollEventThrottle={16}>
                        <View style={styles.scrollableModalContent1}>
                          <Text style={styles.scrollableModalText1}>
                            You can scroll me up! 👆
                          </Text>
                        </View>
                        <View style={styles.scrollableModalContent2}>
                          <Text style={styles.scrollableModalText2}>
                            Same here as well! ☝
                          </Text>
                          <DefaultModalContent
                            onPress={() => toggleModal('scrollOffsetMax2')}
                          />
                        </View>
                      </ScrollView>
                    </View>
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            itShould="scrollOffset>0 scrollOffsetMax=50 scrollTo=null propagateSwipe=true scrollHorizontal=false"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'scrollTo'}
                    onPress={() => toggleModal('scrollTo').then(res => setState(res))}
                  />
                  <Modal
                    isVisible={isModalVisible.scrollTo}
                    onSwipeComplete={() => toggleModal('scrollTo')}
                    swipeDirection={['left', 'right']}
                    scrollTo={null}
                    scrollOffset={scrollOffset}
                    scrollOffsetMax={50} // content height - ScrollView height
                    propagateSwipe={true}
                    scrollHorizontal={false}
                    style={styles.modal}>
                    <View style={styles.scrollableModal}>
                      <ScrollView
                        ref={scrollViewRef}
                        onScroll={e => handleOnScroll(e.nativeEvent.contentOffset.y)}
                        scrollEventThrottle={16}>
                        <View style={styles.scrollableModalContent1}>
                          <Text style={styles.scrollableModalText1}>
                            You can scroll me up! 👆
                          </Text>
                        </View>
                        <View style={styles.scrollableModalContent2}>
                          <Text style={styles.scrollableModalText2}>
                            Same here as well! ☝
                          </Text>
                          <DefaultModalContent
                            onPress={() => toggleModal('scrollTo')}
                          />
                        </View>
                      </ScrollView>
                    </View>
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            itShould="scrollHorizontal=true"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'scrollHorizontal'}
                    onPress={() => {
                      toggleModal('scrollHorizontal').then(res => setState(res));
                    }}
                  />
                  <Modal
                    isVisible={isModalVisible.scrollHorizontal}
                    onSwipeComplete={() => toggleModal('scrollHorizontal')}
                    swipeDirection={['up', 'down']}
                    scrollTo={handleScrollTo}
                    scrollOffset={scrollOffset}
                    scrollOffsetMax={100} // content height - ScrollView height
                    scrollHorizontal={true}
                    style={styles.modal}>
                    <View style={styles.scrollableModal}>
                      <ScrollView
                        ref={scrollViewRef}
                        onScroll={e => handleOnScroll(e.nativeEvent.contentOffset.y)}
                        horizontal={true}
                        scrollEventThrottle={16}>
                        <View style={styles.scrollableModalContent1}>
                          <Text style={styles.scrollableModalText1}>
                            You can scroll me up! 👆
                          </Text>
                        </View>
                        <View style={styles.scrollableModalContent2}>
                          <Text style={styles.scrollableModalText2}>
                            Same here as well! ☝
                          </Text>
                          <DefaultModalContent
                            onPress={() => toggleModal('scrollHorizontal')}
                          />
                        </View>
                      </ScrollView>
                    </View>
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            itShould="swipeThreshold=100"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'swipeThreshold'}
                    onPress={() => toggleModal('swipeThreshold')}
                  />
                  <Modal
                    isVisible={isModalVisible.swipeThreshold}
                    onSwipeComplete={() =>
                      toggleModal('swipeThreshold').then(res => setState(res))
                    }
                    useNativeDriverForBackdrop
                    swipeThreshold={100}
                    swipeDirection={['up', 'down', 'left', 'right']}>
                    <DefaultModalContent
                      onPress={() => toggleModal('swipeThreshold')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => {
              expect(state).to.be.false;
            }}
          />
          <TestCase
            itShould="swipeThreshold=300"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'swipeThreshold2'}
                    onPress={() => toggleModal('swipeThreshold2')}
                  />
                  <Modal
                    isVisible={isModalVisible.swipeThreshold2}
                    onSwipeComplete={() =>
                      toggleModal('swipeThreshold2').then(res => setState(res))
                    }
                    useNativeDriverForBackdrop
                    swipeThreshold={300}
                    swipeDirection={['up', 'down', 'left', 'right']}>
                    <DefaultModalContent
                      onPress={() => toggleModal('swipeThreshold2')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => {
              expect(state).to.be.false;
            }}
          />

          <TestCase
            itShould="useNativeDriver=false"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'useNativeDriver'}
                    onPress={() => {
                      toggleModal('useNativeDriver').then(res => setState(res));
                    }}
                  />
                  <Modal
                    isVisible={isModalVisible.useNativeDriver}
                    useNativeDriver={false}
                    onBackButtonPress={() => {
                      toggleModal('useNativeDriver')
                    }}>
                    <DefaultModalContent nobtn={true} onPress={() => toggleModal('useNativeDriver')} />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            itShould="useNativeDriver=true"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'useNativeDriver2'}
                    onPress={() => {
                      toggleModal('useNativeDriver2').then(res => setState(res));
                    }}
                  />
                  <Modal
                    isVisible={isModalVisible.useNativeDriver2}
                    useNativeDriver={true}
                    onBackButtonPress={() => {
                      toggleModal('useNativeDriver2')
                    }}>
                    <DefaultModalContent nobtn={true} onPress={() => toggleModal('useNativeDriver2')} />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            itShould="useNativeDriverForBackdrop=false"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'useNativeDriverForBackdrop'}
                    onPress={() => toggleModal('useNativeDriverForBackdrop').then(res => setState(res))}
                  />
                  <Modal
                    isVisible={isModalVisible.useNativeDriverForBackdrop}
                    onSwipeComplete={() =>
                      toggleModal('useNativeDriverForBackdrop')
                    }
                    useNativeDriverForBackdrop={false}
                    swipeDirection={['up', 'left', 'right', 'down']}>
                    <DefaultModalContent
                      onPress={() => toggleModal('useNativeDriverForBackdrop')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            itShould="useNativeDriverForBackdrop=true"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'useNativeDriverForBackdrop'}
                    onPress={() => toggleModal('useNativeDriverForBackdrop2').then(res => setState(res))}
                  />
                  <Modal
                    isVisible={isModalVisible.useNativeDriverForBackdrop2}
                    onSwipeComplete={() =>
                      toggleModal('useNativeDriverForBackdrop2')
                    }
                    useNativeDriverForBackdrop={true}
                    swipeDirection={['up', 'left', 'right', 'down']}>
                    <DefaultModalContent
                      onPress={() => toggleModal('useNativeDriverForBackdrop2')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            itShould="hideModalContentWhileAnimating=false"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'hideModalContentWhileAnimating'}
                    onPress={() => toggleModal('hideModalContentWhileAnimating').then(res => setState(res))}
                  />
                  <Modal
                    isVisible={isModalVisible.hideModalContentWhileAnimating}
                    hideModalContentWhileAnimating={false}>
                    <DefaultModalContent
                      onPress={() => toggleModal('hideModalContentWhileAnimating')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            itShould="hideModalContentWhileAnimating=true"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'hideModalContentWhileAnimating'}
                    onPress={() => toggleModal('hideModalContentWhileAnimating2').then(res => setState(res))}
                  />
                  <Modal
                    isVisible={isModalVisible.hideModalContentWhileAnimating2}
                    hideModalContentWhileAnimating={true}>
                    <DefaultModalContent
                      onPress={() => toggleModal('hideModalContentWhileAnimating2')}
                    />
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            itShould="propagateSwipe=false"
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Button
                    title={'propagateSwipe'}
                    onPress={() => toggleModal('propagateSwipe').then(res => setState(res))}
                  />
                  <Modal
                    isVisible={isModalVisible.propagateSwipe}
                    onSwipeComplete={() => toggleModal('propagateSwipe')}
                    swipeDirection={['left', 'right',]}
                    scrollTo={handleScrollTo}
                    scrollOffset={scrollOffset}
                    scrollOffsetMax={100} // content height - ScrollView height
                    propagateSwipe={false}
                    style={styles.modal}>
                    <View style={styles.scrollableModal}>
                      <ScrollView
                        ref={scrollViewRef}
                        onScroll={e => handleOnScroll(e.nativeEvent.contentOffset.y)}
                        scrollEventThrottle={16}>
                        <View style={styles.scrollableModalContent1}>
                          <Text style={styles.scrollableModalText1}>
                            You can scroll me up! 👆
                          </Text>
                        </View>
                        <View style={styles.scrollableModalContent2}>
                          <Text style={styles.scrollableModalText2}>
                            Same here as well! ☝
                          </Text>
                          <DefaultModalContent
                            onPress={() => toggleModal('propagateSwipe')}
                          />
                        </View>
                      </ScrollView>
                    </View>
                  </Modal>
                </View>
              );
            }}
            assert={({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />

        </TestSuite>
      </Tester>
    </ScrollView >
  );

}


// DefaultModalContent
type Props = {
  onPress: () => any;
  input?: boolean;
  nobtn?: boolean;
};
const DefaultModalContent: React.FC<Props> = props => (
  <View style={styles.content}>
    <Text style={styles.contentTitle}>Hi 👋!</Text>
    {props.nobtn ? null : (
      <Button onPress={props.onPress} title="Close" />
    )}
    {props.input ? (
      <TextInput
        style={{ height: 50, width: 150, backgroundColor: '#eee' }}
      />
    ) : null}
  </View>
);

// TestCase
function TestCase<TState = undefined>({
  itShould,
  modal,
  initialState,
  arrange,
  assert,
}: {
  itShould: string;
  modal?: boolean;
  initialState: TState;
  arrange: SmartManualTestCaseProps<TState>['arrange'];
  assert: SmartManualTestCaseProps<TState>['assert'];
}) {
  return (
    <_TestCase
      itShould={itShould}
      modal={modal}
      initialState={initialState}
      arrange={arrange}
      assert={assert}
    />
  );
}


const styles = StyleSheet.create({
  view: {
    flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
  },
  modal: {
    justifyContent: 'flex-end', margin: 0,
  },
  scrollableModal: {
    height: 300,
  },
  scrollableModalContent1: {
    height: 200, backgroundColor: '#87BBE0', alignItems: 'center', justifyContent: 'center',
  },
  scrollableModalText1: {
    fontSize: 20, color: 'white',
  },
  scrollableModalContent2: {
    height: 200, backgroundColor: '#A9DCD3', alignItems: 'center', justifyContent: 'center',
  },
  scrollableModalText2: {
    fontSize: 20, color: 'white',
  },
  customBackdrop: {
    flex: 1, backgroundColor: '#87BBE0', alignItems: 'center',
  },
  customBackdropText: {
    marginTop: 50, fontSize: 17,
  },
  content: {
    backgroundColor: 'white', padding: 22, justifyContent: 'center', alignItems: 'center', borderRadius: 4, borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  contentTitle: {
    fontSize: 20, marginBottom: 12,
  },
});

