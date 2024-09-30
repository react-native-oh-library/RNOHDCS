import React, { useRef, useEffect, useState } from 'react';
import { View, Animated, Button, Text, ScrollView, StyleSheet, Platform } from 'react-native';
import {
  ModalPortal,
  Modal,
  BottomModal,
  ModalButton,
  ModalContent,
  ModalTitle,
  ModalFooter,
  ScaleAnimation,
  SlideAnimation,
} from 'react-native-modals'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogContentView: {
    paddingLeft: 18,
    paddingRight: 18,
  },
  customBackgroundModal: {
    opacity: 0.5,
    backgroundColor: 'red',
  },
});

export default function ModalsExample() {
  const [customBackgroundModal, setCustomBackgroundModal] = useState(false);
  const [defaultAnimationModal, setDefaultAnimationModal] = useState(false);
  const [swipeableModal, setSwipeableModal] = useState(false);
  const [scaleAnimationModal, setScaleAnimationModal] = useState(false);
  const [slideAnimationModal, setSlideAnimationModal] = useState(false);
  const [bottomModalAndTitle, setBottomModalAndTitle] = useState(false);
  const [bottomModal, setBottomModal] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>

        <View style={styles.container}>
          <Button
            title="Show Modal - Default Animation"
            onPress={() => {
              setDefaultAnimationModal(true);
            }}
          />

          <Button
            title="Show Modal - Swipeable Modal Animation"
            onPress={() => {
              setSwipeableModal(true);
            }}
          />

          <Button
            title="Show Modal - Scale Animation"
            onPress={() => {
              setScaleAnimationModal(true);
            }}
          />

          <Button
            title="Show Modal - Slide Animation"
            onPress={() => {
              setSlideAnimationModal(true);
            }}
          />

          <Button
            title="Show Modal - Custom Background Style"
            onPress={() => {
              setCustomBackgroundModal(true);
            }}
          />

          <Button
            title="Bottom Modal with Title"
            onPress={() => {
              setBottomModalAndTitle(true);
            }}
          />

          <Button
            title="Bottom Modal without Title"
            onPress={() => {
              setBottomModal(true);
            }}
          />
        </View>

        <Modal
          width={0.9}
          visible={defaultAnimationModal}
          rounded
          style={{ zIndex: 1000 }}
          onTouchOutside={() => {
            setDefaultAnimationModal(false);
          }}
          modalTitle={
            <ModalTitle
              title="Popup Modal - Default Animation"
              align="left"
            />
          }
          footer={
            <ModalFooter>
              <ModalButton
                text="CANCEL"
                bordered
                onPress={() => {
                  setDefaultAnimationModal(false);
                }}
                key="button-1"
              />
              <ModalButton
                text="OK"
                bordered
                onPress={() => {
                  setDefaultAnimationModal(false);
                }}
                key="button-2"
              />
            </ModalFooter>
          }
        >
          <ModalContent
            style={{ backgroundColor: '#fff' }}
          >
            <Text>Default Animation</Text>
            <Text>No onTouchOutside handler. will not dismiss when touch overlay.</Text>

            <Button
              title="To Hide"
              onPress={() => {
                setDefaultAnimationModal(false);
                setScaleAnimationModal(false);

              }}
            />
          </ModalContent>
        </Modal>

        <Modal
          onDismiss={() => {
            setSwipeableModal(false);
          }}
          width={0.9}
          overlayOpacity={1}
          visible={swipeableModal}
          rounded
          onSwipeOut={() => {
            setSwipeableModal(false);
          }}
          onTouchOutside={() => {
            setSwipeableModal(false);
          }}
          swipeDirection={['down', 'up', 'left']}
          modalAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
          modalTitle={
            <ModalTitle
              title="Swipeable Modal"
            />
          }
          footer={
            <ModalFooter>
              <ModalButton
                text="CANCEL"
                bordered
                onPress={() => {
                  setSwipeableModal(false);
                }}
                key="button-1"
              />
              <ModalButton
                text="OK"
                bordered
                onPress={() => {
                  setSwipeableModal(false);
                }}
                key="button-2"
              />
            </ModalFooter>
          }
        >
          <ModalContent
            style={{ backgroundColor: '#fff', paddingTop: 24 }}
          >
            <Text>Swipeable</Text>
            <Text>Swipe Up/Down/Left</Text>
          </ModalContent>
        </Modal>

        <Modal
          onTouchOutside={() => {
            setScaleAnimationModal(false);
          }}
          width={0.9}
          visible={scaleAnimationModal}
          onSwipeOut={() => setScaleAnimationModal(false)}
          modalAnimation={new ScaleAnimation({})}
          onHardwareBackPress={() => {
            console.log('onHardwareBackPress');
            setScaleAnimationModal(false);
            return true;
          }}
          modalTitle={
            <ModalTitle
              title="Modal - Scale Animation"
              hasTitleBar={false}
            />
          }
        >
          <ModalContent>
            <Button
              title="Show Modal - Default Animation"
              onPress={() => {
                setDefaultAnimationModal(true);
              }}
            />
          </ModalContent>
        </Modal>

        <Modal
          onDismiss={() => {
            setSlideAnimationModal(false);
          }}
          onTouchOutside={() => {
            setSlideAnimationModal(false);
          }}
          swipeDirection={['up', 'down']}
          onSwipeOut={() => setSlideAnimationModal(false)}
          visible={slideAnimationModal}
          modalTitle={
            <ModalTitle
              title="Modal - Slide Animation"
              hasTitleBar={false}
            />
          }
          modalAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
        >
          <ModalContent>
            <Text>Slide Animation</Text>
          </ModalContent>
        </Modal>

        <Modal
          onDismiss={() => {
            setCustomBackgroundModal(false);
          }}
          onTouchOutside={() => {
            setCustomBackgroundModal(false);
          }}
          rounded={true}
          overlayPointerEvents={'auto'}
          overlayBackgroundColor={'green'}
          overlayOpacity={0.3}
          useNativeDriver={false}
          modalStyle={styles.customBackgroundModal}
          modalTitle={
            <ModalTitle
              title="Modal - Custom Background Style"
              hasTitleBar={false}
              textStyle={{ color: '#fff' }}
            />
          }
          visible={customBackgroundModal}
        >
          <View style={styles.dialogContentView}>
            <Text style={{ color: '#fff' }}>Custom backgroundStyle</Text>
          </View>
        </Modal>

        <BottomModal
          visible={bottomModalAndTitle}
          onTouchOutside={() => setBottomModalAndTitle(false)}
          height={0.5}
          width={1}
          onSwipeOut={() => setBottomModalAndTitle(false)}
          modalTitle={
            <ModalTitle
              title="Bottom Modal"
              hasTitleBar
            />
          }
        >
          <ModalContent
            style={{
              flex: 1,
              backgroundColor: 'fff',
            }}
          >
            <Text>
              Bottom Modal with Title
            </Text>
          </ModalContent>
        </BottomModal>

        <BottomModal
          visible={bottomModal}
          onTouchOutside={() => setBottomModal(false)}
        // modalStyle={{  }}
        >
          <ModalContent
            style={{
              backgroundColor: 'fff',
              // height: '40%',
            }}
          >
            <Text>
              Bottom Modal without Title
            </Text>
          </ModalContent>
        </BottomModal>
      </ScrollView>

      <ModalPortal></ModalPortal>
    </View>
  );
}
