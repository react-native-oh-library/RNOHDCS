import { Text,View,Button, ScrollView, SafeAreaView, StyleSheet,Modal} from 'react-native';
import { useState,useRef } from 'react';
import Recaptcha, { RecaptchaRef } from 'react-native-recaptcha-that-works';
import { TestCase, TestSuite, Tester } from '@rnoh/testerino';
import  WebView  from 'react-native-webview';
import React from 'react';

export function ReCAPTCHAExample() {
  const $recaptcha = useRef<RecaptchaRef | null>(null);

  function headerComponent(){
    if(state.headerComponent){
      return(<SafeAreaView><Button title="Close modal" onPress={()=>{$recaptcha.current?.close();}} /></SafeAreaView>)
    }else{
      return(<SafeAreaView><Button title="关闭悬浮窗" onPress={()=>{$recaptcha.current?.close();}} /></SafeAreaView>)
    }
  }
  function loadingComponent(){
    if(state.loadingComponent){
      return(<View><Text style={{color:'red'}} onPress={()=>{$recaptcha.current?.close()}}>正在加载</Text></View>)
    }else{
      return(<View><Text style={{color:'red'}} onPress={()=>{$recaptcha.current?.close()}}>loding</Text></View>)
    }
  }
  function footerComponent(){
    if(state.footerComponent){
      return(<Text style={{color:'red'}}>      Footer here</Text>)
    }else{
      return(<Text style={{color:'red'}}>    脚页</Text>)
    }
  }

  function tester_change(title:string,buttonTitle:string,pressEvent:Function){
    return(          
      <TestCase
        itShould = {title} initialState={false}  assert={({expect, state}) => { expect(state).to.be.true; }}
        arrange={({setState}) => ( <Button title={buttonTitle} onPress={() => { pressEvent();setState(true);$recaptcha.current?.open();}}></Button> )} >
      </TestCase>
    )
  }

  function tester_back_string(title:string,string:any){
    return(<TestCase itShould={title}><Text>{string}</Text></TestCase>)
  }
  const [state,setState] = useState({
    headerComponent:true,
    loadingComponent:true,
    footerComponent:true,
    lang:'zh-CN',
    siteKey:'6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
    baseUrl:'http://127.0.0.1',
    size:'invisible',
    recaptchaDomain:'www.recaptcha.net',
    theme:'dark',
    gstaticDomain:'www.gstatic.com',
    action:'',
    style:{},
    modalProps:{},
    webViewProps:{},
    onLoad:'',
    onClose:'',
    onError:'',
    onExpire:'',
    token:'',
    enterprise:false,
    hideBadge:false,
  });
  return (
    <SafeAreaView style={styles.safeArea}>
      <View
      >
         {/* <WebView
          originWhitelist={['*']}
          source={{html:`<!DOCTYPE html>
          <html>
          <head>
          <meta charset="utf-8">
          <title>菜鸟教程(runoob.com)</title>
          </head>
          <body>
              <h1>我的第一个标题</h1>
              <p>我的第一个段落。</p>
          </body>
          </html>`,baseUrl:'127.0.0.1'}}
          containerStyle={{height:100,flex: 0}}
        > */}
          <Recaptcha
            ref={$recaptcha}
            lang={state.lang}
            style = {state.style}
            modalProps={state.modalProps}
            webViewProps={state.webViewProps}
            headerComponent={ headerComponent()}
            loadingComponent = { loadingComponent() }
            footerComponent={footerComponent()}
            recaptchaDomain = {state.recaptchaDomain}
            siteKey= {state.siteKey}
            baseUrl={state.baseUrl}
            gstaticDomain = {state.gstaticDomain}
            size={state.size}
            theme={state.theme}
            action={state.action}
            enterprise={state.enterprise}
            hideBadge={state.hideBadge}
            onLoad={() => { setState({...state,onLoad: 'pass'}); }}
            onClose={() => { setState({...state,onClose: 'pass'}); }}
            onError={(err) => { setState({...state,onError: 'pass'}); }}
            onExpire={() => { setState({...state,onExpire: 'pass'}); }}
            onVerify={(token) => { setState({...state,token: token}); }}
          />
        {/* </WebView> */}
      </View>
       

      <Tester>
        <ScrollView>
          <Text style = {{color:'blue'}}> token: {state.token}</Text>
        <TestSuite name='react-native-recaptcha-that-works'>
              {tester_change("语言 lang = zh-CN",'zh-CN',()=>{ setState({...state,lang:'zh-CN'}) })}
              {tester_change("语言 lang = pt",'pt',()=>{ setState({...state,lang:'pt'}) })}
              {tester_change("样式 style = {marginBottom:100}",'style {marginBottom:100}',()=>{ setState({...state,style: {marginBottom:100}}) })}
              {tester_change("样式 style = {marginBottom:50}",'style {marginBottom:50}',()=>{ setState({...state,style: {marginBottom:50}}) })}
              {tester_change("modal样式 modalProps = {animationType slide}",'modal样式 ',()=>{ setState({...state,modalProps: {animationType:'slide'}}) })}
              {tester_change("modal样式 modalProps = {animationType none}",'modal样式 ',()=>{ setState({...state,modalProps: {animationType:'fade'}}) })}
              {tester_change("webview样式 webViewProps = {marginBottom:100}",'webview样式 ',()=>{ setState({...state,webViewProps: {containerStyle:{marginBottom:100}}}) })}
              {tester_change("webview样式 webViewProps = {marginBottom:50}",'webview样式 ',()=>{ setState({...state,webViewProps: {containerStyle:{marginBottom:50}}}) })}
              {tester_change("头组件 headerComponent Close modal",'Close modal',()=>{ setState({...state,headerComponent:true}) })}
              {tester_change("头组件 headerComponent 关闭悬浮窗",'关闭悬浮窗',()=>{ setState({...state,headerComponent:false}) })}
              {tester_change("加载组件 loadingComponent 正在加载",'正在加载',()=>{ setState({...state,loadingComponent:true}) })}
              {tester_change("加载组件 loadingComponent loding",'loding',()=>{ setState({...state,loadingComponent:false}) })}
              {tester_change("页脚组件 footerComponent Footer here",'Footer here',()=>{ setState({...state,footerComponent:true}) })}
              {tester_change("页脚组件 footerComponent 脚页",'脚页',()=>{ setState({...state,footerComponent:false}) })}
              {tester_change("验证码api加载域 recaptchaDomain www.recaptcha.net",'www.recaptcha.net',()=>{ setState({...state,recaptchaDomain:'www.recaptcha.net'}) })}
              {tester_change("验证码api加载域 recaptchaDomain www.google.com",'www.google.com',()=>{ setState({...state,recaptchaDomain:'www.google.com'}) })}
              {tester_change("站点密匙(无效的密匙) siteKey 6LdiaRYqAAAAAJxufkrfh-3RPHhmcMvORdtfHHfh",'6LdiaRYqAAAAAJxufkrfh-3RPHhmcMvORdtfHHfh',()=>{ setState({...state,siteKey:'6LdiaRYqAAAAAJxufkrfh-3RPHhmcMvORdtfHHfh'}) })}
              {tester_change("站点密匙(有效的密匙) siteKey 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",'6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',()=>{ setState({...state,siteKey:'6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}) })}
              
              {tester_change(" baseUrl = http://127.0.0.1",'http://127.0.0.1',()=>{ setState({...state,baseUrl:'http://127.0.0.1'}) })}
              {tester_change(" baseUrl = localhost",'localhost',()=>{ setState({...state,baseUrl:'localhost'}) })}
              
              {tester_change("主题 theme = dark",'dark',()=>{ setState({...state,theme:'dark'}) })}
              {tester_change("主题 theme = light",'light',()=>{ setState({...state,theme:'light'}) })}
              {tester_change("企业验证码服务 enterprise = true",'true',()=>{ setState({...state,enterprise:true}) })}
              {tester_change("企业验证码服务 enterprise = false",'false',()=>{ setState({...state,enterprise:false}) })}
              {tester_change("隐藏徽标 hideBadge = true",'true',()=>{ setState({...state,hideBadge:true}) })}
              {tester_change("隐藏徽标 hideBadge = false",'false',()=>{ setState({...state,hideBadge:false}) })}
              {tester_back_string('onLoad',state.onLoad)}
              {tester_back_string('onClose',state.onClose)}
              {tester_back_string('onError',state.onError)}
              {tester_back_string('onExpire',state.onExpire)}
              <View style={{height:300}}></View>
        </TestSuite>
        </ScrollView>
      </Tester>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});