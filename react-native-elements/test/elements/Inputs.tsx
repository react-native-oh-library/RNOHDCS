// //@ts-nocheck
// import React, { useState, useRef } from 'react';
// import {
//   View,
//   ScrollView,
//   StyleSheet,
//   Text,
//   Dimensions,
//   KeyboardAvoidingView,
//   Platform,
//   Vibration,
//   Animated,
// } from 'react-native';
// import {
//   Input,
//   SearchBar,
//   Icon,
//   Button,
//   ThemeProvider,
//   InputProps,
// } from '@rneui/themed';
// import { Tester, TestSuite, TestCase } from '@rnoh/testerino'

// const SCREEN_WIDTH = Dimensions.get('window').width;
// const dummySearchBarProps = {
//   showLoading: true,
//   onFocus: () => console.log('focus'),
//   onBlur: () => console.log('blur'),
//   onCancel: () => console.log('cancel'),
//   onClear: () => console.log('cleared'),
// };

// const SearchBarCustom = (props) => {
//   const [value, setValue] = useState('');
//   return <SearchBar value={value} onChangeText={setValue} {...props} />;
// };
// class ErrorComponent extends React.Component<{}, {}> {
//   render() {
//     return
//       <View style={{ paddingTop: 20, paddingBottom: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: 'pink', borderRadius: 20 }}>
//         <Text style={{ fontSize: 28, backgroundColor: 'yellow', color: 'red' }}>ViewComponent</Text>
//       </View>

//   }
// }
// type InputsComponentProps = {};

// const Inputs: React.FunctionComponent<InputsComponentProps> = () => {
//   let email2Input = useRef(null);
//   let passwordInput = useRef(null);
//   let password2Input = useRef(null);
//   let shakeInput = useRef(null);
//   let confirmPassword2Input = useRef(null);

//   const InputFieldsStyle = {
//     borderWidth: 0,
//     backgroundColor: 'white'
//   };

//   const inputProps = {};
//   return (

//     <Tester>
//       <ScrollView >
//         <TestSuite name='Input的属性ErrorComponent 传入一个Error状态下的组件'>
//           <TestCase itShould='ErrorComponent' tags={['C_API']}>
//             <View style={{ alignItems: 'center', marginBottom: 16 }}>
//                <Text>ErrorComponent</Text>
//               <Input
//                 {...(inputProps as InputProps)}
//                 ErrorComponent={ErrorComponent}
//               />
//             </View>
//           </TestCase>

//         </TestSuite>
//         <TestSuite name='SearchBar'>
//           <TestCase itShould='Android searchbarAndroid searchbar' tags={['C_API']}>
//             <SearchBarCustom
//               placeholder="Android searchbar"
//               platform="android"
//               style={InputFieldsStyle}
//               {...dummySearchBarProps}
//             />
//           </TestCase>
//           <TestCase itShould='Default searchbar' tags={['C_API']}>
//             <SearchBarCustom
//               placeholder="Default searchbar"
//               style={InputFieldsStyle}
//               {...dummySearchBarProps}
//             />
//           </TestCase>
//         </TestSuite>
//         <TestSuite name='Inputs'>
//           <View style={{ alignItems: 'center', marginBottom: 16 }}>
//             <TestCase itShould='Input with label' tags={['C_API']}>
//               <Input
//                 {...(inputProps as InputProps)}
//                 containerStyle={{ width: '90%' }}
//                 placeholder="Input with label"
//                 label="LABEL"
//                 labelStyle={{ marginTop: 16 }}
//                 style={InputFieldsStyle}
//               />
//             </TestCase>
//             <TestCase itShould='Simple input' tags={['C_API']}>
//               <Input
//                 {...(inputProps as InputProps)}
//                 containerStyle={styles.inputContainerStyle}
//                 placeholder="Simple input"
//                 style={InputFieldsStyle}
//               />
//             </TestCase>
//             <TestCase itShould='Input with left icon' tags={['C_API']}>
//               <Input
//                 {...(inputProps as InputProps)}
//                 leftIcon={
//                   <Icon
//                     name="map-marker"
//                     type="font-awesome"
//                     color="#86939e"
//                     size={25}
//                   />
//                 }
//                 leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
//                 containerStyle={styles.inputContainerStyle}
//                 placeholder="Input with left icon"
//                 style={InputFieldsStyle}
//               />
//             </TestCase>
//             <TestCase itShould='Input with right icon' tags={['C_API']}>
//               <Input
//                 {...(inputProps as InputProps)}
//                 rightIcon={
//                   <Icon
//                     name="chevron-right"
//                     type="font-awesome"
//                     color="#86939e"
//                     size={25}
//                   />
//                 }
//                 containerStyle={styles.inputContainerStyle}
//                 placeholder="Input with right icon"
//                 style={InputFieldsStyle}
//               />
//             </TestCase>
//             <TestCase itShould='Input with error message' tags={['C_API']}>
//               <Input
//                 {...(inputProps as InputProps)}
//                 containerStyle={styles.inputContainerStyle}
//                 placeholder="Input with error message"
//                 errorMessage="Invalid input"
//                 style={InputFieldsStyle}
//               />
//             </TestCase>
//             <TestCase itShould='Input with animated error' tags={['C_API']}>
//               <InputWithAnimatedErrorMessage
//                 {...(inputProps as InputProps)}
//                 containerStyle={styles.inputContainerStyle}
//                 placeholder="Input with animated error"
//                 errorMessage="This field must be left blank."
//                 renderErrorMessage={true}
//                 style={InputFieldsStyle}
//               />
//             </TestCase>
//             <TestCase itShould='Shake input' tags={['C_API']}>
//               <Input
//                 {...(inputProps as InputProps)}
//                 containerStyle={[styles.inputContainerStyle]}
//                 placeholder="Shake input"
//                 style={InputFieldsStyle}
//                 ref={(ref) => (shakeInput = ref)}
//                 rightIcon={
//                   <Button
//                     title="Shake"
//                     onPress={() => {
//                       shakeInput && shakeInput.shake();
//                       Vibration.vibrate(1000);
//                     }}
//                   />
//                 }
//                 errorMessage="Shake me on error !"
//               />
//             </TestCase>
//           </View>
//         </TestSuite>

//         <View>
//           <TestSuite name='Login'>
//             <TestCase itShould='Login' tags={['C_API']}>
//               <View
//                 style={{
//                   backgroundColor: '#2F343B',
//                   width: '100%',
//                   alignItems: 'center',
//                 }}
//               >

//                 <Text
//                   style={{
//                     fontSize: 30,
//                     marginVertical: 10,
//                     fontWeight: '300',
//                     marginTop: 10,
//                     color: 'white',
//                   }}
//                 >
//                   Login
//                 </Text>
//                 <View>
//                   <View style={styles.triangleLeft} />
//                   <Input
//                     {...(inputProps as InputProps)}
//                     inputContainerStyle={{
//                       borderWidth: 1,
//                       borderColor: 'white',
//                       borderLeftWidth: 0,
//                       height: 50,
//                       width: '80%',
//                       backgroundColor: 'white',
//                     }}
//                     leftIcon={
//                       <Icon
//                         name="mail-forward"
//                         type="font-awesome"
//                         color="black"
//                         size={25}
//                       />
//                     }
//                     leftIconContainerStyle={{
//                       marginRight: 10,
//                     }}
//                     containerStyle={{ paddingHorizontal: 0 }}
//                     placeholder="Email"
//                     placeholderTextColor="black"
//                     autoCapitalize="none"
//                     autoCorrect={false}
//                     keyboardAppearance="light"
//                     style={InputFieldsStyle}
//                     keyboardType="email-address"
//                     returnKeyType="next"
//                     onSubmitEditing={() => {
//                       passwordInput.focus();
//                     }}
//                     blurOnSubmit={false}
//                   />
//                   <View style={styles.triangleRight} />
//                 </View>
//                 <View style={[{ marginBottom: 30, marginTop: 1 }]}>
//                   <View style={styles.triangleLeft} />
//                   <Input
//                     inputContainerStyle={{
//                       borderWidth: 1,
//                       borderColor: 'white',
//                       borderLeftWidth: 0,
//                       height: 50,
//                       width: '80%',
//                       backgroundColor: 'white',
//                     }}
//                     leftIconContainerStyle={{
//                       marginRight: 10,
//                     }}
//                     containerStyle={{ paddingHorizontal: 0 }}
//                     leftIcon={
//                       <Icon
//                         name="lock"
//                         type="font-awesome"
//                         color="black"
//                         size={25}
//                       />
//                     }
//                     placeholder="Password"
//                     placeholderTextColor="black"
//                     autoCapitalize="none"
//                     keyboardAppearance="light"
//                     secureTextEntry={true}
//                     autoCorrect={false}
//                     style={InputFieldsStyle}
//                     keyboardType="default"
//                     returnKeyType="done"
//                     ref={(input) => (passwordInput = input)}
//                     blurOnSubmit={true}
//                   />
//                   <View style={styles.triangleRight} />
//                 </View>
//               </View>
//             </TestCase>
//           </TestSuite>

//           <TestSuite name='Sing Up'>
//             <TestCase itShould='Sing Up' tags={['C_API']}>
//               <ThemeProvider
//                 theme={{
//                   Input: {
//                     containerStyle: {
//                       width: SCREEN_WIDTH - 50,
//                     },
//                     inputContainerStyle: {
//                       borderRadius: 40,
//                       borderWidth: 1,
//                       borderColor: 'rgba(110, 120, 170, 1)',
//                       height: 50,
//                       marginVertical: 10,
//                     },
//                     placeholderTextColor: 'rgba(110, 120, 177, 1)',
//                     inputStyle: {
//                       marginLeft: 10,
//                       color: 'white',
//                     },
//                     keyboardAppearance: 'light',
//                     blurOnSubmit: false,
//                   },
//                 }}
//               >
//                 <View
//                   style={{
//                     backgroundColor: 'rgba(46, 50, 72, 1)',
//                     width: '100%',
//                     alignItems: 'center',
//                     paddingBottom: 30,
//                   }}
//                 >
//                   <Text
//                     style={{
//                       color: 'white',
//                       fontSize: 30,
//                       marginVertical: 10,
//                       fontWeight: '300',
//                     }}
//                   >
//                     Sign up
//                   </Text>
//                   <Input
//                     {...(inputProps as InputProps)}
//                     leftIcon={
//                       <Icon
//                         name="user"
//                         type="font-awesome"
//                         style={{ marginLeft: 12 }}
//                         color="rgba(110, 120, 170, 1)"
//                         size={25}
//                       />
//                     }
//                     placeholder="Username"
//                     autoCapitalize="none"
//                     autoCorrect={false}
//                     keyboardType="email-address"
//                     style={InputFieldsStyle}
//                     returnKeyType="next"
//                     onSubmitEditing={() => {
//                       email2Input.focus();
//                     }}
//                   />
//                   <Input
//                     {...(inputProps as InputProps)}
//                     leftIcon={
//                       <Icon
//                         name="mail-forward"
//                         type="font-awesome"
//                         style={{ marginLeft: 10 }}
//                         color="rgba(110, 120, 170, 1)"
//                         size={25}
//                       />
//                     }
//                     placeholder="Email"
//                     autoCapitalize="none"
//                     autoCorrect={false}
//                     keyboardType="email-address"
//                     style={InputFieldsStyle}
//                     returnKeyType="next"
//                     ref={(input) => (email2Input = input)}
//                     onSubmitEditing={() => {
//                       password2Input.focus();
//                     }}
//                   />
//                   <Input
//                     {...(inputProps as InputProps)}
//                     leftIcon={
//                       <Icon
//                         name="lock"
//                         type="font-awesome"
//                         style={{ marginLeft: 10 }}
//                         color="rgba(110, 120, 170, 1)"
//                         size={25}
//                       />
//                     }
//                     placeholder="Password"
//                     autoCapitalize="none"
//                     secureTextEntry={true}
//                     autoCorrect={false}
//                     keyboardType="default"
//                     style={InputFieldsStyle}
//                     returnKeyType="next"
//                     ref={(input) => (password2Input = input)}
//                     onSubmitEditing={() => {
//                       confirmPassword2Input.current.focus();
//                     }}
//                   />
//                   <Input
//                     {...(inputProps as InputProps)}
//                     leftIcon={
//                       <Icon
//                         name="lock"
//                         type="font-awesome"
//                         style={{ marginLeft: 10 }}
//                         color="rgba(110, 120, 170, 1)"
//                         size={25}
//                       />
//                     }
//                     placeholder="Confirm Password"
//                     autoCapitalize="none"
//                     keyboardAppearance="light"
//                     secureTextEntry={true}
//                     autoCorrect={false}
//                     keyboardType="default"
//                     returnKeyType="done"
//                     style={InputFieldsStyle}
//                     ref={(input) => (confirmPassword2Input = input)}
//                     blurOnSubmit
//                   />
//                 </View>
//               </ThemeProvider>
//             </TestCase>
//           </TestSuite>
//         </View>
//       </ScrollView>
//     </Tester>

//   );
// };

// export default Inputs;

// const styles = StyleSheet.create({
//   heading: {
//     color: 'white',
//     marginTop: 10,
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
//   contentView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   triangleLeft: {
//     position: 'absolute',
//     left: -20,
//     top: 0,
//     width: 0,
//     height: 0,
//     borderRightWidth: 20,
//     borderRightColor: 'white',
//     borderBottomWidth: 25,
//     borderBottomColor: 'transparent',
//     borderTopWidth: 25,
//     borderTopColor: 'transparent',
//   },
//   triangleRight: {
//     position: 'absolute',
//     right: -20,
//     top: 0,
//     width: 0,
//     height: 0,
//     borderLeftWidth: 20,
//     borderLeftColor: 'white',
//     borderBottomWidth: 25,
//     borderBottomColor: 'transparent',
//     borderTopWidth: 25,
//     borderTopColor: 'transparent',
//   },
//   inputContainerStyle: {
//     marginTop: 16,
//     width: '90%',
//   },
//   keyboardAvoidingView: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
//   titleStyle: {
//     fontWeight: 'bold',
//     fontSize: 24,
//   },
//   subTitleStyle: {
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   normalTitle: {
//     fontWeight: 'bold',
//     fontSize: 15,
//   }
// });

// // This component will show an animated error if anything is typed into it.
// const InputWithAnimatedErrorMessage = React.forwardRef((props: InputProps, ref) => {
//   const errorAnimation = React.useRef(new Animated.Value(props.value?.length > 0 ? 1 : 0)).current;
//   const [displayErrorMessage, setDisplayErrorMessage] = React.useState(props.value?.length > 0);

//   React.useEffect(() => {
//     if (displayErrorMessage) {
//       fadeIn();
//     } else {
//       fadeOut();
//     }
//   }, [displayErrorMessage]);

//   const fadeIn = () => {
//     setDisplayErrorMessage(true);
//     Animated.timing(errorAnimation, {
//       toValue: displayErrorMessage ? 1 : 0,
//       duration: 500,
//       useNativeDriver: false,
//     }).start();
//   };

//   const fadeOut = () => {
//     Animated.timing(errorAnimation, {
//       toValue: 0,
//       duration: 500,
//       useNativeDriver: false,
//     }).start(() => {
//       setDisplayErrorMessage(false);
//     });
//   };

//   const errorAnimationStyle = {
//     // Fades the text in and out.
//     opacity: errorAnimation.interpolate({
//       inputRange: [0, 1],
//       outputRange: [0, 1],
//     }),
//     // Animated the text in from the left by 25 px.
//     marginLeft: errorAnimation.interpolate({
//       inputRange: [0, 1],
//       outputRange: [-25, 0],
//     }),
//   };

//   return (
//     <Input
//       ref={ref}
//       ErrorComponent={Animated.Text}
//       errorMessage={displayErrorMessage ? (props.errorMessage || '') : ''}
//       errorStyle={[
//         {
//           // marginLeft: 0,
//           //other styles
//         },
//         errorAnimationStyle,
//       ]}
//       {...props}
//       // other props
//       onChangeText={(text) => {
//         if (text.length > 0) {
//           setDisplayErrorMessage(true);
//         } else {
//           fadeOut();
//         }
//         props.onChangeText?.(text);
//       }}
//     />
//   );
// });

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Animated,
  Easing,
  ActivityIndicator,
} from 'react-native';
import { FAB, Button, Image, Input } from '@rneui/themed';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
class ViewComponent extends React.Component<{}, {}> {
  render() {
    return (
      <TouchableOpacity>
        <Text style={{ fontSize: 10, color: 'red' }}>{'errorComponent'}</Text>
      </TouchableOpacity>
    );
  }
}
class RNInput extends React.Component<{}, {}> {
  render() {
    return <TextInput style={{ width: '100%' }} placeholder="请输入"></TextInput>;
  }
}
export default () => {
  const [error, setError] = useState(false);

  return (
    <Tester>
      <ScrollView>
        {/* <TestSuite name="Input属性ErrorComponent 可传入自定义组件">
          <TestCase itShould="设置ErrorComponent" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>ErrorComponent</Text>
              <Input ErrorComponent={ViewComponent} />
            </View>
          </TestCase>
        </TestSuite> */}
        <TestSuite name="Input属性InputComponent可传入一个RN的TextInput组件">
          <TestCase itShould="设置InputComponent" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>InputComponent</Text>
              <Input InputComponent={RNInput} />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Input属性containerStyle 设置容器样式">
          <TestCase itShould="containerStyle" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>InputComponent</Text>
              <Input
                inputStyle={{ color: 'red', fontSize: 20, fontWeight: '500' }}
                containerStyle={{
                  width: 280,
                  height: 40,
                  borderColor: 'pink',
                  borderWidth: 1,
                  alignSelf: 'center',
                  borderRadius: 10,
                }}
                placeholder="请输入"
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Input属性disabled 设置disable input禁止输入">
          <TestCase itShould="设置后input无法输入" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>设置disable</Text>
              <Input inputStyle={{ color: 'red', fontSize: 20, fontWeight: '500' }}
                disabled={true} placeholder="请输入" />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Input属性disabledInputStyle 设置disable后的输入样式">
          <TestCase itShould="disabledInputStyle" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>设置disable的样式</Text>
              <Input
                disabledInputStyle={{
                  fontSize: 20,
                  fontWeight: '400',
                  backgroundColor: 'red'
                }}
                disabled={true}
                placeholder="请输入"
              />
            </View>
           
          </TestCase>
        </TestSuite>
        <TestSuite name="Input属性errorMessage  显示errorMessage">
          <TestCase itShould="设置errorMessage" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>显示errormessage</Text>
              <Input
                inputStyle={{ color: 'red', fontSize: 20, fontWeight: '500' }}

                errorProps={{ error: error }}
                errorMessage={'errorMessage'}
                placeholder="请输入"
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Input属性errorProps验证">
          <TestCase itShould="设置errorProps设置" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>errorProps</Text>
              <Input
                inputStyle={{ color: 'green', fontSize: 20, fontWeight: '500' }}
                placeholder="INPUT WITH ERROR MESSAGE"
                errorMessage="ENTER A VALID ERROR HERE"
                errorProps={{ width: 200, height: 30, backgroundColor: 'green' }}
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Input属性errorStyle验证">
          <TestCase itShould="设置errorStyle" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>errorStyle</Text>
              <Input
                inputStyle={{ color: 'red', fontSize: 20, fontWeight: '500' }}

                placeholder="INPUT WITH ERROR MESSAGE"
                errorStyle={{ color: 'blue', fontSize: 28, fontWeight: '400' }}
                errorMessage="ENTER A VALID ERROR HERE"
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Input属性inputContainerStyle验证 输入框的样式设置">
          <TestCase itShould="设置inputContainerStyle" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>inputContainerStyle</Text>
              <Input
                inputStyle={{ color: 'red', fontSize: 20, fontWeight: '500' }}
                inputContainerStyle={{
                  width: 280,
                  height: 40,
                  borderColor: 'pink',
                  borderWidth: 1,
                  alignSelf: 'center',
                  padding: 10,
                  borderRadius: 10,
                }}
                placeholder="INPUT WITH  MESSAGE"
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Input属性inputStyle验证 输入的文字样式设置">
          <TestCase itShould="设置inputStyle" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>inputStyle</Text>
              <Input
                inputContainerStyle={{
                  width: 280,
                  height: 40,
                  borderColor: 'black',
                  borderWidth: 1,
                  alignSelf: 'center',
                  padding: 10,
                  borderRadius: 10,
                }}
                inputStyle={{ color: 'black', fontSize: 20, fontWeight: '400' }}
                placeholder="INPUT WITH  MESSAGE"
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Input属性label验证 添加标题">
          <TestCase itShould="设置label" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>label</Text>
              <Input inputStyle={{ color: 'black', fontSize: 20, fontWeight: '500' }}
                label="label" placeholder="INPUT WITH  MESSAGE" />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Input属性labelProps验证">
          <TestCase itShould="设置labelProps" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>labelProps</Text>
              <Input
                labelProps={{
                  width: 100,
                  height: 100,
                  backgroundColor: 'yellow',
                }}
                label="label"
                placeholder="INPUT WITH  MESSAGE"
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Input属性labelStyle 为label属性设置样式">
          <TestCase itShould="设置labelStyle" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>labelStyle</Text>
              <Input
                labelStyle={{ fontSize: 30, fontWeight: '400', color: 'pink' }}
                label="label"
                placeholder="INPUT WITH  MESSAGE"
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Input属性leftIcon 添加leftIcon">
          <TestCase itShould="设置leftIcon" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>leftIcon</Text>
              <Input
                leftIcon={{
                  type: 'font-awesome',
                  name: 'comment',
                  color: 'pink',
                  size: 30,
                }}
                labelStyle={{ fontSize: 30, fontWeight: '400', color: 'pink' }}
                label="label"
                placeholder="INPUT WITH  MESSAGE"
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Input属性leftIconContainerStyle leftIcon设置样式">
          <TestCase itShould="设置leftIconContainerStyle" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>leftIconContainerStyle</Text>
              <Input
                leftIconContainerStyle={{
                  backgroundColor: 'black',
                  padding: 5,
                  borderRadius: 20,
                  marginRight: 20,
                }}
                leftIcon={{
                  type: 'font-awesome',
                  name: 'comment',
                  color: 'pink',
                  size: 30,
                }}
                labelStyle={{ fontSize: 30, fontWeight: '400', color: 'pink' }}
                label="label"
                placeholder="INPUT WITH  MESSAGE"
              />
            </View>
          </TestCase>
        </TestSuite>
        {/* <TestSuite name="Input属性renderErrorMessage验证 设置无效">
          <TestCase itShould="设置renderErrorMessage" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>renderErrorMessage</Text>
              <Input
                errorMessage="errorMessage111111111111"
                renderErrorMessage={false}
                labelStyle={{ fontSize: 30, fontWeight: '400', color: 'pink' }}
                label="label"
                placeholder="INPUT WITH  MESSAGE"
              />
            </View>
          </TestCase>
        </TestSuite> */}
        <TestSuite name="Input属性rightIcon 添加rightIcon">
          <TestCase itShould="设置rightIcon" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>rightIcon</Text>
              <Input
                rightIcon={{
                  type: 'font-awesome',
                  name: 'close',
                  color: 'pink',
                  size: 30,
                }}
                labelStyle={{ fontSize: 30, fontWeight: '400', color: 'pink' }}
                label="label"
                placeholder="INPUT WITH  MESSAGE"
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Input属性editable rightIcon设置样式">
          <TestCase itShould="设置rightIconContainerStyle" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>rightIconContainerStyle</Text>
              <Input
                inputStyle={{ color: '#222222' }}
                rightIconContainerStyle={{
                  width: 40,
                  borderWidth: 1,
                  backgroundColor: 'blue',
                  paddingLeft: 5,
                  borderRadius: 20,
                }}
                rightIcon={{
                  type: 'font-awesome',
                  name: 'close',
                  color: 'pink',
                  size: 30,
                }}
                labelStyle={{ fontSize: 30, fontWeight: '400', color: 'pink' }}
                label="label"
                placeholder="INPUT WITH  MESSAGE"
              />
            </View>
          </TestCase>
        </TestSuite>
        {/* <TestSuite name="Input属性shake 设置无效">
          <TestCase itShould="设置shake" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>shake</Text>
              <Input
                inputStyle={{ color: '#222222' }}
                shake={() => {
                  const shakeAnimationValue = new Animated.Value(0);
                  shakeAnimationValue.setValue(0);
                  Animated.timing(shakeAnimationValue, {
                    duration: 375,
                    toValue: 3,
                    easing: Easing.bounce,
                    useNativeDriver: true,
                  }).start();
                }}
                rightIconContainerStyle={{
                  width: 40,
                  borderWidth: 1,
                  backgroundColor: 'blue',
                  paddingLeft: 5,
                  borderRadius: 20,
                }}
                rightIcon={{
                  type: 'font-awesome',
                  name: 'close',
                  color: 'pink',
                  size: 30,
                }}
                labelStyle={{ fontSize: 30, fontWeight: '400', color: 'pink' }}
                label="label"
                placeholder="INPUT WITH MESSAGE"
              />
            </View>
          </TestCase>
        </TestSuite> */}
        <TestSuite name="Input属性editable  接收React-Native原生Input组件的editable">
          <TestCase itShould="接收React-Native原生Input组件的editable" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>原生Input组件的editable 设置未false不可输入</Text>
              <Input
                editable={false}
                inputStyle={{ color: '#222222' }}
                rightIconContainerStyle={{
                  width: 40,
                  borderWidth: 1,
                  backgroundColor: 'blue',
                  paddingLeft: 5,
                  borderRadius: 20,
                }}
                rightIcon={{
                  type: 'font-awesome',
                  name: 'close',
                  color: 'pink',
                  size: 30,
                }}
                labelStyle={{ fontSize: 30, fontWeight: '400', color: 'pink' }}
                label="label"
                placeholder="原生Input组件的editable"
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Input属性autoFocus  接收React-Native原生Input组件的autoFocus">
          <TestCase itShould="接收React-Native原生Input组件的autoFocus" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>原生Input组件的autoFocus设置为true input框自动聚焦</Text>
              <Input
                autoFocus={true}
                inputStyle={{ color: '#222222' }}
                rightIconContainerStyle={{
                  width: 40,
                  borderWidth: 1,
                  backgroundColor: 'blue',
                  paddingLeft: 5,
                  borderRadius: 20,
                }}
                rightIcon={{
                  type: 'font-awesome',
                  name: 'close',
                  color: 'pink',
                  size: 30,
                }}
                labelStyle={{ fontSize: 30, fontWeight: '400', color: 'pink' }}
                label="label"
                placeholder="原生Input组件的autoFocus"
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Input属性style  接收React-Native原生View组件的style">
          <TestCase itShould="接收React-Native原生View组件的style" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>原生View组件的style设置</Text>
              <Input
                style={{width:200,height:80,backgroundColor:'red'}}
                inputStyle={{ color: '#222222' }}
                rightIconContainerStyle={{
                  width: 40,
                  borderWidth: 1,
                  backgroundColor: 'blue',
                  paddingLeft: 5,
                  borderRadius: 20,
                }}
                rightIcon={{
                  type: 'font-awesome',
                  name: 'close',
                  color: 'pink',
                  size: 30,
                }}
                labelStyle={{ fontSize: 30, fontWeight: '400', color: 'pink' }}
                label="label"
                placeholder="原生View组件的style"
              />
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="Input属性testID 接收React-Native原生View组件的testID">
          <TestCase itShould="接收React-Native原生View组件的testID" tags={['C_API']}>
            <View style={styles.container}>
              <Text style={styles.subText}>原生View组件的testID设置</Text>
              <Input
                testID='InputViewStyle'
                inputStyle={{ color: '#222222' }}
                rightIconContainerStyle={{
                  width: 40,
                  borderWidth: 1,
                  backgroundColor: 'blue',
                  paddingLeft: 5,
                  borderRadius: 20,
                }}
                rightIcon={{
                  type: 'font-awesome',
                  name: 'close',
                  color: 'pink',
                  size: 30,
                }}
                labelStyle={{ fontSize: 30, fontWeight: '400', color: 'pink' }}
                label="label"
                placeholder="原生View组件的testID"
              />
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  subText: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
    color: '#222',
  },
  vertical: {
    paddingTop: 20,
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#222',
  },
  subTitleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
