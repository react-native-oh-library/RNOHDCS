import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { InView, IOFlatList, type IOFlatListController } from 'react-native-intersection-observer';

const DATA = [
  {
    id: 1,
    title: 'First Item',
  },
  {
    id: 2,
    title: 'Second Item',
  },
  {
    id: 3,
    title: 'Third Item',
  },
  {
    id: 4,
    title: 'Four Item',
  },
  {
    id: 5,
    title: 'Five Item',
  },
  {
    id: 6,
    title: 'Six Item',
  },
  {
    id: 7,
    title: 'Seven Item',
  },
  {
    id: 8,
    title: 'Eight Item',
  },
  {
    id: 9,
    title: 'Nine Item',
  },
  {
    id: 10,
    title: 'Ten Item',
  },
];

type ItemProps = { id: number; title: string, onValueChange: any };

const Item = ({ id, title , onValueChange}: ItemProps) =>
  id === 6 ? (
    <InView
      style={styles.myInView}
      triggerOnce={false}
      onChange={(inView) => {
        onValueChange(inView)
      }}
    >
      <Text style={styles.title}>{title}</Text>
    </InView>
  ) : (
    id === 5 || id === 7 ? (
      <View style = {styles.item}>
        <Text style={styles.item20}>20</Text>
        <View style = {styles.title20}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.item20}>20</Text>
    </View >

    ):(
      <View style = {styles.item}>
        <Text style={styles.title}>{title}</Text>
     </View >
    )
  );

const FlatListTester = () => {
  const flatListRef = useRef<IOFlatListController>(null);
  const [inViewVal, setValue] = useState(false);
  const handleChildValue =(childValue) =>{
    setValue(childValue)
  }
  return (
    <View>
      <Text>目标元素是否进入： {'' + inViewVal }</Text>

      <IOFlatList
        style = {styles.myIOFlatList}
        ref={flatListRef}
        rootMargin={{ top: 20, bottom: 20 }}
        data={DATA}
        ListHeaderComponent={
          <View>
            <Text
              onPress={() => {
                flatListRef.current?.scrollToEnd();
              }}
            >
              Scroll to bottom
            </Text>
            <Text
              style = {styles.text6}
              onPress={() => {
                flatListRef.current?.scrollToIndex({
                  animated: true,
                  index: 5,
                });
              }}
            >
              Scroll to 6
            </Text>
          </View>
        }
        ListFooterComponent={
          <Text
            style = {styles.contant}
            onPress={() => {
            flatListRef.current?.scrollToOffset({
              animated: true,
              offset: 0,
            });
          }}
          >
            Scroll to top
          </Text>
        }
        renderItem={({ item }) => <Item id={item.id} title={item.title} onValueChange= {handleChildValue} />}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    borderWidth: 1,
    borderColor: 'blue',
    borderStyle: 'solid',
  },
  title: {
    fontSize: 14,
  },
  myInView: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    borderWidth: 1,
    borderColor: 'blue',
    borderStyle: 'solid',
  },
  myIOFlatList: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    marginBottom: 50
  },
  item20: {
    height:20,
    width:'100%',
    backgroundColor: '#999'
  },
  title20: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 160,
  },
  text6: {
    marginTop: 20
  },
  contant: {
    height: 30,
  }
});

export default FlatListTester;
