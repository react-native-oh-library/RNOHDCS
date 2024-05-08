import React, { Component } from 'react';
import { Image, ScrollView, Text, View, TextInput, StyleSheet, Button, Alert, KeyboardAvoidingView} from 'react-native';

import { base64Data } from './utils'
import ImageEditor from '@react-native-community/image-editor';

export interface Props {
  // noop
}

interface Size {
  width: number;
  height: number;
}

interface State {
  offsetX: number | string;
  offsetY: number | string;
  sizeWidth:  number | string;
  sizeHeight:  number | string;
  displaySizeWidth:  number | string;
  displaySizeHeight: number | string;
  resizeMode: 'contain' | 'cover' | 'stretch'
  quality:  number | string;
  format?: 'png' | 'jpeg' | 'webp';
  photoUri: any;
  photoWidth: number;
  photoHeight: number;
  croppedImageURI: string | null;
  targetSize?: Size;
  defaultType?: string;
  filePath?: string | null;
  horizontal: boolean;
  cropHorizontal: boolean;
  remoteWidth: number;
  remoteHeight: number;
}

export class ImageCropperFull extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      offsetX: '0',
      offsetY: '0',
      sizeWidth:  '0',
      sizeHeight:  '0',
      displaySizeWidth: '0',
      displaySizeHeight: '0',
      resizeMode: 'cover',
      quality: '0.9',
      format: 'jpeg',
      photoUri: base64Data,
      photoWidth: 1080,
      photoHeight: 720,
      croppedImageURI: null,
      targetSize: {
        width: 0, height: 0
      },
      defaultType: 'base',
      filePath: null,
      horizontal: true,
      cropHorizontal: false,
      remoteWidth: 0,
      remoteHeight: 0
    }
    this.remoteImage()
  }

  remoteImage = () => {
    Image.getSize('https://octodex.github.com/images/OctoAsians_dex_Full.png', (width, height) => {
      this.setState({
        remoteWidth: width,
        remoteHeight: height
      })
    })
  }

  _formChange = (value, key) => {
    this.setState({
      [key]: value
    })
  }

  _changeType = (type: string): void => {
    let uri = base64Data
    let photoWidth: number = 1080
    let photoHeight: number = 720
    if(type === 'base') {
      uri = base64Data
      photoWidth = 1080
      photoHeight = 720
    }
    if(type === 'http') {
      uri = 'https://octodex.github.com/images/OctoAsians_dex_Full.png'
      photoWidth = this.state.remoteWidth || 896
      photoHeight = this.state.remoteHeight || 896
    }
    if(type === 'local') {
      uri = this.state.filePath
      photoWidth = this.state.targetSize?.width
      photoHeight = this.state.targetSize?.height
    }
    this.setState({
      defaultType: type,
      photoUri: uri,
      photoWidth,
      photoHeight
    })
  }

  _crop = async () => {
    let imageCropData = {
      offset: {x: parseFloat(this.state.offsetX), y: parseFloat(this.state.offsetY)},
      size: {width: parseFloat(this.state.sizeWidth), height: parseFloat(this.state.sizeHeight)},
      displaySize: {width: parseFloat(this.state.displaySizeWidth), height: parseFloat(this.state.displaySizeHeight)},
      resizeMode: this.state.resizeMode,
      quality: parseFloat(this.state.quality),
      format: this.state.format
    }
    if(imageCropData.size.width+imageCropData.offset.x > this.state.photoWidth || imageCropData.size.height+imageCropData.offset.y > this.state.photoHeight){
      Alert.alert('The cropped size exceeds the original size')
      return
    }
    const croppedImageURI = await ImageEditor.cropImage(
      this.state.photoUri,
      imageCropData
    );
    if (croppedImageURI) {
      this.setState({ 
        croppedImageURI,
        filePath: croppedImageURI,
        targetSize: {
          width: imageCropData.size.width,
          height: imageCropData.size.height
        }
      });
      if(imageCropData.displaySize && imageCropData.displaySize.width && imageCropData.displaySize.height) {
        const aspect = imageCropData.size.width / imageCropData.size.height
        const targetAspect = imageCropData.displaySize.width / imageCropData.displaySize.height
        if(aspect === targetAspect || this.state.resizeMode === 'stretch' || this.state.resizeMode === 'cover'){
          this.setState({
            targetSize: {
              width: imageCropData.displaySize.width,
              height: imageCropData.displaySize.height
            }
          });
        }
        if(this.state.resizeMode === 'contain'){
          if(targetAspect <= aspect) {
            this.setState({
              targetSize: {
                width: imageCropData.displaySize.width,
                height: Math.ceil(imageCropData.displaySize.width / aspect)
              }
            });
          } else {
            this.setState({
              targetSize: {
                height: imageCropData.displaySize.height,
                width: Math.ceil(imageCropData.displaySize.height * aspect)
              }
            });
          }
        }
      }

      if(this.state.targetSize.width >= this.state.targetSize.height){
        this.setState({
          cropHorizontal: true
        })
      } else {
        this.setState({
          cropHorizontal: false
        })
      }

    }
  }

  render() {
    const { offsetX, offsetY, sizeWidth, sizeHeight, resizeMode, quality, format, photoUri, photoWidth, photoHeight ,croppedImageURI, targetSize, defaultType, displaySizeWidth, displaySizeHeight, horizontal, cropHorizontal} = this.state
    return (
      <KeyboardAvoidingView behavior="position">
        <ScrollView>
          <Text>选择图片类型</Text>
          <View style={styles.flex}>
            <Button title="base64" onPress={()=>this._changeType('base')} color={defaultType==='base' ? 'green' : ''} />
            <Button title="远程图片" onPress={()=>this._changeType('http')} color={defaultType==='http' ? 'green' : ''} />
            <Button title="沙箱" onPress={()=>this._changeType('local')} color={defaultType==='local' ? 'green' : ''} />
          </View>

          <ScrollView style={{height: photoHeight}} horizontal={horizontal}>
            <Image source={{uri: photoUri}} style={{width: photoWidth, height: photoHeight}} />
          </ScrollView>
          {
            croppedImageURI ? 
            <ScrollView style={{height: targetSize?.height}} horizontal={cropHorizontal}>
              <Image source={{uri: croppedImageURI}} style={{width: targetSize?.width, height: targetSize?.height}} />
            </ScrollView> :
            <Text>未生成图片</Text>
          }

          <View style={styles.flex}>
            <Text>offset:</Text>
            <TextInput 
              style={styles.inputStyle} 
              value={offsetX} 
              inputMode="numeric" 
              placeholder="x" 
              onChangeText={(data) => {
                this._formChange(data, 'offsetX')
              }}
            />
            <TextInput 
              style={styles.inputStyle} 
              value={offsetY} 
              inputMode="numeric" 
              placeholder="y" 
              onChangeText={(data) => {
                this._formChange(data, 'offsetY')
              }}
            />
          </View>

          <View style={styles.flex}>
            <Text>size:</Text>
            <TextInput
              style={styles.inputStyle} 
              value={sizeWidth} 
              inputMode="numeric" 
              placeholder="width" 
              onChangeText={(data) => {
                this._formChange(data, 'sizeWidth')
              }}
            />
            <TextInput 
              style={styles.inputStyle} 
              value={sizeHeight} 
              inputMode="numeric" 
              placeholder="height" 
              onChangeText={(data) => {
                this._formChange(data, 'sizeHeight')
              }}
            />
          </View>

          <View style={styles.flex}>
            <Text>displaySize:</Text>
            <TextInput 
              style={styles.inputStyle} 
              value={displaySizeWidth} 
              inputMode="numeric" 
              placeholder="width" 
              onChangeText={(data) => {
                this._formChange(data, 'displaySizeWidth')
              }}
            />
            <TextInput 
              style={styles.inputStyle} 
              value={displaySizeHeight} 
              inputMode="numeric" 
              placeholder="height" 
              onChangeText={(data) => {
                this._formChange(data, 'displaySizeHeight')
              }}
            />
          </View>

          <View style={styles.flex}>
            <Text>resizeMode:</Text>
            <Button title="contain" onPress={()=>this._formChange('contain', 'resizeMode')} color={resizeMode==='contain' ? 'green' : ''} />
            <Button title="cover" onPress={()=>this._formChange('cover', 'resizeMode')} color={resizeMode==='cover' ? 'green' : ''} />
            <Button title="stretch" onPress={()=>this._formChange('stretch', 'resizeMode')} color={resizeMode==='stretch' ? 'green' : ''} />
            {/* <Button title="center" onPress={()=>this._formChange('center', 'resizeMode')} color={resizeMode==='center' ? 'green' : ''} /> */}
          </View>

          <View style={styles.flex}>
            <Text>quality:</Text>
            <Button title="0.3" onPress={()=>this._formChange('0.3', 'quality')} color={quality==='0.3' ? 'green' : ''} />
            <Button title="0.5" onPress={()=>this._formChange('0.5', 'quality')} color={quality==='0.5' ? 'green' : ''} />
            <Button title="0.9" onPress={()=>this._formChange('0.9', 'quality')} color={quality==='0.9' ? 'green' : ''} />
            <Button title="1.0" onPress={()=>this._formChange('1.0', 'quality')} color={quality==='1.0' ? 'green' : ''} />
          </View>

          <View style={styles.flex}>
            <Text>format:</Text>
            <Button title="jpeg" onPress={()=>this._formChange('jpeg', 'format')} color={format==='jpeg' ? 'green' : ''} />
            <Button title="png" onPress={()=>this._formChange('png', 'format')} color={format==='png' ? 'green' : ''} />
            <Button title="webp" onPress={()=>this._formChange('webp', 'format')} color={format==='webp' ? 'green' : ''} />
          </View>

          <View style={styles.button}>
            <Text>{ croppedImageURI }</Text>
            <Button title="确定" onPress={()=>this._crop()} />
          </View> 

        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 10
  },
  inputStyle: {
    width: 120,
    height: 35,
    padding: 5,
    borderRadius: 8,
    margin: 5,
    color: 'black',
    fontSize: 12,
    borderColor: 'black',
    borderWidth: 1
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})