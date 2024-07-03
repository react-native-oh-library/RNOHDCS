import React, { useState, useRef } from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Button,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Tester, TestSuite } from '@rnoh/testerino';
import { TestCase } from '../components';
import Modal from 'react-native-modal';

export function ModalDemo() {
  const scrollViewRef = useRef<ScrollView>(null);

  const [isModalVisible, setModalVisible] = useState({
    DefaultModal: false,
    useNativeDriverForBackdrop: false,
    SlowModal: false,
    SlideModal: false,
    FancyModal: false,
    SwipeableModal: false,
    ScrollableModal: false,
    BottomHalfModal: false,
    CustomBackdropModal: false,
    WithoutCoverScreenModal: false,
    WithoutBackdropModal: false,
    BackdropCloseModal: false,
    BackButtonCloseModal: false,
    onModalWillShowModal: false,
    onModalShowModal: false,
    onModalWillHideModal: false,
    onModalHideModal: false,
    onSwipeStart: false,
    onSwipeMove: false,
    onSwipeCancel: false,
    deviceHeightWidth: false,
    panResponderThreshold: false,
    scrollHorizontal: false,
    swipeThreshold: false,
    useNativeDriver: false,
    hideModalContentWhileAnimating: false,
    avoidKeyboard: false,
  });

  const [scrollOffset, setScrollOffset] = useState(undefined);

  // 切换显示状态
  const toggleModal = (type: keyof typeof isModalVisible) => {
    return new Promise((resolve, reject) => {
      setModalVisible({ ...isModalVisible, [type]: !isModalVisible[type] });
      resolve(!isModalVisible[type]);
    });
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
    <Tester>
      <TestSuite name="react-native-modal">
        <TestCase.Manual
          itShould="default-modal-open be true"
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <Button
                title={'Default'}
                onPress={() => {
                  toggleModal('DefaultModal').then(res => setState(res));
                }}
              />
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.true;
          }}
        />
        <Modal isVisible={isModalVisible.DefaultModal}>
          <DefaultModalContent onPress={() => toggleModal('DefaultModal')} />
        </Modal>

        <TestCase.Manual
          itShould="deviceHeightWidth-modal-open be true"
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <Button
                title={'deviceHeightWidth'}
                onPress={() => {
                  toggleModal('deviceHeightWidth').then(res => setState(res));
                }}
              />
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.true;
          }}
        />
        <Modal
          isVisible={isModalVisible.deviceHeightWidth}
          deviceHeight={400}
          deviceWidth={400}>
          <DefaultModalContent onPress={() => toggleModal('deviceHeightWidth')} />
        </Modal>

        <TestCase.Manual
          itShould="useNativeDriver-modal-open be true"
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
                  useNativeDriver={true}
                  onBackButtonPress={() => {
                    toggleModal('useNativeDriver')
                  }}>
                  <DefaultModalContent onPress={() => toggleModal('useNativeDriver')} />
                </Modal>
              </View>
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.true;
          }}
        />

        <TestCase.Manual
          itShould="avoidKeyboard-modal-open be true"
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <View>
                <Button
                  title={'avoidKeyboard'}
                  onPress={() => {
                    toggleModal('avoidKeyboard').then(res => setState(res));
                  }}
                />
              </View>
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.true;
          }}
        />
        <Modal isVisible={isModalVisible.avoidKeyboard} avoidKeyboard={true}>
          <DefaultModalContent
            input={true}
            onPress={() => toggleModal('avoidKeyboard')}
          />
        </Modal>

        <TestCase.Manual
          itShould="hideModalContentWhileAnimating-modal-open be true"
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <Button
                title={'hideModalContentWhileAnimating'}
                onPress={() => {
                  toggleModal('hideModalContentWhileAnimating').then(res =>
                    setState(res),
                  );
                }}
              />
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.true;
          }}
        />
        <Modal
          isVisible={isModalVisible.hideModalContentWhileAnimating}
          hideModalContentWhileAnimating={true}>
          <DefaultModalContent
            onPress={() => toggleModal('hideModalContentWhileAnimating')}
          />
        </Modal>

        <TestCase.Manual
          itShould="without-cover-screen-modal-open be true"
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <Button
                title={'Without coverScreen'}
                onPress={() => {
                  toggleModal('WithoutCoverScreenModal').then(res =>
                    setState(res),
                  );
                }}
              />
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.true;
          }}
        />
        <Modal
          isVisible={isModalVisible.WithoutCoverScreenModal} coverScreen={false} >
          <DefaultModalContent
            onPress={() => toggleModal('WithoutCoverScreenModal')}
          />
        </Modal>

        <TestCase.Manual
          itShould="without-backdrop-modal-open be true"
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <Button
                title={'Without backdrop'}
                onPress={() => {
                  toggleModal('WithoutBackdropModal').then(res => setState(res));
                }}
              />
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.true;
          }}
        />
        <Modal
          isVisible={isModalVisible.WithoutBackdropModal}
          hasBackdrop={false}>
          <DefaultModalContent
            onPress={() => toggleModal('WithoutBackdropModal')}
          />
        </Modal>

        <TestCase.Manual
          itShould="slow-modal-open be true"
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <Button
                title={'Slow'}
                onPress={() => {
                  toggleModal('SlowModal').then(res => setState(res));
                }}
              />
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.true;
          }}
        />
        <Modal
          isVisible={isModalVisible.SlowModal}
          animationInTiming={1000}
          animationOutTiming={600}
          backdropTransitionInTiming={800}
          backdropTransitionOutTiming={400}>
          <DefaultModalContent onPress={() => toggleModal('SlowModal')} />
        </Modal>

        <TestCase.Manual
          itShould="slide-modal-open be true"
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <Button
                title={'Sliding from the sides'}
                onPress={() => {
                  toggleModal('SlideModal').then(res => setState(res));
                }}
              />
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.true;
          }}
        />
        <Modal
          isVisible={isModalVisible.SlideModal}
          animationIn="slideInLeft"
          animationOut="slideOutRight">
          <DefaultModalContent onPress={() => toggleModal('SlideModal')} />
        </Modal>

        <TestCase.Manual
          itShould="fancy-modal-open be true"
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <Button
                title={'Fancy'}
                onPress={() => {
                  toggleModal('FancyModal').then(res => setState(res));
                }}
              />
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.true;
          }}
        />
        <Modal
          isVisible={isModalVisible.FancyModal}
          backdropColor="#B4B3DB"
          backdropOpacity={0.8}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={1200}
          animationOutTiming={1200}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}>
          <DefaultModalContent onPress={() => toggleModal('FancyModal')} />
        </Modal>

        <TestCase.Manual
          itShould="swipeable-modal onSwipeComplete be false"
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <View>
                <Button
                  title={'onSwipeComplete'}
                  onPress={() => toggleModal('SwipeableModal')}
                />
                <Modal
                  isVisible={isModalVisible.SwipeableModal}
                  onSwipeComplete={() =>
                    toggleModal('SwipeableModal').then(res => setState(res))
                  }
                  useNativeDriverForBackdrop
                  swipeDirection={['up', 'left', 'right', 'down']}>
                  <DefaultModalContent
                    onPress={() => toggleModal('SwipeableModal')}
                  />
                </Modal>
              </View>
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.false;
          }}
        />

        <TestCase.Manual
          itShould="swipeable-modal swipeThreshold be false"
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
                  swipeThreshold={200}
                  swipeDirection={['up', 'left', 'right', 'down']}>
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

        <TestCase.Manual
          itShould="swipeable-modal panResponderThreshold be false"
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
                  onSwipeComplete={() =>
                    toggleModal('panResponderThreshold').then(res =>
                      setState(res),
                    )
                  }
                  useNativeDriverForBackdrop
                  panResponderThreshold={8}
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

        <TestCase.Manual
          itShould="swipeable-modal onSwipeStart be true"
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
                  onSwipeStart={() => {
                    setState(true);
                  }}
                  useNativeDriverForBackdrop
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

        <TestCase.Manual
          itShould="swipeable-modal onSwipeMove be true"
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
                  onSwipeMove={() => {
                    setState(true);
                  }}
                  useNativeDriverForBackdrop
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

        <TestCase.Manual
          itShould="swipeable-modal onSwipeCancel be true"
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
                  onSwipeCancel={() => {
                    setState(true);
                  }}
                  useNativeDriverForBackdrop
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

        <TestCase.Manual
          itShould="scrollable-modal-open be true"
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <Button
                title={'Scrollable'}
                onPress={() => {
                  toggleModal('ScrollableModal').then(res => setState(res));
                }}
              />
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.true;
          }}
        />
        <Modal
          isVisible={isModalVisible.ScrollableModal}
          onSwipeComplete={() => toggleModal('ScrollableModal')}
          swipeDirection={['left', 'right']}
          scrollTo={handleScrollTo}
          scrollOffset={scrollOffset}
          scrollOffsetMax={400 - 300} // content height - ScrollView height
          propagateSwipe={true}
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
                  onPress={() => toggleModal('ScrollableModal')}
                />
              </View>
            </ScrollView>
          </View>
        </Modal>

        <TestCase.Manual
          itShould="scrollable-modal-open scrollHorizontal be true"
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <Button
                title={'scrollHorizontal'}
                onPress={() => {
                  toggleModal('scrollHorizontal').then(res => setState(res));
                }}
              />
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.true;
          }}
        />
        <Modal
          isVisible={isModalVisible.scrollHorizontal}
          onSwipeComplete={() => toggleModal('scrollHorizontal')}
          swipeDirection={['up', 'down']}
          scrollTo={handleScrollTo}
          scrollOffset={scrollOffset}
          scrollOffsetMax={400 - 300} // content height - ScrollView height
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

        <TestCase.Manual
          itShould="bottom-half-modal-open be true"
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <Button
                title={'Bottom-Half'}
                onPress={() => {
                  toggleModal('BottomHalfModal').then(res => setState(res));
                }}
              />
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.true;
          }}
        />
        <Modal
          isVisible={isModalVisible.BottomHalfModal}
          onSwipeComplete={() => toggleModal('BottomHalfModal')}
          swipeDirection={['up', 'left', 'right', 'down']}
          style={styles.modal}>
          <DefaultModalContent onPress={() => toggleModal('BottomHalfModal')} />
        </Modal>

        <TestCase.Manual
          itShould="custom-backdrop-modal-open be true"
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <Button
                title={'Custom Backdrop'}
                onPress={() => {
                  toggleModal('CustomBackdropModal').then(res => setState(res));
                }}
              />
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.true;
          }}
        />
        <Modal
          isVisible={isModalVisible.CustomBackdropModal}
          customBackdrop={
            <SafeAreaView style={styles.customBackdrop}>
              <Text style={styles.customBackdropText}>
                I'm in the backdrop! 👋
              </Text>
            </SafeAreaView>
          }>
          <DefaultModalContent
            onPress={() => toggleModal('CustomBackdropModal')}
          />
        </Modal>


        {/* cb */}
        <TestCase.Manual
          itShould="backdrop-close-modal be false"
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <View>
                <Button
                  title={'Close on Backdrop Press'}
                  onPress={() => toggleModal('BackdropCloseModal')}
                />
                <Modal
                  isVisible={isModalVisible.BackdropCloseModal}
                  onBackdropPress={() => {
                    toggleModal('BackdropCloseModal').then(res => setState(res));
                  }}>
                  <DefaultModalContent
                    onPress={() => toggleModal('BackdropCloseModal')}
                  />
                </Modal>
              </View>
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.false;
          }}
        />

        <TestCase.Manual
          itShould="back-button-close-modal be false"
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <View>
                <Button
                  title={'Close on Back Button Press'}
                  onPress={() => toggleModal('BackButtonCloseModal')}
                />
                <Modal
                  isVisible={isModalVisible.BackButtonCloseModal}
                  hasBackdrop={false}
                  onBackButtonPress={() => {
                    toggleModal('BackButtonCloseModal').then(res =>
                      setState(res),
                    );
                  }}>
                  <DefaultModalContent
                    onPress={() => toggleModal('BackButtonCloseModal')}
                  />
                </Modal>
              </View>
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.false;
          }}
        />

        <TestCase.Manual
          itShould="onModalWillShow be true"
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <View>
                <Button
                  title={'onModalWillShow'}
                  onPress={() => toggleModal('onModalWillShowModal')}
                />
                <Modal
                  isVisible={isModalVisible.onModalWillShowModal}
                  hasBackdrop={false}
                  onModalWillShow={() => setState(true)}>
                  <DefaultModalContent
                    onPress={() => toggleModal('onModalWillShowModal')}
                  />
                </Modal>
              </View>
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.true;
          }}
        />

        <TestCase.Manual
          itShould="onModalShowModal be true"
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <View>
                <Button
                  title={'onModalShowModal'}
                  onPress={() => toggleModal('onModalShowModal')}
                />
                <Modal
                  isVisible={isModalVisible.onModalShowModal}
                  hasBackdrop={false}
                  onModalShow={() => setState(true)}>
                  <DefaultModalContent
                    onPress={() => toggleModal('onModalShowModal')}
                  />
                </Modal>
              </View>
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.true;
          }}
        />

        <TestCase.Manual
          itShould="onModalWillHideModal be true"
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <View>
                <Button
                  title={'onModalWillHideModal'}
                  onPress={() => toggleModal('onModalWillHideModal')}
                />
                <Modal
                  isVisible={isModalVisible.onModalWillHideModal}
                  hasBackdrop={false}
                  onModalWillHide={() => setState(true)}>
                  <DefaultModalContent
                    onPress={() => toggleModal('onModalWillHideModal')}
                  />
                </Modal>
              </View>
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.true;
          }}
        />

        <TestCase.Manual
          itShould="onModalHideModal be true"
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <View>
                <Button
                  title={'onModalHideModal'}
                  onPress={() => toggleModal('onModalHideModal')}
                />
                <Modal
                  isVisible={isModalVisible.onModalHideModal}
                  hasBackdrop={false}
                  onModalHide={() => setState(true)}>
                  <DefaultModalContent
                    onPress={() => toggleModal('onModalHideModal')}
                  />
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
  );
}

// DefaultModalContent
type Props = {
  onPress: () => any;
  input?: boolean;
};
const DefaultModalContent: React.FC<Props> = props => (
  <View style={styles.content}>
    <Text style={styles.contentTitle}>Hi 👋!</Text>
    <Button onPress={props.onPress} title="Close" />
    {props.input ? (
      <TextInput
        style={{ height: 100, width: 150, backgroundColor: '#eee' }}
        autoFocus={true}
      />
    ) : null}
  </View>
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  scrollableModal: {
    height: 300,
    width: 'auto',
  },
  scrollableModalContent1: {
    height: 300,
    width: '100%',
    backgroundColor: '#87BBE0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText1: {
    fontSize: 20,
    color: 'white',
  },
  scrollableModalContent2: {
    height: 300,
    width: '100%',
    backgroundColor: '#A9DCD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText2: {
    fontSize: 20,
    color: 'white',
  },
  customBackdrop: {
    flex: 1,
    backgroundColor: '#87BBE0',
    alignItems: 'center',
  },
  customBackdropText: {
    marginTop: 100,
    fontSize: 17,
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});
