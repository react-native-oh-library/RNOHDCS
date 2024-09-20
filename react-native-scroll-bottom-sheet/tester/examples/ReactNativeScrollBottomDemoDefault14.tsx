import React, {useCallback, useMemo, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
  Pressable,
  Alert,
  Button,
} from 'react-native';
import {Tester, Filter, TestSuite} from '@rnoh/testerino';
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
const WINDOW_HEIGHT = Dimensions.get('window').height;
export default function ScrollBottomSheetDemoDefault14() {
  //callback
  const onSettleCallback = (index: number) => {
    console.log('handleSheetChanges', index);
  };
  const scrollRef = React.useRef(null);
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    [],
  );
  const backToTop = () => {
    console.log('测试scrollRef.current', scrollRef.current);
    scrollRef.current.scrollTo({y: 0, animated: true});
  };
  return (
    <View style={styles.screenbox}>
      <Button title="回到顶部" onPress={backToTop}></Button>
      <ScrollBottomSheet
        componentType="ScrollView"
        snapPoints={[128, '40%', '60%']}
        initialSnapIndex={0}
        renderHandle={() => (
          <View style={styles.header}>
            <View style={styles.panelHandle} />
          </View>
        )}
        onSettle={onSettleCallback}
        animationType={'spring'}
        animationConfig={{}}
        innerRef={scrollRef}
        enableOverScroll={false}
        containerStyle={styles.containerStyle}
        contentContainerStyle={styles.contentContainerStyle}>
        <Text style={styles.loremText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          nostrum, libero temporibus fugit possimus iure necessitatibus
          cupiditate ut a ipsa asperiores maiores incidunt quis aut doloremque,
          rerum distinctio? Debitis, sit. Cupiditate est esse laboriosam tenetur
          voluptatum unde autem perspiciatis non error inventore id, rerum ea
          alias commodi. Tenetur animi eaque sequi quod velit accusantium ad.
          Voluptate quae molestiae libero maiores! Voluptatibus at tempora quasi
          soluta sint natus nobis. Exercitationem, est quis alias possimus
          repudiandae numquam! Voluptatum qui eos iste officia, sint, pariatur,
          nulla nesciunt aliquid aperiam repudiandae excepturi. Cum,
          repellendus! Assumenda ipsam magni nostrum ipsum, placeat provident
          eligendi alias veniam labore minima. Corrupti, deleniti! Velit harum
          quae asperiores nisi aliquid aut illum praesentium Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Excepturi nostrum, libero
          temporibus fugit possimus iure necessitatibus cupiditate ut a ipsa
          asperiores maiores incidunt quis aut doloremque, rerum distinctio?
          Debitis, sit. Cupiditate est esse laboriosam tenetur voluptatum unde
          autem perspiciatis non error inventore id, rerum ea alias commodi.
          Tenetur animi eaque sequi quod velit accusantium ad. Voluptate quae
          molestiae libero maiores! Voluptatibus at tempora quasi soluta sint
          natus nobis. Exercitationem, est quis alias possimus repudiandae
          numquam! Voluptatum qui eos iste officia, sint, pariatur, nulla
          nesciunt aliquid aperiam repudiandae excepturi. Cum, repellendus!
          Assumenda ipsam magni nostrum ipsum, placeat provident eligendi alias
          veniam labore minima. Corrupti, deleniti! Velit harum quae asperiores
          nisi aliquid aut illum praesentiumLorem ipsum dolor sit amet
          consectetur adipisicing elit. Excepturi nostrum, libero temporibus
          fugit possimus iure necessitatibus cupiditate ut a ipsa asperiores
          maiores incidunt quis aut doloremque, rerum distinctio? Debitis, sit.
          Cupiditate est esse laboriosam tenetur voluptatum unde autem
          perspiciatis non error inventore id, rerum ea alias commodi. Tenetur
          animi eaque sequi quod velit accusantium ad. Voluptate quae molestiae
          libero maiores! Voluptatibus at tempora quasi soluta sint natus nobis.
          Exercitationem, est quis alias possimus repudiandae numquam!
          Voluptatum qui eos iste officia, sint, pariatur, nulla nesciunt
          aliquid aperiam repudiandae excepturi. Cum, repellendus! Assumenda
          ipsam magni nostrum ipsum, placeat provident eligendi alias veniam
          labore minima. Corrupti, deleniti! Velit harum quae asperiores nisi
          aliquid aut illum praesentiumLorem ipsum dolor sit amet consectetur
          adipisicing elit. Excepturi nostrum, libero temporibus fugit possimus
          iure necessitatibus cupiditate ut a ipsa asperiores maiores incidunt
          quis aut doloremque, rerum distinctio? Debitis, sit. Cupiditate est
          esse laboriosam tenetur voluptatum unde autem perspiciatis non error
          inventore id, rerum ea alias commodi. Tenetur animi eaque sequi quod
          velit accusantium ad. Voluptate quae molestiae libero maiores!
          Voluptatibus at tempora quasi soluta sint natus nobis. Exercitationem,
          est quis alias possimus repudiandae numquam! Voluptatum qui eos iste
          officia, sint, pariatur, nulla nesciunt aliquid aperiam repudiandae
          excepturi. Cum, repellendus! Assumenda ipsam magni nostrum ipsum,
          placeat provident eligendi alias veniam labore minima. Corrupti,
          deleniti! Velit harum quae asperiores nisi aliquid aut illum
          praesentiumab!
        </Text>
      </ScrollBottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  screenbox: {
    height: '100%',
    backgroundColor: 'papayawhip',
  },
  containerStyle: {
    fontSize: 18,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHandle: {
    width: 40,
    height: 2,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 4,
  },
  loremText: {
    fontSize: 24,
    color: 'green',
  },
  item: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    marginVertical: 10,
  },
  contentContainerStyle: {
    padding: 16,
    backgroundColor: '#F3F4F9',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
