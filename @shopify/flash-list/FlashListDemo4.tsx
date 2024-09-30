import React, { useEffect, useRef } from "react";
import {
  Animated,
  View,
  RefreshControl,
  Text,
} from 'react-native';
import { FlashList, CellContainer } from '@shopify/flash-list';

const AnimatedCellContainer = Animated.createAnimatedComponent(CellContainer);
const CustomCellRendererComponent = React.forwardRef((props: any, _) => {
  const offset = useRef(new Animated.Value(400)).current;
  const cellContainerRef = useRef<View>(null);

  useEffect(() => {
    Animated.sequence([
      Animated.delay(props.index * 50),
      Animated.spring(offset, {
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start();
  }, [props.index]);

  useEffect(() => {
    cellContainerRef.current?.setNativeProps({ opacity: 1 });
  });

  return (
    <AnimatedCellContainer
      ref={cellContainerRef}
      {...props}
      style={[
        { opacity: 0 },
        {
          transform: [
            {
              translateY: offset.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -400],
              }),
            },
          ],
        },
        props.style]}
    />
  );
});

CustomCellRendererComponent.displayName = "CustomCellRendererComponent";

interface ItemData {
  title: string;
  id: string;
}


const List = () => {
  const DATA: ItemData[] = [
    {
      id: 'gd5jc6gnbb2sbrz9w8z2',
      title: 'First Item',
    },
    {
      id: 'jb95igwbswt13etu073o',
      title: 'Second Item',
    },
    {
      id: 'zcp3zsdkkjmc7cx66hjl',
      title: 'Third Item',
    },
    {
      id: 'fx72rfguehrydmd4n21l',
      title: 'Fourth Item',
    },
    {
      id: '8kadvdlhtr7m3yv3fp4v',
      title: 'Fifth Item',
    },
  ];
  const renderItem = ({ item }: { item: ItemData }) => (
    <View
      style={{
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      }}>
      <Text style={{ fontSize: 16 }}>{item.title}</Text>
    </View>
  );

  return (
    <FlashList
      data={DATA}
      renderItem={renderItem}
      refreshControl={<RefreshControl refreshing={true} />}
      CellRendererComponent={CustomCellRendererComponent}
    />
  );
}

export default List;