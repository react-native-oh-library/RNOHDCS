
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import SYImagePicker from "react-native-syan-image-picker";

const {width} = Dimensions.get('window');

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  handleOpenImagePicker = () => {
    SYImagePicker.showImagePicker(
        {
          imageCount: 1,
          isRecordSelected: true,
          isCrop: true,
          showCropCircle: true,
          quality: 90,
          compress: true,
          enableBase64: false,
        },
        (err, photos) => {
          console.log('handleAsyncSelectPhoto showImagePicker', err, photos);
          if (!err) {
            this.setState({
              photos,
            });
          } else {
            console.log(err);
          }
        },
    );
  };

  /**
   * 使用方式sync/await
   * 相册参数暂时只支持默认参数中罗列的属性；
   * @returns {Promise<void>}
   */
  handleAsyncSelectPhoto = async () => {
    SYImagePicker.removeAllPhoto();
    this.setState({ photos: [] });
    try {
      const photos = await SYImagePicker.asyncShowImagePicker({
        imageCount: 8,
        showSelectedIndex: false,
        isGif: true,
        enableBase64: true,
      });
      console.log('handleAsyncSelectPhoto asyncShowImagePicker', photos);
      // 选择成功
      this.setState({
        photos: [...this.state.photos, ...photos],
      });
    } catch (err) {
      console.log(err);
      // 取消选择，err.message为"取消"
    }
  };

  handlePromiseSelectPhoto = () => {
    this.setState({ photos: [] });    
    SYImagePicker.asyncShowImagePicker({imageCount: 3})
        .then(photos => {
          console.log(photos);
          const arr = photos.map(v => {
            return v;
          });
          // 选择成功
          this.setState({
            photos: [...this.state.photos, ...arr],
          });
        })
        .catch(err => {
          // 取消选择，err.message为"取消"
        });
  };

  handleLaunchCamera = async () => {
    SYImagePicker.openCamera(
        {isCrop: true, showCropCircle: true, showCropFrame: false},
        (err, photos) => {
          console.log("openCamera",err, photos);
          if (!err) {
            this.setState({
              photos: [...this.state.photos, ...photos],
            });
          }
        },
    );
  };

  handleDeleteCache = () => {
    SYImagePicker.deleteCache();
  };

  handleOpenVideoPicker = () => {
    SYImagePicker.openVideoPicker(
        {allowPickingMultipleVideo: true},
        (err, res) => {
          console.log(err, res);
          if (!err) {
            let photos = [...this.state.photos];
            res.map(v => {
              photos.push({...v, uri: v.coverUri});
            });
            this.setState({
              photos,
            });
            console.log("RN App receive openVideoPicker result: ",JSON.stringify(photos));
          }
        },
    );
  };

  render() {
    const {photos} = this.state;
    return (
        <View style={styles.container}>
          <View style={styles.scroll}>
            <Button title={'拍照'} onPress={this.handleLaunchCamera} />
            <Button title={'开启压缩'} onPress={this.handleOpenImagePicker} />
            <Button title={'关闭压缩'} onPress={this.handleAsyncSelectPhoto} />
            <Button
                title={'选择照片(Promise)带base64'}
                onPress={this.handlePromiseSelectPhoto}
            />
            <Button title={'缓存清除'} onPress={this.handleDeleteCache} />
            <Button title={'选择视频'} onPress={this.handleOpenVideoPicker} />
          </View>
          <ScrollView style={{flex: 1}} contentContainerStyle={styles.scroll}>
          {photos.map((item, index) => {
                        let source = { uri: item.uri };
                        if (item.enableBase64) {
                            source = { uri: item.base64 };
                        }
                        return (
                            <Image
                                key={`image-${index}`}
                                style={styles.image}
                                source={source}
                                resizeMode={'contain'}
                            />
                        );
                })}
          </ScrollView>
        </View>
    );
  }
}

const Button = ({title, onPress}) => {
  return (
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={{color: '#fff', fontSize: 16}}>{title}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 40,
  },
  btn: {
    backgroundColor: '#FDA549',
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    paddingHorizontal: 12,
    margin: 5,
    borderRadius: 22,
  },
  scroll: {
    padding: 5,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  image: {
    margin: 10,
    width: (width - 80) / 3,
    height: (width - 80) / 3,
    backgroundColor: '#F0F0F0',
  },
});
