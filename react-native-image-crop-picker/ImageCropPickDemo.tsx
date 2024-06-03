import ImagePicker from 'react-native-image-crop-picker';
import { openPicker } from 'react-native-image-crop-picker';
import React from 'react';
import { Text, StyleSheet, TextInput, View, Button, ScrollView, Switch } from 'react-native';


const ImageCropPickDemo = () => {
    const TAG: string = 'ImageCropPickerTurboModule';
    const [maxFiles, setMaxFiles] = React.useState('');
    const [imageQuality, setImageQuality] = React.useState('');
    const [imagePath, setImagePath] = React.useState('');
    const [clearImagePath, setClearImagePath] = React.useState('');
    const [cropperTitle, setCropperTitle] = React.useState('');
    const [chooseText, setChooseText] = React.useState('');
    const [chooseColor, setChooseColor] = React.useState('');
    const [cancelText, setCancelText] = React.useState('');
    const [cancelColor, setCancelColor] = React.useState('');
    const [cropperRotate, setCropperRotate] = React.useState(false);
    const [showCropGuidelines, setShowCropGuidelines] = React.useState(true);
    const [showCropFrame, setShowCropFrame] = React.useState(true);


    const [multiple, setMultiple] = React.useState(false);
    const [includeExif, setIncludeExif] = React.useState(false);
    const [avoidEmptySpace, setAvoidEmptySpace] = React.useState(false);

    const [writeTempFile, setTempFile] = React.useState(true);
    const [includeBase64, setBase64] = React.useState(false);

    const [freeStyleCropEnabled, setFreeStyleCropEnabled] = React.useState(false);


    const [forceJpg, setForceJpg] = React.useState(false);
    const [showsSelectedCount, setShowsSelectedCount] = React.useState(true);


    const [selectedButton, setSelectedButton] = React.useState('any');


    const [useFrontCamera, setUseFrontCamera] = React.useState(false);
    const [croppingCamera, setCroppingCamera] = React.useState(false);
    const [writeTempFileCamera, setTempFileCamera] = React.useState(true);
    const [includeBase64Camera, setBase64Camera] = React.useState(false);
    const [includeExifCamera, setIncludeExifCamera] = React.useState(false);
    const [avoidEmptySpaceCamera, setAvoidEmptySpaceCamera] = React.useState(false);
    const [freeStyleCropEnabledCamera, setFreeStyleCropEnabledCamera] = React.useState(false);
    const [forceJpgCamera, setForceJpgCamera] = React.useState(false);
    const [mediaTypeCamera, setMediaTypeCamera] = React.useState('any');
    const [imageQualityCamera, setImageQualityCamera] = React.useState('');

    const [cropperTitleCamera, setCropperTitleCamera] = React.useState('');
    const [chooseTextCamera, setChooseTextCamera] = React.useState('');
    const [chooseColorCamera, setChooseColorCamera] = React.useState('');
    const [cancelTextCamera, setCancelTextCamera] = React.useState('');
    const [cancelColorCamera, setCancelColorCamera] = React.useState('');
    const [cropperRotateCamera, setCropperRotateCamera] = React.useState(false);
    const [showCropGuidelinesCamera, setShowCropGuidelinesCamera] = React.useState(true);
    const [showCropFrameCamera, setShowCropFrameCamera] = React.useState(true);


    const [writeTempFileCropper, setTempFileCropper] = React.useState(true);
    const [forceJpgCropper, setForceJpgCropper] = React.useState(false);
    const [includeBase64Cropper, setBase64Cropper] = React.useState(false);
    const [includeExifCropper, setIncludeExifCropper] = React.useState(false);
    const [avoidEmptySpaceCropper, setAvoidEmptySpaceCropper] = React.useState(false);
    const [freeStyleCropEnabledCropper, setFreeStyleCropEnabledCropper] = React.useState(false);
    const [imageQualityCropper, setimageQualityCropper] = React.useState('');


    const handleButtonPress = (buttonName) => {
        setSelectedButton(buttonName);
    };

    const handleMediaType = (buttonName) => {
        setMediaTypeCamera(buttonName);
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>相机、图库、裁剪功能：</Text>
            <View style={styles.container}>

                <View style={styles.TextInputBox}>

                    <Text style={styles.inputLable}>multiple:</Text>
                    <Button
                        title={`${multiple}`}
                        onPress={() => multiple ? setMultiple(false) : setMultiple(true)}
                    />

                    <Text style={styles.inputLable}>writeTempFile:</Text>
                    <Button
                        title={`${writeTempFile}`}
                        onPress={() => writeTempFile ? setTempFile(false) : setTempFile(true)}
                    />
                </View>

                <View style={styles.TextInputBox}>

                    <Text style={styles.inputLable}>includeBase64:</Text>
                    <Button
                        title={`${includeBase64}`}
                        onPress={() => includeBase64 ? setBase64(false) : setBase64(true)}
                    />

                    <Text style={styles.inputLable}>includeExif:</Text>
                    <Button
                        title={`${includeExif}`}
                        onPress={() => includeExif ? setIncludeExif(false) : setIncludeExif(true)}
                    />

                </View>

                <View style={styles.TextInputBox}>

                    <Text style={styles.inputLable}>avoidEmptySpaceAroundImage :</Text>
                    <Button
                        title={`${avoidEmptySpace}`}
                        onPress={() => avoidEmptySpace ? setAvoidEmptySpace(false) : setAvoidEmptySpace(true)}
                    />

                </View>

                <View style={styles.TextInputBox}>

                    <Text style={styles.inputLable}>freeStyleCropEnabled :</Text>
                    <Button
                        title={`${freeStyleCropEnabled}`}
                        onPress={() => freeStyleCropEnabled ? setFreeStyleCropEnabled(false) : setFreeStyleCropEnabled(true)}
                    />

                </View>

                <View style={styles.TextInputBox}>

                    <Text style={styles.inputLable}>forceJpg:</Text>
                    <Button
                        title={`${forceJpg}`}
                        onPress={() => forceJpg ? setForceJpg(false) : setForceJpg(true)}
                    />

                    <Text style={styles.inputLable}>showsSelectedCount:</Text>
                    <Button
                        title={`${showsSelectedCount}`}
                        onPress={() => showsSelectedCount ? setShowsSelectedCount(false) : setShowsSelectedCount(true)}
                    />

                </View>


                <View style={styles.TextInputBox}>
                    <Text style={styles.inputLable}>mediaType:</Text>
                    <Button
                        title='photo'
                        onPress={() => handleButtonPress('photo')}
                        accessibilityState={{ selected: selectedButton === 'photo' }}
                    />
                    <Button
                        title='video'
                        onPress={() => handleButtonPress('video')}
                        accessibilityState={{ selected: selectedButton === 'video' }}
                    />
                    <Button
                        title='any'
                        onPress={() => handleButtonPress('any')}
                        accessibilityState={{ selected: selectedButton === 'any' }}
                    />
                </View>
                <View style={styles.TextInputBox}>
                     <Text style={{color:'red'}}>mediaType is {selectedButton}</Text>
                </View>

                <View style={styles.TextInputBox}>
                    <Text style={styles.inputLable}>minFiles:</Text>
                    <Text style={styles.inputLable}>1</Text>
                </View>

                <View style={styles.TextInputBox}>
                    <Text style={styles.inputLable}>maxFiles:</Text>
                    <TextInput 
                       keyboardType="numeric"
                       maxLength={1}
                       style={styles.numberInput}
                       onChangeText={setMaxFiles}
                       value={maxFiles}
                    />
                    <Text style={styles.lableType}>(number)</Text>
                  </View>

                <View style={styles.TextInputBox}>
                    <Text style={styles.inputLable}>compressImageQuality:</Text>
                    <TextInput
                        style={styles.numberInput}
                        onChangeText={setImageQuality}
                        value={imageQuality}
                    />
                    <Text style={styles.lableType}>(0.1 到 1)</Text>
                </View>

                <View >
                    <View style={styles.buttonSty}>
                        <Button
                            title='openPicker（打开图库）'
                            onPress={() => {
                                openPicker({
                                    multiple: multiple,
                                    writeTempFile: writeTempFile,
                                    includeBase64: includeBase64,
                                    includeExif: includeExif,
                                    avoidEmptySpaceAroundImage: avoidEmptySpace,
                                    freeStyleCropEnabled: freeStyleCropEnabled,
                                    forceJpg: forceJpg,
                                    showsSelectedCount: showsSelectedCount,
                                    mediaType: selectedButton,
                                    minFiles: 1,
                                    maxFiles: maxFiles,
                                    compressImageQuality: imageQuality,
                                }).then(image => {
                                    console.log(TAG + ' openPicker result ' + JSON.stringify(image))
                                });
                            }}
                        />
                    </View>

                    <View style={styles.TextInputBox}>

                        <Text style={styles.inputLable}>cropping:</Text>
                        <Button
                            title={`${croppingCamera}`}
                            onPress={() => croppingCamera ? setCroppingCamera(false) : setCroppingCamera(true)}
                        />

                        <Text style={styles.inputLable}>writeTempFile:</Text>
                        <Button
                            title={`${writeTempFileCamera}`}
                            onPress={() => writeTempFileCamera ? setTempFileCamera(false) : setTempFileCamera(true)}
                        />

                    </View>

                    <View style={styles.TextInputBox}>

                        <Text style={styles.inputLable}>includeBase64:</Text>
                        <Button
                            title={`${includeBase64Camera}`}
                            onPress={() => includeBase64Camera ? setBase64Camera(false) : setBase64Camera(true)}
                        />

                        <Text style={styles.inputLable}>includeExif:</Text>
                        <Button
                            title={`${includeExifCamera}`}
                            onPress={() => includeExifCamera ? setIncludeExifCamera(false) : setIncludeExifCamera(true)}
                        />

                    </View>

                    <View style={styles.TextInputBox}>

                        <Text style={styles.inputLable}>avoidEmptySpaceAroundImage :</Text>
                        <Button
                            title={`${avoidEmptySpaceCamera}`}
                            onPress={() => avoidEmptySpaceCamera ? setAvoidEmptySpaceCamera(false) : setAvoidEmptySpaceCamera(true)}
                        />

                    </View>

                    <View style={styles.TextInputBox}>

                        <Text style={styles.inputLable}>freeStyleCropEnabled :</Text>
                        <Button
                            title={`${freeStyleCropEnabledCamera}`}
                            onPress={() => freeStyleCropEnabledCamera ? setFreeStyleCropEnabledCamera(false) : setFreeStyleCropEnabledCamera(true)}
                        />

                    </View>

                    <View style={styles.TextInputBox}>

                        <Text style={styles.inputLable}>useFrontCamera:</Text>
                        <Button
                            title={`${useFrontCamera}`}
                            onPress={() => useFrontCamera ? setUseFrontCamera(false) : setUseFrontCamera(true)}
                        />

                        <Text style={styles.inputLable}>forceJpg:</Text>
                        <Button
                            title={`${forceJpgCamera}`}
                            onPress={() => forceJpgCamera ? setForceJpgCamera(false) : setForceJpgCamera(true)}
                        />
                    </View>

                    <View style={styles.TextInputBox}>
                        <Text style={styles.inputLable}>mediaType:</Text>
                        <Button
                            title='photo'
                            onPress={() => handleMediaType('photo')}
                            accessibilityState={{ selected: mediaTypeCamera === 'photo' }}
                        />
                        <Button
                            title='video'
                            onPress={() => handleMediaType('video')}
                            accessibilityState={{ selected: mediaTypeCamera === 'video' }}
                        />
                        <Button
                            title='any'
                            onPress={() => handleMediaType('any')}
                            accessibilityState={{ selected: mediaTypeCamera === 'any' }}
                        />
                    </View>
                    <View style={styles.TextInputBox}>
                        <Text style={{ color: 'red' }}>mediaType is {mediaTypeCamera}</Text>
                    </View>

                    <View style={styles.TextInputBox}>
                        <Text style={styles.inputLable}>compressImageQuality:</Text>
                        <TextInput
                            style={styles.numberInput}
                            onChangeText={setImageQualityCamera}
                            value={imageQualityCamera}
                        />
                        <Text style={styles.lableType}>(0.1 到 1)</Text>
                    </View>

                    <View style={styles.TextInputBox}>
                        <Text style={styles.textLable}>cropperToolbarTitle:</Text>
                    </View>

                    <View style={styles.TextInputBox}>

                        <TextInput
                            style={styles.textInput}
                            maxLength={5}
                            onChangeText={(value) => setCropperTitleCamera(value)}
                            value={cropperTitleCamera}
                        />
                    </View>

                    <View style={styles.TextInputBox}>
                        <Text style={styles.textLable}>cropperChooseText:</Text>
                    </View>

                    <View style={styles.TextInputBox}>

                        <TextInput
                            style={styles.textInput}
                            maxLength={5}
                            onChangeText={(value) => setChooseTextCamera(value)}
                            value={chooseTextCamera}
                        />
                    </View>

                    <View style={styles.TextInputBox}>
                        <Text style={styles.textLable}>cropperChooseColor:例如 #FF0000</Text>
                    </View>

                    <View style={styles.TextInputBox}>

                        <TextInput
                            style={styles.textInput}
                            maxLength={7}
                            onChangeText={(value) => setChooseColorCamera(value)}
                            value={chooseColorCamera}
                        />
                    </View>

                    <View style={styles.TextInputBox}>
                        <Text style={styles.textLable}>cropperCancelText:</Text>
                    </View>

                    <View style={styles.TextInputBox}>

                        <TextInput
                            style={styles.textInput}
                            maxLength={5}
                            onChangeText={(value) => setCancelTextCamera(value)}
                            value={cancelTextCamera}
                        />
                    </View>

                    <View style={styles.TextInputBox}>
                        <Text style={styles.textLable}>cropperCancelColor:例如 #FF0000</Text>
                    </View>

                    <View style={styles.TextInputBox}>

                        <TextInput
                            style={styles.textInput}
                            maxLength={7}
                            onChangeText={(value) => setCancelColorCamera(value)}
                            value={cancelColorCamera}
                        />
                    </View>

                    <View style={styles.TextInputBox}>

                        <Text style={styles.inputLable}>cropperRotateButtonsHidden:</Text>
                        <Button
                            title={`${cropperRotateCamera}`}
                            onPress={() => cropperRotateCamera ? setCropperRotateCamera(false) : setCropperRotateCamera(true)}
                        />
                    </View>

                    <View style={styles.TextInputBox}>

                        <Text style={styles.inputLable}>showCropGuidelines:</Text>
                        <Button
                            title={`${showCropGuidelinesCamera}`}
                            onPress={() => showCropGuidelinesCamera ? setShowCropGuidelinesCamera(false) : setShowCropGuidelinesCamera(true)}
                        />
                    </View>

                    <View style={styles.TextInputBox}>

                        <Text style={styles.inputLable}>showCropFrame:</Text>
                        <Button
                            title={`${showCropFrameCamera}`}
                            onPress={() => showCropFrameCamera ? setShowCropFrameCamera(false) : setShowCropFrameCamera(true)}
                        />
                    </View>

                    <View style={styles.buttonSty}>
                        <Button
                            title="openCamera （打开相机）"
                            onPress={() => {
                                ImagePicker.openCamera({
                                    cropping: croppingCamera,
                                    writeTempFile: writeTempFileCamera,
                                    includeBase64: includeBase64Camera,
                                    includeExif: includeExifCamera,
                                    avoidEmptySpaceAroundImage: avoidEmptySpaceCamera,
                                    freeStyleCropEnabled: freeStyleCropEnabledCamera,
                                    useFrontCamera: useFrontCamera,
                                    forceJpg: forceJpgCamera,
                                    mediaType: mediaTypeCamera,
                                    compressImageQuality: imageQualityCamera,
                                    cropperToolbarTitle: cropperTitleCamera,
                                    cropperChooseText: chooseTextCamera,
                                    cropperChooseColor: chooseColorCamera,
                                    cropperCancelText: cancelTextCamera,
                                    cropperCancelColor: cancelColorCamera,
                                    cropperRotateButtonsHidden: cropperRotateCamera,
                                    showCropGuidelines: showCropGuidelinesCamera,
                                    showCropFrame: showCropFrameCamera,
                                }).then(image => {
                                    console.log(TAG + ' openCamera result ' + JSON.stringify(image))
                                });
                            }}
                        />
                    </View>

                    <View style={styles.TextInputBox}>
                        <Text style={styles.textLable}>请输入需要裁剪的图片地址:</Text>
                    </View>

                    <View style={styles.TextInputBox}>

                        <TextInput
                            style={styles.textInput}
                            onChangeText={(value) => setImagePath(value)}
                            value={imagePath}
                        />

                    </View>

                    <View style={styles.TextInputBox}>

                        <Text style={styles.inputLable}>writeTempFile:</Text>
                        <Button
                            title={`${writeTempFileCropper}`}
                            onPress={() => writeTempFileCropper ? setTempFileCropper(false) : setTempFileCropper(true)}
                        />

                        <Text style={styles.inputLable}>forceJpg:</Text>
                        <Button
                            title={`${forceJpgCropper}`}
                            onPress={() => forceJpgCropper ? setForceJpgCropper(false) : setForceJpgCropper(true)}
                        />
                    </View>

                    <View style={styles.TextInputBox}>

                        <Text style={styles.inputLable}>includeBase64:</Text>
                        <Button
                            title={`${includeBase64Cropper}`}
                            onPress={() => includeBase64Cropper ? setBase64Cropper(false) : setBase64Cropper(true)}
                        />

                        <Text style={styles.inputLable}>includeExif:</Text>
                        <Button
                            title={`${includeExifCropper}`}
                            onPress={() => includeExifCropper ? setIncludeExifCropper(false) : setIncludeExifCropper(true)}
                        />

                    </View>

                    <View style={styles.TextInputBox}>

                        <Text style={styles.inputLable}>avoidEmptySpaceAroundImage :</Text>
                        <Button
                            title={`${avoidEmptySpaceCropper}`}
                            onPress={() => avoidEmptySpaceCropper ? setAvoidEmptySpaceCropper(false) : setAvoidEmptySpaceCropper(true)}
                        />

                    </View>

                    <View style={styles.TextInputBox}>

                        <Text style={styles.inputLable}>freeStyleCropEnabled :</Text>
                        <Button
                            title={`${freeStyleCropEnabledCropper}`}
                            onPress={() => freeStyleCropEnabledCropper ? setFreeStyleCropEnabledCropper(false) : setFreeStyleCropEnabledCropper(true)}
                        />

                    </View>

                    <View style={styles.TextInputBox}>
                        <Text style={styles.inputLable}>compressImageQuality:</Text>
                        <TextInput
                            style={styles.numberInput}
                            onChangeText={setimageQualityCropper}
                            value={imageQualityCropper}
                        />
                        <Text style={styles.lableType}>(0.1 到 1)</Text>
                    </View>


                    <View style={styles.TextInputBox}>
                        <Text style={styles.textLable}>cropperToolbarTitle:</Text>
                    </View>

                    <View style={styles.TextInputBox}>

                        <TextInput
                            style={styles.textInput}
                            maxLength={5}
                            onChangeText={(value) => setCropperTitle(value)}
                            value={cropperTitle}
                        />
                    </View>

                    <View style={styles.TextInputBox}>
                        <Text style={styles.textLable}>cropperChooseText:</Text>
                    </View>

                    <View style={styles.TextInputBox}>

                        <TextInput
                            style={styles.textInput}
                            maxLength={5}
                            onChangeText={(value) => setChooseText(value)}
                            value={chooseText}
                        />
                    </View>

                    <View style={styles.TextInputBox}>
                        <Text style={styles.textLable}>cropperChooseColor:例如 #FF0000</Text>
                    </View>

                    <View style={styles.TextInputBox}>

                        <TextInput
                            style={styles.textInput}
                            maxLength={7}
                            onChangeText={(value) => setChooseColor(value)}
                            value={chooseColor}
                        />
                    </View>

                    <View style={styles.TextInputBox}>
                        <Text style={styles.textLable}>cropperCancelText:</Text>
                    </View>

                    <View style={styles.TextInputBox}>

                        <TextInput
                            style={styles.textInput}
                            maxLength={5}
                            onChangeText={(value) => setCancelText(value)}
                            value={cancelText}
                        />
                    </View>

                    <View style={styles.TextInputBox}>
                        <Text style={styles.textLable}>cropperCancelColor:例如 #FF0000</Text>
                    </View>

                    <View style={styles.TextInputBox}>

                        <TextInput
                            style={styles.textInput}
                            maxLength={7}
                            onChangeText={(value) => setCancelColor(value)}
                            value={cancelColor}
                        />
                    </View>

                    <View style={styles.TextInputBox}>

                        <Text style={styles.inputLable}>cropperRotateButtonsHidden:</Text>
                        <Button
                            title={`${cropperRotate}`}
                            onPress={() => cropperRotate ? setCropperRotate(false) : setCropperRotate(true)}
                        />
                    </View>

                    <View style={styles.TextInputBox}>

                        <Text style={styles.inputLable}>showCropGuidelines:</Text>
                        <Button
                            title={`${showCropGuidelines}`}
                            onPress={() => showCropGuidelines ? setShowCropGuidelines(false) : setShowCropGuidelines(true)}
                        />
                    </View>

                    <View style={styles.TextInputBox}>

                        <Text style={styles.inputLable}>showCropFrame:</Text>
                        <Button
                            title={`${showCropFrame}`}
                            onPress={() => showCropFrame ? setShowCropFrame(false) : setShowCropFrame(true)}
                        />
                    </View>



                    <View style={styles.buttonSty}>
                        <Button
                            title='openCropper（打开裁剪）'
                            onPress={() => {

                                ImagePicker.openCropper({
                                    path: imagePath,
                                    width: 300,
                                    height: 400,
                                    writeTempFile: writeTempFileCropper,
                                    includeBase64: includeBase64Cropper,
                                    includeExif: includeExifCropper,
                                    avoidEmptySpaceAroundImage: avoidEmptySpaceCropper,
                                    freeStyleCropEnabled: freeStyleCropEnabledCropper,
                                    compressImageQuality: imageQualityCropper,
                                    forceJpg: forceJpgCropper,
                                    cropperToolbarTitle: cropperTitle,
                                    cropperChooseText: chooseText,
                                    cropperChooseColor: chooseColor,
                                    cropperCancelText: cancelText,
                                    cropperCancelColor: cancelColor,
                                    cropperRotateButtonsHidden: cropperRotate,
                                    showCropGuidelines: showCropGuidelines,
                                    showCropFrame: showCropFrame,
                                }).then((image => {
                                    console.log(TAG + ' openCropper result ' + JSON.stringify(image))
                                }))
                            }}
                        />
                    </View>

                </View>
            </View>

                <Text style={styles.title}>清除文件：</Text>

                <View style={styles.buttonBox}>
                    <View style={styles.buttonSty}>
                        <Button
                            title='clean （清除所有文件）'
                            onPress={() => {
                                ImagePicker.clean({}).then(image => {
                                    console.log(TAG + ' clean result ' + JSON.stringify(image))
                                });
                            }}
                        />
                    </View>

                    <View style={styles.TextInputBox}>
                        <Text style={styles.textLable}>请输入需要清除图片地址：</Text>
                    </View>

                    <View style={styles.TextInputBox}>

                        <TextInput
                            style={styles.textInput}
                            onChangeText={(value) => setClearImagePath(value)}
                            value={clearImagePath}
                        />
                    </View>

                    <View style={styles.buttonSty}>
                        <Button
                            title='cleanSingle (清除单个文件)'
                            onPress={() => {
                                console.log(TAG + " cleanSingle path " + clearImagePath)
                                ImagePicker.cleanSingle('/data/storage/el2/base/haps/entry/temp/rn_image_crop_picker_lib_temp_' + clearImagePath).then(image => {

                                })
                            }}
                        />
                    </View>

                    <View style={styles.emptyView}></View>

                </View>

        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
    },
    TextInputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    textLable: {
        width: '100%'
    },
    emptyView: {
        width: 50,
        height: 500
    },
    inputLable: {
        width: 'auto'
    },
    lableType: {
        width: '18%'
    },
    numberInput: {
        width: 50,
        height: 30,
        color: 'black',
        borderColor: 'gray',
        borderWidth: 1
    },
    textInput: {
        width: '50%',
        height: 36,
        color: 'black',
        borderColor: 'gray',
        borderWidth: 1
    },
    switchType: {
        width: 60,
        height: 36
    },
    buttonBox: {
        marginTop: 20,
    },
    buttonSty: {
        marginTop: 0,
        marginRight: 60,
        marginBottom: 20,
        marginLeft: 60,
        textAlign: 'center'
    },
    title: {
        fontWeight: '500',
        fontSize: 20,
        marginTop: 10,
    }
});
export default ImageCropPickDemo;