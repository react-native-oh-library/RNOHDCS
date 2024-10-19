import React, {useRef} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DraxProvider, DraxList, DraxViewDragStatus} from 'react-native-drax';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const getBackgroundColor = (alphaIndex: number) => {
  switch (alphaIndex % 6) {
    case 0:
      return '#ffaaaa';
    case 1:
      return '#aaffaa';
    case 2:
      return '#aaaaff';
    case 3:
      return '#ffffaa';
    case 4:
      return '#ffaaff';
    case 5:
      return '#aaffff';
    default:
      return '#aaaaaa';
  }
};

const getHeight = (alphaIndex: number) => {
  let height = 50;
  if (alphaIndex % 2 === 0) {
    height += 10;
  }
  if (alphaIndex % 3 === 0) {
    height += 20;
  }
  return height;
};

const DraxListBaseComponent = props => {
  const [alphaData, setAlphaData] = React.useState(props.data);
  const listRef = useRef<FlatList | null>(null);
  const getItemStyleTweaks = (alphaItem: string) => {
    const alphaIndex = alphaData.indexOf(alphaItem);
    return {
      backgroundColor: getBackgroundColor(alphaIndex),
      height: getHeight(alphaIndex),
    };
  };
  return (
    <DraxProvider>
      {/* <SafeAreaView edges={['top', 'left', 'right']} style={styles.container}> */}
      <SafeAreaView edges={['left', 'right']} style={styles.container}>
        <GestureHandlerRootView style={{flex: 1}}>
          <DraxList
            ref={listRef}
            data={alphaData}
            flatListStyle={props.flatListStyle}
            itemStyles={props.itemStyles}
            onScroll={props.onScroll}
            itemsDraggable={props.itemsDraggable}
            lockItemDragsToMainAxis={props.lockItemDragsToMainAxis}
            renderItemContent={({item}, {viewState, hover}) => (
              <View
                style={[
                  styles.alphaItem,
                  getItemStyleTweaks(item),
                  viewState?.dragStatus === DraxViewDragStatus.Dragging && hover
                    ? styles.hover
                    : undefined,
                ]}>
                <Text style={styles.alphaText}>{item}</Text>
              </View>
            )}
            onItemDragStart={props.onItemDragStart}
            onItemDragPositionChange={props.onItemDragPositionChange}
            onItemDragEnd={props.onItemDragEnd}
            viewPropsExtractor={props.viewPropsExtractor}
            reorderable={props.reorderable}
            onItemReorder={({fromIndex, fromItem, toIndex, toItem}) => {
              console.log(
                `Item dragged from index ${fromIndex} (${fromItem}) to index ${toIndex} (${toItem})`,
              );
              //增加对于props.onItemReorder方法的调用
              if (props.onItemReorder) {
                props.onItemReorder({fromIndex, fromItem, toIndex, toItem});
              }
              const newData = alphaData.slice();
              newData.splice(toIndex, 0, newData.splice(fromIndex, 1)[0]);
              setAlphaData(newData);
            }}
            keyExtractor={item => item}
            ListHeaderComponent={() => (
              <View style={styles.header}>
              </View>
            )}
          />
        </GestureHandlerRootView>
      </SafeAreaView>
    </DraxProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  alphaItem: {
    backgroundColor: '#aaaaff',
    borderRadius: 8,
    margin: 4,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alphaText: {
    fontSize: 28,
  },
  hover: {
    borderColor: 'blue',
    borderWidth: 2,
  },
});

export default DraxListBaseComponent;
