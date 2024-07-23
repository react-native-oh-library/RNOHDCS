import {TestSuite, Tester,TestCase} from '@rnoh/testerino';
import * as React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar
} from "react-native";
import SyanImagePicker from "react-native-syan-image-picker";
function RNSyanImagePickerTest() {
    return (
     <TestSuite name="SyanImagePicker">
        <TestCase
          tags={['C_API']}
          itShould="SyanImagePicker  imageCount"
          fn={({expect}:any) => {
              expect(SyanImagePicker.imageCount).to.undefined;
          }}
        />
        <TestCase
          tags={['C_API']}
          itShould="SyanImagePicker  isCamera"
          fn={({expect}:any) => {
              expect(SyanImagePicker.isCamera).to.be.undefined;
          }}
        />
        <TestCase
          tags={['C_API']}
          itShould="SyanImagePicker isCrop"
          fn={({expect}:any) => {
              expect(SyanImagePicker.isCrop).to.be.undefined;
            }} 
        />
        <TestCase
          tags={['C_API']}
          itShould="SyanImagePicker compress"
          fn={({expect}:any) => {
              expect(SyanImagePicker.compress).to.be.undefined;
            }} 
        />
        <TestCase
          tags={['C_API']}
          itShould="SyanImagePicker quality"
          fn={({expect}:any) => {
              expect(SyanImagePicker.quality).to.be.undefined;
            }} 
        />
        <TestCase
          tags={['C_API']}
          itShould="SyanImagePicker enableBase64"
          fn={({expect}:any) => {
              expect(SyanImagePicker.enableBase64).to.be.undefined;
            }} 
        />
        <TestCase
          tags={['C_API']}
          itShould="SyanImagePicker videoCount"
          fn={({expect}:any) => {
              expect(SyanImagePicker.videoCount).to.be.undefined;
            }} 
        />
        <TestCase
          tags={['C_API']}
          itShould="SyanImagePicker allowPickingMultipleVideo"
          fn={({expect}:any) => {
              expect(SyanImagePicker.allowPickingMultipleVideo).to.be.undefined;
            }} 
        />

        <TestCase
          tags={['C_API']}
          itShould="SyanImagePicker width"
          fn={({expect}:any) => {
              expect(SyanImagePicker.width).to.be.undefined;
            }} 
        />
        <TestCase
          tags={['C_API']}
          itShould="SyanImagePicker height"
          fn={({expect}:any) => {
              expect(SyanImagePicker.height).to.be.undefined;
            }} 
        />
        <TestCase
          tags={['C_API']}
          itShould="SyanImagePicker  original_uri"
          fn={({expect}:any) => {
              expect(SyanImagePicker.original_uri).to.be.undefined;
            }} 
        />
        <TestCase
          tags={['C_API']}
          itShould="SyanImagePicker uri"
          fn={({expect}:any) => {
              expect(SyanImagePicker.uri).to.be.undefined;
            }} 
        />
 <TestCase
          tags={['C_API']}
          itShould="SyanImagePicker type"
          fn={({expect}:any) => {
              expect(SyanImagePicker.type).to.be.undefined;
            }} 
        />
        <TestCase
          tags={['C_API']}
          itShould="SyanImagePicker size"
          fn={({expect}:any) => {
              expect(SyanImagePicker.size).to.be.undefined;
            }} 
        />
        <TestCase
          tags={['C_API']}
          itShould="SyanImagePicker base64"
          fn={({expect}:any) => {
              expect(SyanImagePicker.base64).to.be.undefined;
            }} 
        />

        <TestCase
         itShould="SyanImagePicker.showImagePicker"
         fn={({expect}: any) => {
            let showImagePicker =  SyanImagePicker.showImagePicker( {
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
                expect(showImagePicker).to.be.undefined;
              } else {
                expect(err).to.not.be.undefined;
              }
            },);
           
        }}
      />
      <TestCase
         itShould="SyanImagePicker.asyncShowImagePicker"
         fn={({expect}: any) => {
          try {
            let asyncShowImagePicker =  SyanImagePicker.asyncShowImagePicker({imageCount: 3});
            expect(asyncShowImagePicker).to.be.instanceOf(Array);
          } catch (error) {
            expect((error)).to.not.be.undefined;
          } 
           
        }}
      />

      <TestCase
         itShould="SyanImagePicker.openCamera"
         fn={({expect}: any) => {
            let openCamera =  SyanImagePicker.openCamera({isCrop: true, showCropCircle: true, showCropFrame: false},
              (err, photos) => {
                console.log("openCamera",err, photos);
                if (!err) {
                  expect(openCamera).to.be.undefined;
                }
              },);
        }}
      />
       <TestCase
         itShould="SyanImagePicker.asyncOpenCamera"
         fn={({expect}: any) => {
            try {
              let asyncOpenCamera =  SyanImagePicker.asyncOpenCamera({
              
                imageCount: 8,
                showSelectedIndex: false,
                isGif: true,
                enableBase64: true,
              });
              expect(asyncOpenCamera).to.be.instanceOf(Array);
            } catch (error) {
              expect((error)).to.not.be.undefined;
            } 
        }}
      />
      <TestCase
         itShould="SyanImagePicker.deleteCache"
         fn={({expect}: any) => {
          try {
            let deleteCache =  SyanImagePicker.deleteCache();
            expect(deleteCache).to.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          } 

        }}
      />
      <TestCase
         itShould="SyanImagePicker.removePhotoAtIndex"
         fn={({expect}: any) => {
          try {
            let removePhotoAtIndex =  SyanImagePicker.removePhotoAtIndex(1);
            expect(removePhotoAtIndex).to.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          } 

        }}
      />
      <TestCase
         itShould="SyanImagePicker.removeAllPhoto"
         fn={({expect}: any) => {
          try {
            let removeAllPhoto =  SyanImagePicker.removeAllPhoto();
            expect(removeAllPhoto).to.be.undefined;
          } catch (error) {
            expect((error)).to.not.be.undefined;
          }
        }}
      />
      <TestCase
         itShould="SyanImagePicker.openVideoPicker"
         fn={({expect}: any) => {
            let openVideoPicker =  SyanImagePicker.openVideoPicker( {allowPickingMultipleVideo: true},
              (err, res) => {
                console.log(err, res);
                if (!err) {
                  expect(openVideoPicker).to.be.instanceOf(Array);
                }
              });
        }}
      />
      </TestSuite>
    
    );
  }
function App() {
    return (
      <View>
      <StatusBar />
      <SafeAreaView style={{backgroundColor: '#222'}}>
          <Tester >
            <ScrollView style={{width: '100%'}}>
              <RNSyanImagePickerTest/>
              
            </ScrollView>
          </Tester>
      </SafeAreaView>
    </View>
    );
  }
  
  export default App;