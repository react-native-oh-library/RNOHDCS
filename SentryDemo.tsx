import React, { useEffect } from 'react';
import { Button, View, GestureResponderEvent,
   ScrollView, ToastAndroid as Toast, StyleSheet } from 'react-native';
import * as Sentry from "@sentry/react-native";

interface ButtonWithClickCb {
  title: string;
  pressCallback: (ev: GestureResponderEvent) => void
}
const user: Sentry.User = {
    username: 'wangml',
    email: 'tester@xxx.com',
    id: 10
};

export default function SentryDemo() {

  useEffect(() => {
    // 添加面包屑
    Sentry.addBreadcrumb({
      category: 'auth_110',
      message: 'Authenticated user Wml',
      level: 'info'
    });
    // 设置用户
    Sentry.setUser(user);
    // 设置 context
    Sentry.setContext('character', {
      name: 'Mighty Fighter',
      age: 19,
      attack_type: 'melee',
    });
    // 设置标签
    Sentry.setTag('wmlTag', 'ook');
    // 设置附件
    Sentry.getCurrentScope().addAttachment({
      filename: 'attachment.txt',
      data: 'Some content',
    });

    return () => {
      Sentry.getCurrentScope().clearAttachments();
    };
  }, []);

  const btnWithCbList: ButtonWithClickCb[] = [
    {
      title: 'Sentry Crash',
      pressCallback: () => {
        throw new Error('rnoh error!');
      }
    },
    {
      title: 'Sentry Native Crash',
      pressCallback: () => {
        Sentry.nativeCrash();
      }
    },
    {
      title: 'captureMessage',
      pressCallback: () => {
        Sentry.captureMessage('rnoh captureMessage!');
      }
    },
    {
      title: 'captureException',
      pressCallback: () => {
        try {
          throw new Error('rnoh captureException!')
        } catch (err) {
          Sentry.captureException(err);
        }
      }
    },
    {
      title: 'captureUserFeedBack',
      pressCallback: () => {
        const eventId = Sentry.captureMessage('User Feedback');
        const userFeedback = {
          event_id: eventId,
          name: 'John Doe',
          email: 'john@doe.com',
          comments: 'I really like your App, thanks!',
        };
        Sentry.captureUserFeedback(userFeedback);
      }
    },
    {
      title: 'configStore',
      pressCallback: () => {
        Sentry.configureScope(scope => {
          scope.setExtra( 'extData', 'abccc');
          scope.setTag('testScope', 'wmltest');
          scope.setUser({
            id: 110, email: 'wangml@xxx.com'
          })
        });
        Sentry.withScope(scope => {
          scope.setExtra( 'extData', 'abccc');
          scope.setTag('testScope', 'wmltest');
          scope.setUser({
            id: 110, email: 'wangml@xxx.com'
          })
          Sentry.captureMessage('test configStore');
        })
      }
    },
  ];

  return (
    <ScrollView>
      <View style={{ height: '100%', backgroundColor: 'white', padding: 20 }}>
        {
          btnWithCbList.map((bv) =>
            <View style={{ width: 300, height: 50, alignSelf: "center" }} key={bv.title}>
              <Button onPress={bv.pressCallback} title={bv.title} />
            </View>
          )
        }

      </View>
    </ScrollView>
  );
}
