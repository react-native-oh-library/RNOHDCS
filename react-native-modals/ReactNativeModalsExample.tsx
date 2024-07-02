import {TestSuite} from '@rnoh/testerino';
import React, {useState,Fragment} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TextInput,
  FlatList,
  Animated,
  Dimensions,
} from 'react-native';
import {Button, TestCase} from '../components';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');

import {
    ModalPortal,
    Modal,
    BottomModal,
    Backdrop,
    DraggableView,
    ModalButton,
    ModalContent,
    ModalTitle,
    ModalFooter,
    Animation,
    FadeAnimation,
    ScaleAnimation,
    SlideAnimation,
    DragEvent,
    ModalProps,
  } from 'react-native-modals'

  type RotateAnimationConfig = {
    initialValue?:number,
    useNativeDriver?:boolean,
    animationDuration?: number,
  }
  
  class RotateAnimation extends Animation {
    animationDuration: number
  
    constructor({
      initialValue = 0,
      useNativeDriver = false,
      animationDuration = 200,
    }: RotateAnimationConfig = {}) {
      super({ initialValue, useNativeDriver });
      this.animationDuration = animationDuration;
    }
  
    in(onFinished?: Function = () => {}): void {
      Animated.timing(this.animate, {
        toValue: 1,
        duration: this.animationDuration,
        useNativeDriver: this.useNativeDriver,
      }).start(onFinished);
    }
  
    out(onFinished?: Function = () => {}): void {
      Animated.timing(this.animate, {
        toValue: 0,
        duration: this.animationDuration,
        useNativeDriver: this.useNativeDriver,
      }).start(onFinished);
    }
  
    getAnimations(): Object {
      return { 
        transform: [{
            rotateZ: this.animate.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg'],
            }),
          },{
            scale: this.animate.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          }],
      };
    }
  }

export function ModalsTest() {
  return (
    <TestSuite name="Modals">
      
      <TestCase.Manual
        itShould="Show Modal - Default Animation with set props onShow and onDismiss"
        initialState={false}
        arrange={({setState}) => (
          <ModalExample
            onDismiss={() => {
                setState(true)
            }}
            onShow={() => {
              setState(true);
            }}
          />
        )}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />
      
      <TestCase.Manual
        itShould="show modal with set props width=0.5 and height=0.5 "
        initialState={false}
        arrange={({setState}) => (
            <ModalExample
            width={0.5}
            height={0.5}
            onShow={() => {
              setState(true);
            }}
          />
        )}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />
      <TestCase.Manual
        itShould="show modal with set props rounded and useNativeDriver"
        initialState={false}
        arrange={({setState}) => (
          <ModalRoundedExample
            onShow={() => {
              setState(true);
            }}
          />
        )}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />
      <TestCase.Manual
        itShould="show modal with set props style and modalStyle"
        initialState={false}
        arrange={({setState}) => (
          <ModalStyleExample
            onShow={() => {
              setState(true);
            }}
          />
        )}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />

      <TestCase.Manual
        itShould="show modal with set props hasOverlay、 overlayOpacity、overlayBackgroundColor and overlayPointerEvents"
        initialState={false}
        arrange={({setState}) => (
          <ModalOverlayExample
            onShow={() => {
              setState(true);
            }}
          />
        )}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />

      <TestCase.Manual
        itShould="show modal with set props modalAnimation and animationDuration"
        initialState={false}
        arrange={({setState}) => (
          <ModalAnimateExample
            onShow={() => {
              setState(true);
            }}
          />
        )}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />

      <TestCase.Manual
        itShould="show modal with set props onTouchOutside and onHardwareBackPress"
        initialState={false}
        arrange={({setState}) => (
          <ModalTouchExample
            onShow={() => {
              setState(true);
            }}
          />
        )}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />

      <TestCase.Manual
        itShould="show modal with set props swipeDirection 、 swipeThreshold、onMove、onSwiping、onSwipeRelease、onSwipingOut and onSwipeOut"
        initialState={false}
        arrange={({setState}) => (
          <ModalSwipeExample
            onShow={() => {
              setState(true);
            }}
          />
        )}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />


     <TestCase.Manual
        itShould="show modal with set props modalTitle 、 footer"
        initialState={false}
        arrange={({setState}) => (
          <ModalExample
            modalTitle={<Text>I am cust modal title</Text>}
            footer={<Text>I am cust modal footer</Text>}
            onShow={() => {
              setState(true);
            }}
          />
        )}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />

      <TestCase.Manual
        itShould="show modal with use ModalTitle、 ModalFooter、ModalButton、ModalContent"
        initialState={false}
        arrange={({setState}) => (
          <ModalCustExample
            
            onShow={() => {
              setState(true);
            }}
          />
        )}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />

      <TestCase.Manual
        itShould="show modal with use ModalPortal"
        initialState={false}
        arrange={({setState}) => (
          <ModalSinglePortalExample
            
            onShow={() => {
              setState(true);
            }}
          />
        )}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />

    <TestCase.Manual
        itShould="show bottom modal with title"
        initialState={false}
        arrange={({setState}) => (
          <BottomModalExample
            modalTitle={
                <ModalTitle
                title="Bottom Modal"
                hasTitleBar
                />
            }
            onShow={() => {
              setState(true);
            }}
          />
        )}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />

    <TestCase.Manual
        itShould="show bottom modal without title"
        initialState={false}
        arrange={({setState}) => (
          <BottomModalExample
            onShow={() => {
              setState(true);
            }}
          />
        )}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />

    <TestCase.Manual
        itShould="use DraggableView "
        initialState={false}
        arrange={({setState}) => (
          <DraggableViewExample
            onShow={() => {
              setState(true);
            }}
          />
        )}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />
      
    </TestSuite>

    
  );
}

const DraggableViewExample = (props: ModalProps) => {
    const [modalVisible, setModalVisible] = useState(true);
    const [switchOneVisible, setSwitchOneVisible] = useState(false);
    const [moveCk, setMoveCk] = useState('');
    const [onSwipingCk, setOnSwipingCk] = useState('');
    const [onSwipeReleaseCK, setOnSwipeReleaseCK] = useState('');
    const [onSwipingOutCK, setOnSwipingOutCk] = useState('');
    const [onSwipeOutCk, setOnSwipeOutCk] = useState('');

    let animate = new Animated.Value(0);

  return (
    <View style={{flex:1}}>
      <Text style={[styles.textStyle, {color: 'black'}]}>
        {modalVisible ? 'shown' : 'hidden'}
      </Text>

      <View style={{height:200,backgroundColor:'yellow',width:SCREEN_WIDTH-40}}>
        {modalVisible?<DraggableView
            style={{flex:1,width:SCREEN_WIDTH-40}}
            swipeThreshold={switchOneVisible?150:30}
            swipeDirection={['right']}
            onMove={(e:DragEvent) => {
                setMoveCk(JSON.stringify(e));
            }}
            onSwiping={(e:DragEvent) => {
                setOnSwipingCk(JSON.stringify(e));
            }}
            onSwipeRelease={(e:DragEvent) => {
                setOnSwipeReleaseCK(JSON.stringify(e));
            }}
            onSwipingOut={(e:DragEvent) => {
                setOnSwipingOutCk(JSON.stringify(e));
            }}
            onSwipeOut={(e:DragEvent) => {
                setOnSwipeOutCk(JSON.stringify(e));
                setModalVisible(false);
                props.onShow();
            }}
          >
            {({ pan, onLayout}:any) => (
              <Fragment>
                <Animated.View
                  style={pan.getLayout()}
                  onLayout={onLayout}
                >
                  <Animated.View
                    style={[
                      {overflow:'hidden',},
                      {translateX:animate.interpolate({
                        inputRange: [0, 1],
                        outputRange: [SCREEN_WIDTH, 0],
                      })}
                    ]}
                  >
                    <View style={{width:40,height:40,backgroundColor:'red',}}></View>
                  </Animated.View>
                </Animated.View>
              </Fragment>
            )}
        </DraggableView>:<View></View>}
      </View>

      <View style={{}}>
      <Text>{"set swipeDirection:"+"['right']"}</Text>
      <Text>
        {"set swipeThreshold:"+(!switchOneVisible?"30":"150")}
        <Switch value={switchOneVisible} onValueChange={(val:boolean) => setSwitchOneVisible(val)} />
      </Text>
      

      <Text>{"onMove:"+moveCk}</Text>
      <Text>{"onSwiping:"+onSwipingCk}</Text>
      <Text>{"onSwipeRelease:"+onSwipeReleaseCK}</Text>
      <Text>{"onSwipingOut:"+onSwipingOutCK}</Text>
      <Text>{"onSwipeOut:"+onSwipeOutCk}</Text>
      
      <Button label="reset" onPress={() => setModalVisible(true)} />
      </View>
    </View>
  );
}

const BottomModalExample = (props: ModalProps & {withTextInput?: boolean}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <View style={{flex:1}}>
        <Text style={[styles.textStyle, {color: 'black'}]}>
          {modalVisible ? 'shown' : 'hidden'}
        </Text>
        
        <BottomModal
          visible={modalVisible}
          onTouchOutside={() => setModalVisible(false)}
          height={0.5}
          width={1}
          onSwipeOut={() => setModalVisible(false)}
          {...props}
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
        <Button label="Show Modal" onPress={() => setModalVisible(true)} />
      </View>
    );
  };


const ModalExample = (props: ModalProps & {withTextInput?: boolean}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{flex:1}}>
      <Text style={[styles.textStyle, {color: 'black'}]}>
        {modalVisible ? 'shown' : 'hidden'}
      </Text>
      <Modal
        overlayOpacity={0.5}
        {...props}
        visible={modalVisible}
        onTouchOutside={() => {
            setModalVisible(false)
        }}
        onHardwareBackPress={() =>{
            setModalVisible(false)
            return true;
        }}
        >
        <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            {props.withTextInput && <TextInput style={styles.textInput} />}
            <Button label="Hide Modal" onPress={() => setModalVisible(false)} />
          </View>
      </Modal>
      <Button label="Show Modal" onPress={() => setModalVisible(true)} />
    </View>
  );
};

const ModalRoundedExample = (props: ModalProps) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [roundVisible, setRoundVisible] = useState(false);
    const [nativeDriVisible, setNativeDriVisible] = useState(false);
  return (
    <View style={{flex:1}}>
      <Text style={[styles.textStyle, {color: 'black'}]}>
        {modalVisible ? 'shown' : 'hidden'}
      </Text>
      <Modal
        overlayOpacity={0.5}
        {...props}
        visible={modalVisible}
        rounded={roundVisible}
        useNativeDriver={nativeDriVisible}
        onTouchOutside={() => {
            setModalVisible(false)
        }}
        onHardwareBackPress={() =>{
            setModalVisible(false)
            return true;
        }}
        >
        <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Button label="Hide Modal" onPress={() => setModalVisible(false)} />
          </View>
      </Modal>
      <View style={{}}>
      <Text>
        {"set rounded:"+roundVisible}
        <Switch value={roundVisible} onValueChange={(val:boolean) => setRoundVisible(val)} ></Switch>
      </Text>
      
      
      <Text>
        {"set useNativeDriver:"+nativeDriVisible}
        <Switch value={nativeDriVisible} onValueChange={(val:boolean) => setNativeDriVisible(val)} />
      </Text>
      
      
      <Button label="Show Modal" onPress={() => setModalVisible(true)} />
      </View>
    </View>
  );
}


const ModalStyleExample = (props: ModalProps) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [switchOneVisible, setSwitchOneVisible] = useState(false);
    const [switchTwoVisible, setSwitchTwoVisible] = useState(false);
  return (
    <View style={{flex:1}}>
      <Text style={[styles.textStyle, {color: 'black'}]}>
        {modalVisible ? 'shown' : 'hidden'}
      </Text>
      <Modal
        overlayOpacity={0.5}
        {...props}
        visible={modalVisible}
        style={switchOneVisible?{backgroundColor:'blue',opacity:0.3}:{}}
        modalStyle={switchTwoVisible?{backgroundColor:'green'}:{}}
        onTouchOutside={() => {
            setModalVisible(false)
        }}
        onHardwareBackPress={() =>{
            setModalVisible(false)
            return true;
        }}
        >
        <View style={[styles.modalView,{backgroundColor:'tranparent'}]}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Button label="Hide Modal" onPress={() => setModalVisible(false)} />
          </View>
      </Modal>
      <View style={{}}>
      <Text>
        {"set style:"+(!switchOneVisible?"null":"{backgroundColor:'blue',opacity:0.3}")}
        <Switch value={switchOneVisible} onValueChange={(val:boolean) => setSwitchOneVisible(val)} />
      </Text>
      
      
      <Text>
        {"set modalStyle:"+(!switchTwoVisible?"null":"{backgroundColor:'green'}")}
        <Switch value={switchTwoVisible} onValueChange={(val:boolean) => setSwitchTwoVisible(val)} />
      </Text>
      
      
      <Button label="Show Modal" onPress={() => setModalVisible(true)} />
      </View>
    </View>
  );
}


const ModalOverlayExample = (props: ModalProps) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [switchOneVisible, setSwitchOneVisible] = useState(false);
    const [switchTwoVisible, setSwitchTwoVisible] = useState(false);
    const [switchThreeVisible, setSwitchThreeVisible] = useState(false);
    const [switchFourVisible, setSwitchFourVisible] = useState(false);

  return (
    <View style={{flex:1}}>
      <Text style={[styles.textStyle, {color: 'black'}]}>
        {modalVisible ? 'shown' : 'hidden'}
      </Text>
      <Modal
        overlayOpacity={switchFourVisible?0.5:0.8}
        overlayBackgroundColor={!switchThreeVisible?undefined:"#f5f5f5"}
        overlayPointerEvents={switchTwoVisible?'auto':'none'}
        hasOverlay={switchOneVisible as any}
        {...props}
        visible={modalVisible}
        onTouchOutside={() => {
            setModalVisible(false)
        }}
        onHardwareBackPress={() =>{
            setModalVisible(false)
            return true;
        }}
        >
        <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Button label="Hide Modal" onPress={() => setModalVisible(false)} />
          </View>
      </Modal>
      <View style={{}}>
      <Text>
        {"set hasOverlay:"+(!switchOneVisible?"false":"true")}
        <Switch value={switchOneVisible} onValueChange={(val:boolean) => setSwitchOneVisible(val)} />
      </Text>
      
      
      <Text>
        {"set overlayPointerEvents:"+(!switchTwoVisible?"none":"auto")}
        <Switch value={switchTwoVisible} onValueChange={(val:boolean) => setSwitchTwoVisible(val)} />
      </Text>
      

      <Text>
        {"set overlayBackgroundColor:"+(!switchThreeVisible?"null":"#f5f5f5")}
        <Switch value={switchThreeVisible} onValueChange={(val:boolean) => setSwitchThreeVisible(val)} />   
     </Text>
      
      
      <Text>
        {"set overlayOpacity:"+(!switchFourVisible?"0.8":"0.5")}
        <Switch value={switchFourVisible} onValueChange={(val:boolean) => setSwitchFourVisible(val)} />
      </Text>
      
      
      <Button label="Show Modal" onPress={() => setModalVisible(true)} />
      </View>
    </View>
  );
}


const ModalTouchExample = (props: ModalProps) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [switchOneVisible, setSwitchOneVisible] = useState(false);
    const [switchTwoVisible, setSwitchTwoVisible] = useState(false);
  return (
    <View style={{flex:1}}>
      <Text style={[styles.textStyle, {color: 'black'}]}>
        {modalVisible ? 'shown' : 'hidden'}
      </Text>
      <Modal
        overlayOpacity={0.5}
        {...props}
        visible={modalVisible}
        onTouchOutside={() => {
            setSwitchOneVisible(true);
            setModalVisible(false)
        }}
        onHardwareBackPress={() =>{
            setModalVisible(false);
            setSwitchTwoVisible(true);
            return true;
        }}
        >
        <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Button label="Hide Modal" onPress={() => setModalVisible(false)} />
          </View>
      </Modal>
      <View style={{}}>
      <Text>{"onTouchOutside:"+(!switchOneVisible?"null":"callback")}</Text>
      
      <Text>{"onHardwareBackPress:"+(!switchTwoVisible?"null":"callback")}</Text>
      
      <Button label="Show Modal" onPress={() => setModalVisible(true)} />
      </View>
    </View>
  );
}


const ModalSwipeExample = (props: ModalProps) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [switchOneVisible, setSwitchOneVisible] = useState(false);
    const [moveCk, setMoveCk] = useState('');
    const [onSwipingCk, setOnSwipingCk] = useState('');
    const [onSwipeReleaseCK, setOnSwipeReleaseCK] = useState('');
    const [onSwipingOutCK, setOnSwipingOutCk] = useState('');
    const [onSwipeOutCk, setOnSwipeOutCk] = useState('');
  return (
    <View style={{flex:1}}>
      <Text style={[styles.textStyle, {color: 'black'}]}>
        {modalVisible ? 'shown' : 'hidden'}
      </Text>
      <Modal
        overlayOpacity={0.5}
        {...props}
        visible={modalVisible}
        swipeDirection={['down','up','left','right']}
        onTouchOutside={() => {
            setModalVisible(false)
        }}
        onHardwareBackPress={() =>{
            setModalVisible(false)
            return true;
        }}
        swipeThreshold={switchOneVisible?30:150}
        onMove={(e:DragEvent) => {
            setMoveCk(JSON.stringify(e));
        }}
        onSwiping={(e:DragEvent) => {
            setOnSwipingCk(JSON.stringify(e));
        }}
        onSwipeRelease={(e:DragEvent) => {
            setOnSwipeReleaseCK(JSON.stringify(e));
        }}
        onSwipingOut={(e:DragEvent) => {
            setOnSwipingOutCk(JSON.stringify(e));
        }}
        onSwipeOut={(e:DragEvent) => {
            setOnSwipeOutCk(JSON.stringify(e));
            setModalVisible(false)
        }}
        >
        <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Text>{"onMove:"+moveCk}</Text>
            <Text>{"onSwiping:"+onSwipingCk}</Text>
            <Text>{"onSwipeRelease:"+onSwipeReleaseCK}</Text>
            <Text>{"onSwipingOut:"+onSwipingOutCK}</Text>
            <Text>{"onSwipeOut:"+onSwipeOutCk}</Text>
            <Button label="Hide Modal" onPress={() => setModalVisible(false)} />
          </View>
      </Modal>
      <View style={{}}>
      <Text>{"set swipeDirection:"+"['down','up','left','right']"}</Text>
      <Text>
        {"set swipeThreshold:"+(!switchOneVisible?"30":"150")}
        <Switch value={switchOneVisible} onValueChange={(val:boolean) => setSwitchOneVisible(val)} />
      </Text>
      

      <Text>{"onMove:"+moveCk}</Text>
      <Text>{"onSwiping:"+onSwipingCk}</Text>
      <Text>{"onSwipeRelease:"+onSwipeReleaseCK}</Text>
      <Text>{"onSwipingOut:"+onSwipingOutCK}</Text>
      <Text>{"onSwipeOut:"+onSwipeOutCk}</Text>
      
      <Button label="Show Modal" onPress={() => setModalVisible(true)} />
      </View>
    </View>
  );
}


const ModalAnimateExample = (props: ModalProps) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [durationVisible, setDurationVisible] = useState(false);
    const [fadeVisible, setFadeVisible] = useState(false);
    const [scaleVisible, setScaleVisible] = useState(false);
    const [sliderVisible, setSliderVisible] = useState(false);
    const [custAnimateVisible, setCustAnimateVisible] = useState(false);

  return (
    <View style={{flex:1}}>
      <Text style={[styles.textStyle, {color: 'black'}]}>
        {modalVisible ? 'shown' : 'hidden'}
      </Text>
      <Modal
        overlayOpacity={0.5}
        {...props}
        visible={modalVisible}
        animationDuration={durationVisible?3:1}
        modalAnimation={custAnimateVisible?new RotateAnimation({}):scaleVisible?new ScaleAnimation({}):sliderVisible?new SlideAnimation({ slideFrom: 'bottom' }):new FadeAnimation({})}
        onTouchOutside={() => {
            setModalVisible(false)
        }}
        onHardwareBackPress={() =>{
            setModalVisible(false)
            return true;
        }}
        >
        <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Button label="Hide Modal" onPress={() => setModalVisible(false)} />
          </View>
      </Modal>
      <View style={{}}>
      <Text>{"set modalAnimation:"+(scaleVisible?"ScaleAnimation":sliderVisible?'SlideAnimation':'FadeAnimation')}</Text>
      
      <Text>
        {'open FadeAnimation'}
        <Switch value={fadeVisible} onValueChange={(val:boolean) => {
            setFadeVisible(val)
            setSliderVisible(false);
            setScaleVisible(false);
            setCustAnimateVisible(false);
        }} />
      </Text>
      <Text>
        {'open SlideAnimation'}
        <Switch value={sliderVisible} onValueChange={(val:boolean) => {
            setFadeVisible(false)
            setScaleVisible(false);
            setSliderVisible(val);
            setCustAnimateVisible(false);
        }} />
      </Text>
      <Text>
        {'open ScaleAnimation'}
        <Switch value={scaleVisible} onValueChange={(val:boolean) => {
            setFadeVisible(false)
            setSliderVisible(false);
            setCustAnimateVisible(false);
            setScaleVisible(val)
        }} />
      </Text>

      <Text>
        {'open CustAnimation'}
        <Switch value={custAnimateVisible} onValueChange={(val:boolean) => {
            setFadeVisible(false)
            setSliderVisible(false);
            setCustAnimateVisible(val);
            setScaleVisible(false)
        }} />
      </Text>

      <Text>
        {"set animationDuration:"+(!durationVisible?"1":"3")}
        <Switch value={durationVisible} onValueChange={(val:boolean) => setDurationVisible(val)} />
      </Text>
      
      
      <Button label="Show Modal" onPress={() => setModalVisible(true)} />
      </View>
    </View>
  );
}


const ModalCustExample = (props: ModalProps & {withTextInput?: boolean}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <View style={{flex:1}}>
        <Text style={[styles.textStyle, {color: 'black'}]}>
          {modalVisible ? 'shown' : 'hidden'}
        </Text>
        <Modal
          overlayOpacity={0.5}
          {...props}
          visible={modalVisible}
          onTouchOutside={() => {
              setModalVisible(false)
          }}
          onHardwareBackPress={() =>{
              setModalVisible(false)
              return true;
          }}
          modalTitle={<ModalTitle title='I am modalTitle Node' style={{backgroundColor:'#00f190'}}></ModalTitle>}
          footer={<ModalFooter style={{backgroundColor:'#f1f900'}}>
                <ModalButton
                text="CANCEL"
                bordered
                align="center"
                textStyle={{color:'red'}}
                onPress={() => {
                    setModalVisible(false)
                }}
                key="button-1"
            />
            <ModalButton
                text="OK"
                bordered
                align="center"
                activeOpacity={0.5}
                onPress={() => {
                    setModalVisible(false)
                }}
                key="button-2"
            />
           </ModalFooter>}
          >
          <ModalContent>
          <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              {props.withTextInput && <TextInput style={styles.textInput} />}
              <Button label="Hide Modal" onPress={() => setModalVisible(false)} />
            </View>
          </ModalContent>
        </Modal>
        <Button label="Show Modal" onPress={() => setModalVisible(true)} />
      </View>
    );
  };

  
  const ModalSinglePortalExample = (props: ModalProps & {withTextInput?: boolean}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [countModalLen,setCountModalLen] = useState(ModalPortal.size);

    let currentModalKey:string = '';

    const showOneModal = () => {
        let key = ModalPortal.show(<Modal
            overlayOpacity={0.5}
            {...props}
            visible={true}
            height={0.5}
            onTouchOutside={() => {
                ModalPortal.dismiss(key);
            }}
            onHardwareBackPress={() =>{
                ModalPortal.dismiss(key);
                return true;
            }}
            swipeDirection={['down']}
            onSwipeOut={() => {
                ModalPortal.dismiss(key);
            }}
            >
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!{`-ModalPortal count:${ModalPortal.size+1}`}</Text>
                <Text style={styles.modalText}>Hello World!{`-ModalPortal ref:${ModalPortal.ref}`}</Text>
                <Button label="ModalPortal show" onPress={() => show()} />
                <Button label="ModalPortal dismiss" onPress={() => ModalPortal.dismiss(key as string)} />
              </View>
          </Modal>) as any;
          currentModalKey = key;
          setCountModalLen(ModalPortal.size);
    }

    const show = () => {
        
         let key = ModalPortal.show(<Modal
            overlayOpacity={0.5}
            {...props}
            visible={true}
            onTouchOutside={() => {
            }}
            onHardwareBackPress={() =>{
                ModalPortal.dismiss(key);
                return true;
            }}
            swipeDirection={['down']}
            onSwipeOut={() => {
                ModalPortal.dismiss(key);
            }}
            modalTitle={<ModalTitle title={`ModalPortal count:${ModalPortal.size}`} style={{backgroundColor:'#00f190'}}></ModalTitle>}
            footer={<ModalFooter style={{backgroundColor:'#f1f900'}}>
                  <ModalButton
                  text="ModalPortal dismiss"
                  bordered
                  align="center"
                  textStyle={{color:'red'}}
                  onPress={() => {
                    dismiss()

                  }}
                  key="button-1"
              />
              <ModalButton
                  text="ModalPortal update"
                  bordered
                  align="center"
                  activeOpacity={0.5}
                  onPress={() => {
                    update()
                  }}
                  key="button-2"
              />
             </ModalFooter>}
            >
            <ModalContent>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <Button label="ModalPortal dismissAll" onPress={() => dismissAll()} />
              </View>
            </ModalContent>
          </Modal>) as any;
          currentModalKey = key;
        setCountModalLen(ModalPortal.size);
    }

    const dismiss = (key?:string) => {
        let someKey = (currentModalKey ? currentModalKey : key||'') as string;
        if (someKey.length) {
            ModalPortal.dismiss(someKey);
        }
    }

    const update = (key?:string) => {
        let someKey = (currentModalKey ? currentModalKey : key||'') as string;
        if (someKey.length) {
            ModalPortal.update(someKey,{overlayBackgroundColor:'blue',overlayOpacity:0.1});
        }
    }

    const dismissAll = () => {
        ModalPortal.dismissAll();
    }

    return (
      <View style={{flex:1}}>
        <Text style={[styles.textStyle, {color: 'black'}]}>
          {modalVisible ? 'shown' : 'hidden'}
        </Text>
        
        
      <Button label="Show Modal" onPress={() => showOneModal()} />
      </View>
    );
  };


const styles = StyleSheet.create({
  
  modalView: {
    padding:15,
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    height: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    height: 20,
  },
  textInput: {
    width: 150,
    height: 40,
    backgroundColor: 'rgb(200,200,200)',
    borderRadius: 12,
    marginVertical: 4,
  },
});
