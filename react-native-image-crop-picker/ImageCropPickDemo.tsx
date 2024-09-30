import ImagePicker from 'react-native-image-corp-picker';
import {openPicker} from 'react-native-image-corp-picker';
import React, {useState} from 'react';
import {Text,StyleSheet,TextInput, View, Button, ScrollView,Switch} from 'react-native'

const ImageCropPickDemo =()=>{
   const TAG:string='ImageCropPickTurboModule';
   const [vulue1,onChangeText1]=useState('');
   const [vulue,onChangeText]=useState('');
   const [maxFiles,setMaxFiles]=useState('');
   const [imageQuality,setImageQuality]=useState('');
   const [imagePath,setImagePath]=useState('');
   const [clearImagePath,setClearImagePath]=useState('');
   const [cropperTitle,setCropperTitle]=useState('');
   const [chooseText,setChooseText]=useState('');
   const [chooseColor,setChooseColor]=useState('');
   const [cancelText,setCancelText]=useState('');
   const [cancelColor,setCancelColor]=useState('');
   const [cropperRotate,setCropperRotate]=useState(false);
   const [showCropGuidelines,setShowCropGuidelines]=useState(false);
   const [showCropFrame,setShowCropFrame]=useState(true);
   const [multiple,setMultiple]=useState(false);
   const [includeExif,setIncludeExif]=useState(false);
   const [includeExifCamera,setIncludeExifCamera]=useState(false);
   const [avoidEmptySpace,setAvoidEmptySpace]=useState(false);
   const [writeTempFile,setWriteTempFile]=useState(true);
   const [includeBase64,setIncludeBase64]=useState(false);
   const [freeStyleCropEnable,setFreeStyleCropEnable]=useState(false);
   const [forceJpg,setForceJpg]=useState(false);
   const [showsSelecteCount,setShowsSelecteCount]=useState(true);
   const [selecteButton,setSelecteButton]=useState('any');

   const [useFrontCamera,setUseFrontCamera]=useState(false);
   const [croppingCamera,setCroppingCamera]=useState(false);
   const [writeTempFileCamera,setTempFileCamera]=useState(true);
   const [includeBase64Camera,setBase64Camera]=useState(false);
   const [includeExitfCamera,setIncludeExitfCamera]=useState(false);
   const [avoidEmptySpaceCamera,setAvoidEmptySpaceCamera]=useState(false);
   const [freeStyleCropEnableCamera,setFreeStyleCropEnableCamera]=useState(false);
   const [forceJpgCamera,setForceJpgCamera]=useState(false);
   const [mediaTypeCamera,setMediaTypeCamera]=useState('any');
   const [imageQualityCamera,setImageQualityCamera]=useState('');
   const [cropperTitleCamera,setCropperTitleCamera]=useState('');
   const [chooseTextCamera,setChooseTextCamera]=useState('');
   const [chooseColorCamera,setChooseColorCamera]=useState('');
   const [cropperRotateCamera,setCropperRotateCamera]=useState(false);
   const [showCropGuidelinesCamera,setShowCropGuidelinesCamera]=useState(true);
   const [showCropFrameCamera,setShowCropFrameCamera]=useState(true);
   const [writeTempFileCropper,setTempFileCropper]=useState(true);
   const [forceJpgCropper,setForceJpgCropper]=useState(false);

   const [includeBase64Cropper,setBase64Cropper]=useState(false);
   const [includeExitfCropper,setExitfCropper]=useState(false);
   const [avoidEmptySpaceCropper,setAvoidEmptySpaceCropper]=useState(false);
   const [freeStyleCropEnableCropper,setFreeStyleCropEnableCropper]=useState(false);
   const [imageQualityCropper,setimageQualityCropper]=useState('');
   const [cancelTextCamera,setCancelTextCamera] = useState('');
   const [cancelColorCamera,setCancelColorCanera] = useState('');
   
   const handleButtonPress = (buttonName)=>{
          setSelecteButton(buttonName)
   }
   const handleMediaType =(buttonName)=>{
          setMediaTypeCamera(buttonName)
   } 
   return (
       <ScrollView style={StyleSheet.container}>
          <Text style={styles.TextInputBox}>相机、图库、裁剪功能：</Text>
          <View style={styles.container}>
                  <View style={styles.TextInputBox}>
                        <Text style={styles.inputLable}>multiple:</Text>
                        <Button title={`${multiple}`}  
                         onPress={()=>{
                          multiple?setMultiple(false):setMultiple(true)
                         }}></Button>
                         <Text style={styles.inputLable}>writeTempFile:</Text>
                         <Button title={`${writeTempFile}`}  
                         onPress={()=>{
                          writeTempFile?setWriteTempFile(false):setMultiple(true)
                         }}></Button>
                  </View>
                  <View style={styles.TextInputBox}>
                       <Text style={styles.inputLable}>includeBase64:</Text>
                        <Button title={`${includeBase64}`}  
                         onPress={()=>{
                          includeBase64?setIncludeBase64(false):setIncludeBase64(true)
                         }}></Button>
                         <Text style={styles.inputLable}>includeExif:</Text>
                         <Button title={`${includeExif}`}  
                         onPress={()=>{
                          includeExif?setIncludeExif(false):setIncludeExif(true)
                         }}></Button>
                  </View>
                  <View style={styles.TextInputBox}>
                       <Text style={styles.inputLable}>avoidEmptySpaceAroundImage:</Text>
                        <Button title={`${avoidEmptySpace}`}  
                         onPress={()=>{
                          avoidEmptySpace?setAvoidEmptySpace(false):setAvoidEmptySpace(true)
                         }}></Button>
                         <Text style={styles.inputLable}>freeStyleCropEnable:</Text>
                         <Button title={`${freeStyleCropEnable}`}  
                         onPress={()=>{
                          freeStyleCropEnable?setFreeStyleCropEnable(false):setFreeStyleCropEnable(true)
                         }}></Button>
                  </View>
                  <View style={styles.TextInputBox}>
                       <Text style={styles.inputLable}>forceJpg:</Text>
                        <Button title={`${forceJpg}`}  
                         onPress={()=>{
                          forceJpg?setForceJpg(false):setForceJpg(true)
                         }}></Button>
                         <Text style={styles.inputLable}>showsSelecteCount:</Text>
                         <Button title={`${showsSelecteCount}`}  
                         onPress={()=>{
                          showsSelecteCount?setShowsSelecteCount(false):setShowsSelecteCount(true)
                         }}></Button>
                  </View>
                  <View style={styles.TextInputBox}>
                       <Text style={styles.inputLable}>mediaType:</Text>
                        <Button title='photo' 
                         onPress={()=>handleButtonPress('photo')}
                         accessibilityState={{selected:selecteButton === 'photo'}}
                         ></Button>
                         
                         <Button title='video'
                           onPress={()=>handleButtonPress('video')}
                           accessibilityState={{selected:selecteButton === 'video'}}
                       ></Button>
                       <Button title='any'
                           onPress={()=>handleButtonPress('any')}
                           accessibilityState={{selected:selecteButton === 'any'}}
                       ></Button>
                  </View>
                  <View style={styles.TextInputBox}>
                     <Text style={{color:'red'}}>mediaType is {selecteButton}</Text>
                  </View>
                  <View style={styles.TextInputBox}>
                    <Text style={styles.inputLable}>minFiles:</Text>
                    <Text style={styles.inputLable}>1:</Text>
                  </View>
                  <View style={styles.TextInputBox}>
                    <Text style={styles.inputLable}>maxFiles:</Text>
                    <TextInput 
                       keyboardType="numeric"
                       maxLength={1}
                       style={styles.numberInput}
                       onChangeText={setMaxFiles}
                       value={maxFiles}
                    ></TextInput>
                    <Text style={styles.lableType}>(number)</Text>
                  </View>
                  <View style={styles.TextInputBox}>
                    <Text style={styles.inputLable}>compressImageQuality:</Text>
                    <TextInput 
                       keyboardType="numeric"
                       value={imageQuality}
                       style={styles.numberInput}
                       onChangeText={setImageQuality}
                    ></TextInput>
                    <Text style={styles.lableType}>(0.1 到 1)</Text>
                  </View>
                  <View >
                       <View style={styles.bottonSty}>
                       <Button title='openPicker(打开图库)'
                           onPress={ ()=>{
                            openPicker({
                                multiple:multiple,
                                writeTempFile:writeTempFile,
                                includeBase64:includeBase64,
                                includeExif:includeExif,
                                avoidEmptySpaceAroundImage:avoidEmptySpace,
                                freeStyleCropEnable:freeStyleCropEnable,
                                forceJpg:forceJpg,
                                showsSelecteCount:showsSelecteCount,
                                mediaType:selecteButton,
                                minFiles:1,
                                maxFiles:maxFiles,
                                compressImageQuality:imageQuality
                               }).then((image=>{
                              console.log(TAG + 'openPicker result' +JSON.stringify(image))
                            }))
                           }}
                       ></Button>

                       </View>
                  </View>
                  <View style={styles.TextInputBox}>
                        <Text style={styles.inputLable}>cropping:</Text>
                        <Button title={`${croppingCamera}`}  
                         onPress={()=>{
                          croppingCamera?setCroppingCamera(false):setCroppingCamera(true)
                         }}></Button>
                         <Text style={styles.inputLable}>writeTempFile:</Text>
                         <Button title={`${writeTempFileCamera}`}  
                         onPress={()=>{
                          writeTempFileCamera?setTempFileCamera(false):setTempFileCamera(true)
                         }}></Button>
                  </View>
                  <View style={styles.TextInputBox}>
                        <Text style={styles.inputLable}>includeBase64:</Text>
                        <Button title={`${includeBase64Camera}`}  
                         onPress={()=>{
                          croppingCamera?setCroppingCamera(false):setCroppingCamera(true)
                         }}></Button>
                         <Text style={styles.inputLable}>writeTempFile:</Text>
                         <Button title={`${writeTempFileCamera}`}  
                         onPress={()=>{
                          writeTempFileCamera?setTempFileCamera(false):setTempFileCamera(true)
                         }}></Button>
                  </View>
                  <View style={styles.TextInputBox}>
                        <Text style={styles.inputLable}>cropping:</Text>
                        <Button title={`${croppingCamera}`}  
                         onPress={()=>{
                          croppingCamera?setCroppingCamera(false):setCroppingCamera(true)
                         }}></Button>
                         <Text style={styles.inputLable}>writeTempFile:</Text>
                         <Button title={`${writeTempFileCamera}`}  
                         onPress={()=>{
                          writeTempFileCamera?setTempFileCamera(false):setTempFileCamera(true)
                         }}></Button>
                  </View>
                  <View style={styles.TextInputBox}>
                        <Text style={styles.inputLable}>includeBase64</Text>
                        <Button title={`${includeBase64Camera}`}  
                         onPress={()=>{
                          includeBase64Camera?setBase64Camera(false):setBase64Camera(true)
                         }}></Button>
                         <Text style={styles.inputLable}>includeExif:</Text>
                         <Button title={`${includeExifCamera}`}  
                         onPress={()=>{
                          includeExifCamera?setIncludeExifCamera(false):setIncludeExifCamera(true)
                         }}></Button>
                  </View>
                  <View style={styles.TextInputBox}>
                        <Text style={styles.inputLable}>avoidEmptySpaceAroundImage:</Text>
                        <Button title={`${avoidEmptySpaceCamera}`}  
                         onPress={()=>{
                          includeBase64Camera?setBase64Camera(false):setBase64Camera(true)
                         }}></Button>
                         <Text style={styles.inputLable}>includeExif:</Text>
                         <Button title={`${freeStyleCropEnableCamera}`}  
                         onPress={()=>{
                          freeStyleCropEnableCamera?setFreeStyleCropEnableCamera(false):setFreeStyleCropEnableCamera(true)
                         }}></Button>
                  </View>
                  <View style={styles.TextInputBox}>
                        <Text style={styles.inputLable}>useFrontCamera:</Text>
                        <Button title={`${useFrontCamera}`}  
                         onPress={()=>{
                          useFrontCamera?setUseFrontCamera(false):setUseFrontCamera(true)
                         }}></Button>
                         <Text style={styles.inputLable}>includeExif:</Text>
                         <Button title={`${forceJpgCamera}`}  
                         onPress={()=>{
                          forceJpgCamera?setForceJpgCamera(false):setForceJpgCamera(true)
                         }}></Button>
                  </View>
                  <View style={styles.TextInputBox}>
                        <Text style={styles.inputLable}>mediaType:</Text>
                        <Button 
                          title="photo"  
                          onPress={()=>handleMediaType('photo')}
                          accessibilityState={{ selected: mediaTypeCamera === 'photo' }}
                         />
                         <Button 
                          title="video"  
                          onPress={()=>handleMediaType('video')}
                          accessibilityState={{ selected: mediaTypeCamera === 'video' }}
                         />
                         <Button 
                          title="any"  
                          onPress={()=>handleMediaType('any')}
                          accessibilityState={{ selected: mediaTypeCamera === 'any' }}
                         />     
                  </View>

                  <View style = {styles.TextInputBox}>
                    <Text style={{color:'red'}}>mediaType is {mediaTypeCamera}</Text>
                  </View>
                  <View style = {styles.TextInputBox}>
                    <Text style={styles.inputLable}>compressImageQuality:</Text>
                    <TextInput
                      style={styles.numberInput}
                      onChangeText={setImageQualityCamera}
                      value={imageQualityCamera}
                    />
                    <Text style={styles.lableType}>(0.1到1)</Text>
                  </View>

                  <View style = {styles.TextInputBox}>
                    <Text style={styles.textLable}>cropperToolbarTitle:</Text>
                  </View>
                  <View style = {styles.TextInputBox}>
                    <TextInput
                      style={styles.textInput}
                      maxLength={5}
                      onChangeText={(value) => setCropperTitleCamera(value)}
                      value={cropperTitleCamera}
                    />
                  </View>

                  <View style = {styles.TextInputBox}>
                    <Text style={styles.textLable}>cropperChooseText:</Text>
                  </View>
                  <View style = {styles.TextInputBox}>
                    <TextInput
                      style={styles.textInput}
                      maxLength={5}
                      onChangeText={(value) => setChooseTextCamera(value)}
                      value={chooseTextCamera}
                    />
                  </View>

                  <View style = {styles.TextInputBox}>
                    <Text style={styles.textLable}>cropperChooseColor:例如 #FF0000</Text>
                  </View>
                  <View style = {styles.TextInputBox}>
                    <TextInput
                      style={styles.textInput}
                      maxLength={7}
                      onChangeText={(value) => setChooseColorCamera(value)}
                      value={chooseColorCamera}
                    />
                  </View>

                  <View style = {styles.TextInputBox}>
                    <Text style={styles.textLable}>cropperCancelText:</Text>
                  </View>
                  <View style = {styles.TextInputBox}>
                    <TextInput
                      style={styles.textInput}
                      maxLength={5}
                      onChangeText={(value) => setCancelTextCamera(value)}
                      value={cancelTextCamera}
                    />
                  </View>
                  <View style = {styles.TextInputBox}>
                     <Text style={styles.textLable}>cropperCanceColor:例如 #FF0000</Text>
                  </View>

                  <View style = {styles.TextInputBox}>
                      <TextInput
                        style={styles.textInput}
                        maxLength={7}
                        onChangeText={(value) => setCancelColorCanera(value)}
                        value={cancelColorCamera}
                      ></TextInput>
                  </View>

                  <View style = {styles.TextInputBox}>
                     <Text style={styles.inputLable}>cropperRotateButtonsHidden:</Text>
                        <Button 
                          title={`${cropperRotateCamera}`}  
                          onPress={()=>{
                            cropperRotateCamera?setCropperRotateCamera(false):setCropperRotateCamera(true)
                          }}
                         
                         />
                  </View>
                  <View style = {styles.TextInputBox}>
                     <Text style={styles.inputLable}>showCropGuidelines:</Text>
                        <Button 
                          title={`${showCropGuidelinesCamera}`}  
                          onPress={()=>{
                            showCropGuidelinesCamera?setShowCropGuidelinesCamera(false):setShowCropGuidelinesCamera(true)
                          }}
                         
                         />
                  </View>
                  <View style = {styles.TextInputBox}>
                     <Text style={styles.inputLable}>showCropFrame:</Text>
                        <Button 
                          title={`${showCropFrameCamera}`}  
                          onPress={()=>{
                            showCropFrameCamera?setShowCropFrameCamera(false):setShowCropFrameCamera(true)
                          }}
                         
                         />
                  </View>
                  <View style = {styles.buttonSty}>
                    
                        <Button 
                          title="openCamera (打开相机)"  
                          onPress={()=>{
                           ImagePicker.openCamera({
                            cropping:croppingCamera,
                            writeTempFile:writeTempFileCamera,
                            includeBase64:includeBase64Camera,
                            includeExif:includeExifCamera,
                            avoidEmptySpaceAroundImage:avoidEmptySpaceCamera,
                            freeStyleCropEnable:freeStyleCropEnableCamera,
                            useFrontCamera:useFrontCamera,
                            forceJpg:forceJpgCamera,
                            useFrontCamera:useFrontCamera,
                            useFrontCamera:useFrontCamera,
                            forceJpg:forceJpgCamera,
                            mediaType:mediaTypeCamera,
                            compressImageQuality:imageQualityCamera,
                            cropperToolBarTitle:cropperTitleCamera,
                            cropperChooseText:chooseTextCamera,
                            cropperCancelColor:chooseColorCamera,
                            cropperRotateButtonsHidden:cropperRotateCamera,
                            showCropGuidelines:showCropGuidelinesCamera,
                            showCropFrame:showCropFrameCamera
                           }).then(image=>{
                            console.log(TAG + 'openCamera result' +JSON.stringify(image))
                           } )
                          }}
                         
                         />
                  </View>
                  <View style = {styles.TextInputBox}>
                     <Text style={styles.textLable}>请输入需要裁剪的图片地址:</Text>     
                  </View>
                  <View style = {styles.TextInputBox}>
                     <TextInput
                       style={styles.textInput}
                       onChangeText={
                          (value)=>{
                              setImagePath(value)
                          }
                        
                       }
                       vulue={imagePath}
                     ></TextInput>     
                  </View>
                  <View style = {styles.TextInputBox}>
                  <Text style={styles.inputLable}>writeTempFile:</Text>
                        <Button 
                          title={`${writeTempFile}`}  
                          onPress={()=>{
                            writeTempFile?setWriteTempFile(false):setMultiple(true)
                          }}
                         
                         />
                  </View>
                  <View style={styles.TextInputBox}>
                       <Text style={styles.inputLable}>forceJpg:</Text>
                        <Button title={`${forceJpg}`}  
                         onPress={()=>{
                          forceJpg?setForceJpg(false):setForceJpg(true)
                         }}></Button>
                        
                  </View>
                  <View style={styles.TextInputBox}>
                        <Text style={styles.inputLable}>includeBase64</Text>
                        <Button title={`${includeBase64}`}  
                         onPress={()=>{
                          includeBase64?setIncludeBase64(false):setIncludeBase64(true)
                         }}></Button>
                        
                  </View>
                  <View style={styles.TextInputBox}>
                       
                         <Text style={styles.inputLable}>includeExif:</Text>
                         <Button title={`${includeExif}`}  
                         onPress={()=>{
                          includeExif?setIncludeExif(false):setIncludeExif(true)
                         }}></Button>
                  </View>
                  <View style={styles.TextInputBox}>
                       <Text style={styles.inputLable}>avoidEmptySpaceAroundImage:</Text>
                        <Button title={`${avoidEmptySpace}`}  
                         onPress={()=>{
                          avoidEmptySpace?setAvoidEmptySpace(false):setAvoidEmptySpace(true)
                         }}></Button>
                        
                  </View>
                  <View style={styles.TextInputBox}>
                        <Text style={styles.inputLable}>freeStyleCropEnable:</Text>
                         <Button title={`${freeStyleCropEnable}`}  
                         onPress={()=>{
                          freeStyleCropEnable?setFreeStyleCropEnable(false):setFreeStyleCropEnable(true)
                         }}></Button>
                  </View>
                  <View style={styles.TextInputBox}>
                    <Text style={styles.inputLable}>compressImageQuality:</Text>
                    <TextInput 
                       value={imageQuality}
                       style={styles.numberInput}
                       onChangeText={setimageQualityCropper}
                    ></TextInput>
                    <Text style={styles.lableType}>(0.1 到 1)</Text>
                  </View>
                  <View style = {styles.TextInputBox}>
                    <Text style={styles.textLable}>cropperToolbarTitle:</Text>
                  </View>
                  <View style = {styles.TextInputBox}>
                    <TextInput
                      style={styles.textInput}
                      maxLength={5}
                      onChangeText={(value) => setCropperTitle(value)}
                      value={cropperTitle}
                    />
                  </View>
                  <View style ={styles.TextInputBox}>
        <Text style={styles.textLable}>cropperChooseText:</Text>
      </View>
      <View style ={styles.TextInputBox}>
        <TextInput
        style={styles.textInput}
        maxLength={5}
        onChangeText={(value) => setChooseText(value)}
        value={chooseText}
        />
      </View>

      <View style ={styles.TextInputBox}>
        <Text style={styles.textLable}>cropperChooseColor:例如 #FF0000</Text>
      </View>
      <View style ={styles.TextInputBox}>
        <TextInput
        style={styles.textInput}
        maxLength={7}
        onChangeText={(value) => setChooseColor(value)}
        value={chooseColor}
        />
      </View>

      <View style ={styles.TextInputBox}>
        <Text style={styles.textLable}>cropperCancelText:</Text>
      </View>
      <View style ={styles.TextInputBox}>
        <TextInput
        style={styles.textInput}
        maxLength={5}
        onChangeText={(value) => setCancelText(value)}
        value={cancelText}
        />
      </View>

      <View style ={styles.TextInputBox}>
        <Text style={styles.textLable}>cropperCancelColor:例如 #FF0000</Text>
      </View>
      <View style ={styles.TextInputBox}>
        <TextInput
        style={styles.textInput}
        maxLength={5}
        onChangeText={(value) => setCancelColor(value)}
        value={cancelColor}
        />
      </View>

                  <View style = {styles.TextInputBox}>
                     <Text style={styles.inputLable}>cropperRotateButtonsHidden:</Text>
                        <Button 
                          title={`${cropperRotate}`}  
                          onPress={()=>{
                            cropperRotateCamera?setCropperRotate(false):setCropperRotate(true)
                          }}
                         
                         />
                  </View>
                  <View style = {styles.TextInputBox}>
                     <Text style={styles.inputLable}>showCropGuidelines:</Text>
                        <Button 
                          title={`${showCropGuidelines}`}  
                          onPress={()=>{
                            showCropGuidelines?setShowCropGuidelines(false):setShowCropGuidelines(true)
                          }}
                         
                         />
                  </View>
                  <View style = {styles.TextInputBox}>
                     <Text style={styles.inputLable}>showCropFrame:</Text>
                        <Button 
                          title={`${showCropFrame}`}  
                          onPress={()=>{
                            showCropFrame?setShowCropFrame(false):setShowCropFrame(true)
                          }}
                         
                         />
                  </View>
                  <View >
                       <View style={styles.bottonSty}>
                       <Button title='openPicker(打开裁剪)'
                           onPress={ ()=>{
                            openPicker({
                                path:imagePath,
                                width:300,
                                height:400,
                                writeTempFile:writeTempFileCropper,
                                includeBase64:includeBase64Cropper,
                                includeExif:includeExitfCropper,
                                avoidEmptySpaceAroundImage:avoidEmptySpaceCropper,
                                freeStyleCropEnable:freeStyleCropEnableCropper,
                                forceJpg:forceJpgCropper,
                                cropperToolbarTitle:cropperTitle,
                                cropperChooseText:chooseText,
                                cropperChooseColor:chooseColor,
                                cropperCancelText:cancelText,
                                cropperCancelColor:cancelColor,
                                cropperRotateButtonsHidden:cropperRotate,
                                showCropGuidelines:showCropGuidelines,
                                showCropFrame:showCropFrame
                               }).then((image=>{
                              console.log(TAG + 'openPicker result' +JSON.stringify(image))
                            }))
                           }}
                       ></Button>

                       </View>
                  </View>
          </View>
          <Text style={styles.title}>清除文件：</Text>
          <View style={styles.buttonBox}>
              <View style={styles.buttonSty}>
                        <Button 
                         title='clean (清除所有文件)'
                         onPress={()=>{
                               ImagePicker.clean({}).then(image=>{
                                console.log(TAG + 'openPicker result' +JSON.stringify(image))
                               })
                         }}
                        ></Button>

              </View>
              <View style={styles.TextInputBox}>
                <Text style ={styles.textLable}>请输入需要清除图片地址：</Text>
              </View>
              <View style = {styles.TextInputBox}>
                     <TextInput
                      style={styles.textInput}
                      onChangeText={(value) => setClearImagePath(value)}
                      value={clearImagePath}
                         />
                  </View>

                  <View style={styles.buttonSty}>
                        <Button 
                         title='cleanSingle (清除单个文件)'
                         onPress={()=>{
                                console.log(TAG + "cleanSingle path" + clearImagePath)
                               ImagePicker.cleanSingle('/data/storage/e12/base/haps/entry/temp/rn_inage_crop_picker_lib_temp_'+clearImagePath).then(image=>{
                                console.log(TAG + 'clean cleanSingle' +JSON.stringify(image))
                               })
                         }}
                        ></Button>

              </View>

          </View>
       </ScrollView>
   )  
}

const styles = StyleSheet.create({
     container:{

     },
     TextInputBox:{
      flexDirection:'row',
      alignItems:'center',
      margin:10,
     },
     textLable:{
       width:'100%'
     },
     emptyView:{
        width:50,
        height:500
     },
     inputLable:{
       width:'auto'
     },
     lableType:{
        width:'18%'
     },
     numberInput:{
      width:50,
      height:30,
      color:'black',
      backgroundColor: 'lightblue',
     },
     textInput:{
        width:'50%',
        height:36,
        color:'black',
        backgroundColor: 'lightblue',
     },
     switchType:{
        width:60,
        height:36
     },
     buttonBox:{
        marginTop:20,
     },
     bottonSty:{
        marginTop:0,
        marginRight:60,
        marginBottom:20,
        marginLeft:60,
        textAlign:'center'
     },
     title:{
        fontWeight:'500',
        fontSize:20,
        marginTop:10,
     }
})

export default ImageCropPickDemo;