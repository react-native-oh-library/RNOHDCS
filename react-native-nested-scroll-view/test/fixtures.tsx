import {
  GestureResponderEvent,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';

export const COMMON_PROPS = {
  style: {
    borderWidth: 3,
    borderColor: 'firebrick',
  },
  contentContainerStyle: {
    alignItems: 'center' as 'center',
    justifyContent: 'center' as 'center',
  },
  children: getScrollViewContent({}),
};

interface ScrollViewContentProps {
  style?: StyleProp<ViewStyle>;
  amountOfChildren?: number;
  onTouchEnd?: (event: GestureResponderEvent) => void;
  pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto' | undefined;
}

// using this as a component breaks sticky headers because react native sees it then as a single component
export function getScrollViewContent({
  style,
  amountOfChildren = 20,
  onTouchEnd,
  pointerEvents,
}: ScrollViewContentProps) {
  return new Array(amountOfChildren).fill(0).map((_, idx) => {
    return (
      <View
        key={idx}
        style={[
          {
            width: '100%',
            height: 50,
            backgroundColor: idx % 2 ? 'pink' : 'beige',
            justifyContent: 'center',
          },
          style,
        ]}
        pointerEvents={pointerEvents}
        onTouchEnd={onTouchEnd}>
        <Text style={{textAlign: 'center', height: 15}}> {idx + 1}</Text>
      </View>
    );
  });
}

export function getScrollViewContentHorizontal({
  style,
  amountOfChildren = 20,
}: ScrollViewContentProps) {
  return new Array(amountOfChildren).fill(0).map((_, idx) => {
    return (
      <View
        key={idx}
        style={[
          {
            width: 50,
            height: '100%',
            backgroundColor: idx % 2 ? 'pink' : 'beige',
            justifyContent: 'center',
          },
          style,
        ]}>
        <Text style={{textAlign: 'center', height: 15}}> {idx + 1}</Text>
      </View>
    );
  });
}

export function ScrollViewComparator({
  scrollViewLength,
  commonProps,
  lhsProps,
  rhsProps,
}: {
  scrollViewLength: number;
  commonProps: ScrollViewProps;
  lhsProps: ScrollViewProps;
  rhsProps: ScrollViewProps;
}) {
  return (
    <View style={{width: '100%'}}>
      <View
        style={{flexDirection: 'row', width: '100%', alignItems: 'flex-end'}}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 12}}>{JSON.stringify(lhsProps)}</Text>
          <View style={{height: scrollViewLength}}>
            <ScrollView
              style={{flex: 1, height: scrollViewLength}}
              {...{...commonProps, ...lhsProps}}
            />
          </View>
        </View>
        <View style={{width: 4, height: '100%', backgroundColor: 'gray'}} />
        <View style={{flex: 1}}>
          <Text style={{fontSize: 12}}>{JSON.stringify(rhsProps)}</Text>
          <View style={{height: scrollViewLength}}>
            <ScrollView {...{...commonProps, ...rhsProps}} style={{flex: 1}} />
          </View>
        </View>
      </View>
    </View>
  );
}
