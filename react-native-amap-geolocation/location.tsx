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
import {
  Geolocation, setInterval, addLocationListener, setAllowsBackgroundLocationUpdates,
  setGeoLanguage, setDistanceFilter, setDesiredAccuracy, init, setNeedAddress, start,
  stop, setLocationTimeout, setOnceLocation, GeoLanguage
} from "react-native-amap-geolocation";


const style = StyleSheet.create({
  body: {
    padding: 16,
    paddingTop: Platform.OS === "ios" ? 48 : 16,
  },
  button: {
    flexDirection: "column",
    marginRight: 8,
    marginBottom: 5,
    marginTop: 5
  },
  result: {
    fontFamily: Platform.OS === "ios" ? "menlo" : "monospace",
  },
});

class AmapGeoLocationDemo extends React.Component {
  state = {
    location: null, needAddressText: "setNeedAddress(false)",
    language: "setLanguage(chinese)", interval: "setInterval(默认2000)", onceText: "setOnceLocation(false) 设置单次定位",
    startText: "start 持续定位", timeoutText: "setLocationTimeout 设置请求定位超时时间",distanceText:"setDistanceFilter(0) 设置定位的最小更新距离"
  };
  watchId = 0;
  needAddress = true;
  currLanguage = GeoLanguage.ZH;
  currInterval = false;
  onceLocationJudge = false;
  timeout5000 = false;
  distanseJudge = true;
  init = () => {
    console.log("rn AMapLocationManagerImpl init");
    init("5f7389b845cbd89b1c32e24f526728f4").then(() => {
      console.log("rn AMapLocationManagerImpl init success");
    });

  };
  addLocationListener = () => {
    console.log("rn AMapLocationManagerImpl addLocationListener");
    addLocationListener((locationData) => {
      console.log("rn AMapLocationManagerImpl callback success:" + JSON.stringify(locationData, null, 2));
      let location = locationData;
      this.setState({ location: location });
    });
  };
  setDistanceFilter = () => {
    console.log("rn AMapLocationManagerImpl setDistanceFilter");
    this.distanseJudge = !this.distanseJudge;
    if (this.distanseJudge) {
      setDistanceFilter(0);
      this.setState({ distanceText: "setDistanceFilter(0) 设置定位的最小更新距离" });
    } else {
      setDistanceFilter(1);
      this.setState({ distanceText: "setDistanceFilter(1) 设置定位的最小更新距离" });
    }
    
  };
  setLocationTimeout = () => {
    console.log("rn AMapLocationManagerImpl setLocationTimeout");
    this.timeout5000 = !this.timeout5000;
    if (this.timeout5000) {
      setLocationTimeout(5000);
      this.setState({ timeoutText: "setLocationTimeout(5000) 设置请求定位超时时间" });
    } else {
      setLocationTimeout(10000);
      this.setState({ timeoutText: "setLocationTimeout(10000) 设置请求定位超时时间" });
    }
  };
  start = () => {
    console.log("rn AMapLocationManagerImpl start");
    start();
  };
  stop = () => {
    console.log("rn AMapLocationManagerImpl stop");
    stop();
  }
  onceLocation = () => {
    this.onceLocationJudge = !this.onceLocationJudge;
    if (this.onceLocationJudge) {
      setOnceLocation(true);
      this.setState({ onceText: "setOnceLocation(true) 设置单次定位", startText: "start 单次定位" });
    } else {
      setOnceLocation(false);
      this.setState({ onceText: "setOnceLocation(false) 设置单次定位", startText: "start 持续定位" });
    }
    console.log("rn AMapLocationManagerImpl current onceLocation:" + this.onceLocationJudge);
  };
  setInterval = () => {
    if (this.currInterval) {
      setInterval(2000);
      this.setState({ interval: "setInterval:2000" });
    } else {
      setInterval(10000);
      this.setState({ interval: "setInterval:10000" });
    }
    this.currInterval = !this.currInterval;
  }
  setNeedAddress = () => {
    this.needAddress = !this.needAddress;
    console.log("rn AMapLocationManagerImpl setNeedAddress:" + this.needAddress);
    if (this.needAddress) {
      setNeedAddress(true);
      this.setState({ needAddressText: "setNeedAddress(true)" });
    } else {
      setNeedAddress(false);
      this.setState({ needAddressText: "setNeedAddress(false)" });
    }
  }
  setLanguage = () => {
    // default = 0,chinese = 1, engilish=2;
    console.log("rn AMapLocationManagerImpl setLanguage");
    if (this.currLanguage == GeoLanguage.ZH) {
      this.currLanguage = GeoLanguage.EN;
      setGeoLanguage(GeoLanguage.EN);
      this.setState({ language: "setLanguage(engilish)" });
    } else {
      this.currLanguage = GeoLanguage.ZH;
      setGeoLanguage(GeoLanguage.ZH);
      this.setState({ language: "setLanguage(chinese)" });
    }

  }
  updateLocationState(location: any) {
    console.log("rn AMapLocationManagerImpl updateLocationState");
    if (location) {
      this.setState({ location: location });
      console.log(location);
    }
  }
  getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (position) => this.updateLocationState(position),
      (error) => this.updateLocationState(error)
    );
  };
  watchPosition = () => {
    if (!this.watchId) {
      this.watchId = Geolocation.watchPosition(
        (position) => this.updateLocationState(position),
        (error) => this.updateLocationState(error)
      );
      console.log("rn AMapLocationManagerImpl watchPosition watchId:" + this.watchId);
    }
  };
  clearWatch = () => {
    if (this.watchId) {
      console.log("rn AMapLocationManagerImpl clearWatch watchId:" + this.watchId);
      Geolocation.clearWatch(this.watchId);
      this.watchId = 0;
    }
    stop();
    this.setState({ location: null });
  };
  render() {
    const location = this.state.location;
    const needAddressText = this.state.needAddressText;
    const language = this.state.language;
    const currInterval = this.state.interval;
    const onceText = this.state.onceText;
    const startText = this.state.startText;
    const timeoutText = this.state.timeoutText;
    const distanceText = this.state.distanceText;
    return (
      <ScrollView contentContainerStyle={style.body}>
        <View style={style.button}>
          <Button onPress={this.init} title="init 初始化接口" />
        </View>
        <View style={style.button}>
          <Button onPress={this.addLocationListener} title="addLocationListener 设置监听回调,原生接口不设置监听回调,text不会显示数据" />
        </View>
        <View style={style.button}>
          <Button onPress={this.setDistanceFilter} title={distanceText} />
        </View>
        <View style={style.button}>
          <Button onPress={this.setLocationTimeout} title={timeoutText} />
        </View>
        <View style={style.button}>
          <Button onPress={this.onceLocation} title={onceText} />
        </View>
        <View style={style.button}>
          <Button onPress={this.start} title={startText} />
        </View>
        <View style={style.button}>
          <Button onPress={this.stop} title="stop 结束持续定位" />
        </View>
        <View style={style.button}>
          <Button onPress={this.setInterval} title={currInterval} />
        </View>
        <View style={style.button}>
          <Button onPress={this.setNeedAddress} title={needAddressText} />
        </View>
        <View style={style.button}>
          <Button onPress={this.setLanguage} title={language} />
        </View>
        <View style={style.button}>
          <Button onPress={this.getCurrentPosition} title="Geolocation.getCurrentPosition 获取当前位置，相当于单次请求" />
        </View>
        <View style={style.button}>
          <Button onPress={this.watchPosition} title="Geolocation.watchPosition 开启持续定位" />
        </View>
        <View style={style.button}>
          <Button onPress={this.clearWatch} title="Geolocation.clearWatch 结束持续定位" />
        </View>
        <Text style={style.result}>{`${JSON.stringify(location, null, 2)}`}</Text>
      </ScrollView>
    );
  }

}

export default AmapGeoLocationDemo;