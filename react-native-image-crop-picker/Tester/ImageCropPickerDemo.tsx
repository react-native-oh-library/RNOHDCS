import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from "react-native";
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import ImagePicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';

export function ImageCropPickerDemo() {
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);

  const renderVideo = (video) => {
    console.log('rendering video');
    return (
      <View style={{ width: 120, height: 200 }}>
        <Video
          source={{ uri: video.uri, type: video.mime }}
          style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
          rate={1}
          paused={false}
          volume={1}
          muted={false}
          resizeMode={'cover'}
          onError={(e) => console.log(e)}
          onLoad={(load) => console.log(load)}
          repeat={true}
        />
      </View>
    );
  }
  const renderImage = (image) => {
    return (
      <Image
        style={{ width: 120, height: 200, resizeMode: 'contain' }}
        source={image}
      />
    );
  }
  const renderAsset = (image) => {
    if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
      return renderVideo(image);
    }

    return renderImage(image);
  }
  const renderProps = (image) => {
    return Object.entries(image).map(([key, value]) => (<View style={{ backgroundColor: "#000" }} key={`${key}${value}`}>
      <Text style={{ fontWeight: 'bold', color: "orange" }}>{JSON.stringify(key)}</Text>
      <Text style={{ color: "orange" }}>{JSON.stringify(value)}</Text>
    </View>))
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ maxHeight: 210 }} horizontal >
        <View style={{ height: 200, width: 'auto', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
          {image ? renderAsset(image) : null}
          {images ? images.map((i, ind) => (<View key={`${i.uri}${ind}`}>{renderAsset(i)}</View>)) : null}
        </View>
      </ScrollView>

      <ScrollView style={{ flex: 1 }}>
        <Tester>
          <TestSuite name="openPicker">
            <TestCase
              itShould="openPicker cropping: false"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="cropping: false"
                      onPress={() => {
                        ImagePicker.openPicker({
                          width: 160,
                          height: 200,
                          cropping: false
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openPicker cropping: true"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="cropping: true"
                      onPress={() => {
                        ImagePicker.openPicker({
                          width: 160,
                          height: 200,
                          cropping: true
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openPicker width: 100"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="width: 100"
                      onPress={() => {
                        ImagePicker.openPicker({
                          width: 100,
                          height: 200,
                          cropping: true
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openPicker width: 200"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="width: 200"
                      onPress={() => {
                        ImagePicker.openPicker({
                          width: 200,
                          height: 200,
                          cropping: true
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openPicker height: 200"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="height: 200"
                      onPress={() => {
                        ImagePicker.openPicker({
                          width: 200,
                          height: 200,
                          cropping: true
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openPicker height: 300"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="height: 300"
                      onPress={() => {
                        ImagePicker.openPicker({
                          width: 200,
                          height: 300,
                          cropping: true
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openPicker multiple: false (openPicker only)"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="multiple: false"
                      onPress={() => {
                        ImagePicker.openPicker({ multiple: false }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openPicker multiple: true (openPicker only)"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="multiple: true"
                      onPress={() => {
                        ImagePicker.openPicker({ multiple: true }).then(image => {
                          const imgs = image.map((i) => ({ ...i, uri: i.path }))
                          setImages(imgs)
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openPicker writeTempFile: true"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="writeTempFile: true"
                      onPress={() => {
                        ImagePicker.openPicker({
                          writeTempFile: true
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openPicker writeTempFile: false"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="writeTempFile: false"
                      onPress={() => {
                        ImagePicker.openPicker({
                          writeTempFile: false
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openPicker includeBase64: false"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="includeBase64: false"
                      onPress={() => {
                        ImagePicker.openPicker({
                          includeBase64: false
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openPicker includeBase64: true"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="includeBase64: true"
                      onPress={() => {
                        ImagePicker.openPicker({
                          includeBase64: true
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openPicker includeExif: true"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="includeExif: true"
                      onPress={() => {
                        ImagePicker.openPicker({
                          includeExif: true
                        }).then(image => {
                          console.log('includeExif image', image);
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openPicker includeExif: false"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="includeExif: false"
                      onPress={() => {
                        ImagePicker.openPicker({
                          includeExif: false
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openPicker maxFiles: 2 (openPicker only)"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="multiple maxFiles: 2"
                      onPress={() => {
                        ImagePicker.openPicker({
                          multiple: true,
                          maxFiles: 2
                        }).then(image => {
                          const imgs = image.map((i) => ({ ...i, uri: i.path }))
                          setImages(imgs)
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openPicker maxFiles: 3 (openPicker only)"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="multiple maxFiles: 3"
                      onPress={() => {
                        ImagePicker.openPicker({
                          multiple: true,
                          maxFiles: 3
                        }).then(image => {
                          const imgs = image.map((i) => ({ ...i, uri: i.path }))
                          setImages(imgs)
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openPicker maxFiles default (openPicker only)"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="multiple maxFiles default"
                      onPress={() => {
                        ImagePicker.openPicker({
                          multiple: true
                        }).then(image => {
                          const imgs = image.map((i) => ({ ...i, uri: i.path }))
                          setImages(imgs)
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openPicker mediaType: 'video' (openPicker only)"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="mediaType: 'video'"
                      onPress={() => {
                        ImagePicker.openPicker({
                          mediaType: 'video'
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openPicker mediaType: 'photo' (openPicker only)"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="mediaType: 'photo'"
                      onPress={() => {
                        ImagePicker.openPicker({
                          mediaType: 'photo'
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openPicker mediaType: 'any' (openPicker only)"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="mediaType: 'any'"
                      onPress={() => {
                        ImagePicker.openPicker({
                          mediaType: 'any'
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openPicker forceJpg: true"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="forceJpg: true"
                      onPress={() => {
                        ImagePicker.openPicker({
                          forceJpg: true
                        }).then(image => {
                          console.log('image ====== ', image);
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openPicker forceJpg: false"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="forceJpg: false"
                      onPress={() => {
                        ImagePicker.openPicker({
                          forceJpg: false
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
          </TestSuite>

          <TestSuite name="openCropper">
            <TestCase
              itShould="openCropper freeStyleCropEnabled: true"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="freeStyleCropEnabled: true"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri,
                          freeStyleCropEnabled: true,
                          width: 200,
                          height: 300
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCropper freeStyleCropEnabled: false"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="freeStyleCropEnabled: false"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri,
                          freeStyleCropEnabled: false,
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCropper cropperToolbarTitle 1"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="cropperToolbarTitle: Edit Photo"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri,
                          cropperToolbarTitle: "Edit Photo",
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCropper cropperToolbarTitle 2"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="cropperToolbarTitle: Test Toolbar"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri,
                          cropperToolbarTitle: "Test Toolbar",
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCropper compressImageQuality"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="compressImageQuality 0.1"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri,
                          compressImageQuality: 0.1
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCropper compressImageQuality 2"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="compressImageQuality 0.8"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri,
                          compressImageQuality: 0.8
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCropper showCropGuidelines: false"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="showCropGuidelines: false"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri,
                          showCropGuidelines: false
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCropper showCropGuidelines: true"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="showCropGuidelines: true"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri,
                          showCropGuidelines: true
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCropper showCropFrame: true"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="showCropFrame: true"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri,
                          showCropFrame: true
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCropper showCropFrame: false"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="showCropFrame: false"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri,
                          showCropFrame: false
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCropper enableRotationGesture: false"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="enableRotationGesture: false"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri,
                          enableRotationGesture: false
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCropper enableRotationGesture: true"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="enableRotationGesture: true"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri,
                          enableRotationGesture: true
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCropper cropperChooseText default"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="cropperChooseText default"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCropper cropperChooseText 1"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="cropperChooseText: choose1"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri,
                          cropperChooseText: "choose1"
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCropper cropperChooseText 2"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="cropperChooseText: select"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri,
                          cropperChooseText: "select"
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCropper cropperChooseColor default"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="cropperChooseColor default"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCropper cropperChooseColor"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="cropperChooseColor: #8b4513"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri,
                          cropperChooseColor: "#8b4513"
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCropper cropperChooseColor 2"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="cropperChooseColor: #ffc0cb"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri,
                          cropperChooseColor: "#ffc0cb"
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCropper cropperCancelText default"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="cropperCancelText default"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCropper cropperCancelText 1"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="cropperCancelText: cancel1"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri,
                          cropperCancelText: "cancel1"
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCropper cropperCancelText 2"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="cropperCancelText: giveup"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri,
                          cropperCancelText: "giveup"
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCropper cropperCancelColor default"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="cropperCancelColor default"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCropper cropperCancelColor 1"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="cropperCancelColor: #8b4513"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri,
                          cropperCancelColor: "#8b4513"
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCropper cropperCancelColor 2"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="cropperCancelColor: #0000ff"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri,
                          cropperCancelColor: "#0000ff"
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCropper cropperRotateButtonsHidden: false"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="cropperRotateButtonsHidden: false"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri,
                          cropperRotateButtonsHidden: false
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCropper cropperRotateButtonsHidden: true"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="cropperRotateButtonsHidden: true"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCropper({
                          path: image.uri,
                          cropperRotateButtonsHidden: true
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
          </TestSuite>

          <TestSuite name="openCamera">
            <TestCase
              itShould="openCamera useFrontCamera: true (openCamera only)"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="useFrontCamera: true"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCamera({
                          useFrontCamera: true
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="openCamera useFrontCamera: false (openCamera only)"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="useFrontCamera: false"
                      onPress={() => {
                        if (!image?.uri) return;
                        ImagePicker.openCamera({
                          useFrontCamera: false
                        }).then(image => {
                          setImage({ ...image, uri: image.path })
                          setState(true)
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
          </TestSuite>

          <TestSuite name="clean (no Options)">
            <TestCase
              itShould="clean default"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="clean"
                      onPress={() => {
                        ImagePicker.clean().then(() => {
                          setImage(null)
                          setImages([])
                          setState(true)
                        }).catch(e => {
                          alert(e);
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
            <TestCase
              itShould="cleanSingle(path)"
              initialState={undefined as any}
              arrange={({ setState }) => {
                return (
                  <View style={styles.viewBos}>
                    <Button
                      title="cleanSingle"
                      onPress={() => {
                        if (!image?.path) return
                        ImagePicker.cleanSingle(image.path).then(() => {
                          setImage(null)
                          setState(true)
                        }).catch(e => {
                          alert(e);
                        });
                      }}
                    />
                  </View>
                );
              }}
              assert={({ expect, state }) => { expect(state).to.be.true }}
            />
          </TestSuite>
        </Tester>
        <View>
          {image ? renderProps(image) : null}
        </View>
      </ScrollView>
    </View >
  )
}

const styles = StyleSheet.create({
  viewBos: {
    gap: 5,
    padding: 5
  }
})