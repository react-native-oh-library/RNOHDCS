import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';

const ViewTypes = {
  FULL: 0,
  HALF_LEFT: 1,
  HALF_RIGHT: 2,
};

let containerCount = 0;

class CellContainer extends React.Component {
  constructor(args) {
    super(args);
    this._containerId = containerCount++;
  }
  render() {
    return (
      <View {...this.props}>
        {this.props.children}
        <Text>Cell Id: {this._containerId}</Text>
      </View>
    );
  }
}

export class RecyclerListViewBaseComponent extends React.Component {
  constructor(args) {
    super(args);

    let {width} = Dimensions.get('window');

    let dataProvider = new DataProvider((r1, r2) => {
      return r1 !== r2;
    });

    this._layoutProvider = new LayoutProvider(
      index => {
        if (index % 3 === 0) {
          return ViewTypes.FULL;
        } else if (index % 3 === 1) {
          return ViewTypes.HALF_LEFT;
        } else {
          return ViewTypes.HALF_RIGHT;
        }
      },
      (type, dim) => {
        switch (type) {
          case ViewTypes.HALF_LEFT:
            dim.width = width / 2;
            dim.height = 160;
            break;
          case ViewTypes.HALF_RIGHT:
            dim.width = width / 2;
            dim.height = 160;
            break;
          case ViewTypes.FULL:
            dim.width = width;
            dim.height = 140;
            break;
          default:
            dim.width = 0;
            dim.height = 0;
        }
      },
    );

    this._rowRenderer = this._rowRenderer.bind(this);

    this.state = {
      dataProvider: dataProvider.cloneWithRows(this._generateArray(300)),
    };
  }

  _generateArray(n) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
      arr[i] = i;
    }
    return arr;
  }

  _rowRenderer(type, data) {
    switch (type) {
      case ViewTypes.HALF_LEFT:
        return (
          <CellContainer style={styles.containerGridLeft}>
            <Text>Data: {data}</Text>
          </CellContainer>
        );
      case ViewTypes.HALF_RIGHT:
        return (
          <CellContainer style={styles.containerGridRight}>
            <Text>Data: {data}</Text>
          </CellContainer>
        );
      case ViewTypes.FULL:
        return (
          <CellContainer style={styles.container}>
            <Text>Data: {data}</Text>
          </CellContainer>
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <RecyclerListView
        layoutProvider={this._layoutProvider}
        dataProvider={this.state.dataProvider}
        rowRenderer={this._rowRenderer}
        initialOffset={100}
      />
    );
  }
}

export default RecyclerListViewBaseComponent;
const styles = {
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#00a1f1',
  },
  containerGridLeft: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#ffbb00',
  },
  containerGridRight: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#7cbb00',
  },
};
