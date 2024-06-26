/**
 * MIT License
 *
 * Copyright (C) 2024 Huawei Device Co., Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import * as React from "react";
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Geolocation from "@react-native-oh-tpl/react-native-amap-geolocation";


const style = StyleSheet.create({
  body: {
    padding: 16,
    paddingTop: Platform.OS === "ios" ? 48 : 16,
  },
  controls: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    marginBottom: 16,
  },
  button: {
    flexDirection: "column",
    marginRight: 8,
    marginBottom: 8,
    marginTop: 50
  },
  result: {
    fontFamily: Platform.OS === "ios" ? "menlo" : "monospace",
  },
});

class AmapGeoLocationDemo extends React.Component {
  state = { location: null };


  componentDidMount() {
    // amap app key
    Geolocation.init("aabbbcccc")
  }


  start = () => {
    console.log("geolocation start");
    Geolocation.start().then((result) => {
      let location = result;
      this.setState({ location });
      console.log("geolocationupdateLocation:" + location);
    }).catch((error) => {
      console.log(error);
    });
  };
  stop = () => {
    console.log("geolocation stop");
    Geolocation.stop();
  }

  onceLocation = () => {
    Geolocation.setOnceLocation().then((result) => {
      let location = result;
      this.setState({ location });
      console.log("geolocation onceLocation:" + location);
    }).catch((error) => {
      console.log(error);
    });


  };
  getLastKnownLocation = () => {
    Geolocation.getLastKnownLocation().then((result) => {
      let location = result;
      this.setState({ location });
      console.log("geolocation lastLocation:" + location);
    }).catch((error) => {
      console.log(error);
    });
  }


  setInterval10000 = () => {
    Geolocation.setInterval(10000);
  }
  setInterval2000 = () => {
    Geolocation.setInterval(2000);
  }
  setNeedAddressTrue = () => {
    Geolocation.setNeedAddress(true);
  }
  setNeedAddressFalse = () => {
    Geolocation.setNeedAddress(false);
  }

  setLangeChinese = () => {
    // default = 0,chinese = 1, engilish=2;
    Geolocation.setGeoLanguage(1);
  }
  setLangeEnglish = () => {
    // default = 0,chinese = 1, engilish=2;
    Geolocation.setGeoLanguage(2);
  }
  render() {
    const { location } = this.state;
    return (
      <ScrollView contentContainerStyle={style.body}>

        <View style={style.button}>
          <Button onPress={this.start} title="start" />
        </View>
        <View style={style.button}>
          <Button onPress={this.stop} title="stop" />
        </View>
        <View style={style.button}>
          <Button onPress={this.onceLocation} title="setOnceLocation" />
        </View>
        <View style={style.button}>
          <Button onPress={this.getLastKnownLocation} title="getLastKnownLocation" />
        </View>
        <View style={style.button}>
          <Button onPress={this.setInterval2000} title="setInterval(2000)" />
        </View>
        <View style={style.button}>
          <Button onPress={this.setInterval10000} title="setInterval(10000)" />
        </View>
        <View style={style.button}>
          <Button onPress={this.setNeedAddressTrue} title="setNeedAddress(true)" />
        </View>
        <View style={style.button}>
          <Button onPress={this.setNeedAddressFalse} title="setNeedAddress(false)" />
        </View>
        <View style={style.button}>
          <Button onPress={this.setLangeChinese} title="setLangeChinese" />
        </View>
        <View style={style.button}>
          <Button onPress={this.setLangeEnglish} title="setLangeEnglish" />
        </View>
        <Text style={style.result}>{`${JSON.stringify(location, null, 2)}`}</Text>

      </ScrollView>
    );
  }

}

export default AmapGeoLocationDemo;