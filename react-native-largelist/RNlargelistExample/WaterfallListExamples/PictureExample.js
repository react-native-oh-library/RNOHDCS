import React from "react";
import { Image, SafeAreaView, Dimensions } from "react-native";
import { WaterfallList } from "react-native-largelist";

const cookData = require("./data.json").data.list;

export class PictureExample extends React.Component {
  static navigationOptions = {
    title: "PictureExample"
  };

  state = { data: [...cookData, ...cookData, ...cookData, ...cookData, ...cookData] };

  render() {
    const screenWidth = Dimensions.get("window").width;
    return (
      <WaterfallList
        data={this.state.data}
        heightForItem={item => screenWidth / Math.floor(screenWidth / 150) * +item.showimg_height / +item.showimg_width}
        numColumns={2}
        // preferColumnWidth={150}
        renderItem={this._renderItem}
      />
    );
  }

  _renderItem = item => {
    return <Image source={{ uri: item.showimg }} style={{ flex: 1, margin: 5 }} />;
  };
}
