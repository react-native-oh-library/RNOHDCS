
import React, { useState } from 'react';
import {
  Button,
  View,
  StyleSheet,
  ScrollView,
  Text,
  Switch,
} from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import JPush from 'jpush-react-native';
export function JPushExample() {
  let [text002, setText002] = useState<string>('');
  let sequence = 100;
  let tagVal = 'tag_test';
  let aliasVal = 'alias_test';
  let tagVals = ['tag_001', 'tag_002', 'tag_003'];
  let localNotification = { messageID: '1', title: 'add local notification', content: '测试添加一个本地通知', broadcastTime: new Date().getTime() + 6000, extras: { content: '附加内容' } }

  const addTagAliasListenerCallBack= (data:any) => {
      console.log('###jpush TagAliasListener ', data)
      setText002(JSON.stringify(data));
  }
  const customMessageListenerCallBack= (data:any) => {
    console.log('###jpush customMessageListener ', data)
    setText002(JSON.stringify(data));
}
const addLocalNotificationListenerCallBack= (data:any) => {
  console.log('###jpush addLocalNotificationListener ', data)
  setText002(JSON.stringify(data));
}
const addCommandEventListenerCallBack= (data:any) => {
  console.log('###jpush addCommandEventListener ', data)
  setText002(JSON.stringify(data));
}
const addConnectEventListenerCallBack= (data:any) => {
  console.log('###jpush ConnectEventListener ', data)
  setText002(JSON.stringify(data));
}
const addMobileEventListenerCallBack= (data:any) => {
  console.log('###jpush addMobileEventListener ', data)
  setText002(JSON.stringify(data));
}
  return (
    <Tester>
      <TestSuite name='jpush-react-native 测试'>
         <Text numberOfLines={10} style={styles.inputView}>
              {text002}
          </Text>
      <ScrollView style={styles.content}>
        
        <TestCase itShould='验证JPush接口' tags={['C_API']} >
          <View style={styles.section}>
            <Button
              key="getRegistrationID"
              title="getRegistrationID"
              onPress={async () => {
                JPush.getRegistrationID((data) => {
                  setText002('registerID:'+data.registerID)
                })
              }}
            />
               <Button
              key="stopPush"
              title="stopPush"
              onPress={async () => {
                JPush.stopPush();
                setTimeout(()=>{
                  JPush.isPushStopped((bo)=>{
                    setText002( bo?'极光推送状态：停止':'极光推送状态：正常')
                  })
                },500)
               
              }}
            />
                  <Button
              key="resumePush"
              title="resumePush"
              onPress={async () => {
                JPush.resumePush();
                setTimeout(()=>{
                  JPush.isPushStopped((bo)=>{
                    setText002( bo?'极光推送状态：停止':'极光推送状态：正常')
                  })
                },500)
              }}
            />
                <Button
              key="isPushStopped"
              title="isPushStopped"
              onPress={async () => {
                JPush.isPushStopped((bo)=>{
                  setText002( bo?'极光推送状态：停止':'极光推送状态：正常')
                })
              }}
            />

             <Button
              key="addLocalNotification"
              title="addLocalNotification"
              onPress={async () => {
                JPush.addLocalNotification(localNotification);
                //  getNotificationData();
              }}
            />
              <Button
              key="removeLocalNotification"
              title="removeLocalNotification"
              onPress={async () => {
                JPush.removeLocalNotification(localNotification);
              }}
            />
              <Button
              key="clearLocalNotifications"
              title="clearLocalNotifications"
              onPress={async () => {
                JPush.clearLocalNotifications();
              }}
            />
              <Button
              key="setBadge"
              title="setBadge"
              onPress={async () => {
                JPush.setBadge({ "badge": 100, "appBadge": 100 });
              }}
            />
            <Button
              key="isNotificationEnabled"
              title="isNotificationEnabled"
              onPress={async () => {
                JPush.isNotificationEnabled((bo) => {
                  setText002(bo ? '通知状态：true' : '通知状态：fasle')
                });
              }}
            />
            <Button
              key="addTags"
              title="addTags"
              onPress={async () => {
                JPush.addTags({ tags: tagVals, sequence: sequence });
              }}
            />
            <Button
              key="updateTags"
              title="updateTags"
              onPress={async () => {
                tagVals = ['newtag_001', 'newtag_002', 'newtag_003'];
                JPush.updateTags({ tags: tagVals, sequence: sequence });
              }}
            />
            <Button
              key="queryTag"
              title="queryTag"
              onPress={async () => {
                JPush.queryTag({ sequence, tag: tagVals[0] });
              }}
            />
            <Button
              key="queryTags"
              title="queryTags"
              onPress={async () => {
                JPush.queryTags({ sequence });
              }}
            />
            <Button
              key="deleteTag"
              title="deleteTag"
              onPress={async () => {
                JPush.deleteTag({ tags: [tagVals[0]], sequence: sequence });
              }}
            />

            <Button
              key="deleteTags"
              title="deleteTags"
              onPress={async () => {
                JPush.deleteTags({ sequence });
              }}
            />
            <Button
              key="setAlias"
              title="setAlias"
              onPress={async () => {
                JPush.setAlias({ alias: aliasVal, sequence });
              }}
            />
            <Button
              key="deleteAlias"
              title="deleteAlias"
              onPress={async () => {
                JPush.deleteAlias({ sequence });
              }}
            />
            <Button
              key="queryAlias"
              title="queryAlias"
              onPress={async () => {
                JPush.queryAlias({ sequence });
              }}
            />
             <Button
              key="setMobileNumber"
              title="setMobileNumber"
              onPress={async () => {
                JPush.setMobileNumber({sequence,mobileNumber:'12345678900'});
              }}
            />
             <Button
              key="addConnectEventListener"
              title="addConnectEventListener"
              onPress={async () => {
                JPush.addConnectEventListener(addConnectEventListenerCallBack)
              }}
            />
              <Button
              key="addCommandEventListener"
              title="addCommandEventListener"
              onPress={async () => {
                JPush.resumePush();
                JPush.addCommandEventListener(addCommandEventListenerCallBack)
              }}
            />
              <Button
              key="addLocalNotificationListener"
              title="addLocalNotificationListener"
              onPress={async () => {
                JPush.addLocalNotificationListener(addLocalNotificationListenerCallBack)
              }}
            />
             <Button
              key="addCustomMessageListener"
              title="addCustomMessageListener"
              onPress={async () => {
                JPush.addCustomMessageListener(customMessageListenerCallBack)
              }}
            />
            <Button
              key="addTagAliasListener"
              title="addTagAliasListener"
              onPress={async () => {
                JPush.addTagAliasListener(addTagAliasListenerCallBack)
              }}
            />
             <Button
              key="addMobileNumberListener"
              title="addMobileNumberListener"
              onPress={async () => {
                JPush.addMobileNumberListener(addMobileEventListenerCallBack)
              }}
            />
            <Button
              key="removeListener"
              title="removeListener"
              onPress={async () => {
                JPush.removeListener(addTagAliasListenerCallBack);
                JPush.removeListener(customMessageListenerCallBack);
                JPush.removeListener(addLocalNotificationListenerCallBack);
                JPush.removeListener(addCommandEventListenerCallBack);
                JPush.removeListener(addConnectEventListenerCallBack);
                JPush.removeListener(addMobileEventListenerCallBack);
              }}
            />
          </View>
        </TestCase>
       
      </ScrollView>
      </TestSuite>
    </Tester>
  );
}
const styles = StyleSheet.create({
  SwithView: {
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  content: {
    width: '100%',
    height: 600,
    marginTop:20
  },
  section: {
    padding: 20,
    fontSize: 14,
    height:1200,
    gap:8,
    display:'flex',
    flexDirection:'column'
  },

  inputView: {
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 120,
    width:'100%',
    marginTop:20,
    padding:10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    color: '#fff',
  },
 
 
  Button: {
    marginBottom: 20,
  },
});
