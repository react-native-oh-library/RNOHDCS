import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native';
import PushNotificationIOS from 'react-native-push-notification';

export const PushNotificationExample = () => {

  const [data, setData] = useState({});

  const addNotificationRequest = () => {
    PushNotificationIOS.addNotificationRequest({
      id: 'test',
      title: 'title',
      subtitle: 'subtitle',
      body: 'body',
      category: 'test',
      threadId: 'thread-id',
      fireDate: new Date(new Date().valueOf() + 2000),
      repeats: true,
      userInfo: {
        image: 'https://www.github.com/Naturalclar.png',
      }
    });
  };

  const addSilentNotificationRequest = () => {
    PushNotificationIOS.addNotificationRequest({
      id: 'test-4',
      title: 'title',
      subtitle: 'subtitle',
      body: 'body',
      category: 'test',
      isSilent: true,
      threadId: 'thread-id',
      fireDate: new Date(new Date().valueOf() + 2000),
      repeats: true,
      userInfo: {
        image: 'https://www.github.com/Naturalclar.png',
      }
    });
  };

  const addMultipleRequests = () => {
    PushNotificationIOS.addNotificationRequest({
      id: 'test-1',
      title: 'First',
      subtitle: 'subtitle',
      body: 'First Notification out of 3',
      category: 'test',
      threadId: 'thread-id',
      fireDate: new Date(new Date().valueOf() + 10000),
      repeats: true,
    });

    PushNotificationIOS.addNotificationRequest({
      id: 'test-2',
      title: 'Second',
      subtitle: 'subtitle',
      body: 'Second Notification out of 3',
      category: 'test',
      threadId: 'thread-id',
      fireDate: new Date(new Date().valueOf() + 12000),
      repeats: true,
    });

    PushNotificationIOS.addNotificationRequest({
      id: 'test-3',
      title: 'Third',
      subtitle: 'subtitle',
      body: 'Third Notification out of 3',
      category: 'test',
      threadId: 'thread-id',
      fireDate: new Date(new Date().valueOf() + 14000),
      repeats: true,
    });
  };

  const removeAllDeliveredNotifications = () => {
    PushNotificationIOS.removeAllDeliveredNotifications();
  };

  const removeDeliveredNotifications = () => {
    PushNotificationIOS.removeDeliveredNotifications(['test-1', 'test-2']);
  };

  const getDeliveredNotifications = () => {
    PushNotificationIOS.getDeliveredNotifications((data) => {
      if (data) {
        setData(data)
      } else {
        console.log("failed");
      }
    });
  };


  return (
    <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>

      <Button title="Add Notification Request"
        onPress={addNotificationRequest}
      />

      <View style={{ height: 20 }} /> {/* 设置间隔高度 */}

      <Button title="Add Slient Notification Request"
        onPress={addSilentNotificationRequest}
      />

      <View style={{ height: 20 }} /> {/* 设置间隔高度 */}

      <Button
        title="Add Multiple Notification Requests"
        onPress={addMultipleRequests}
      />

      <View style={{ height: 20 }} /> {/* 设置间隔高度 */}
      <Button
        title="Set app's icon badge to 42"
        onPress={() =>
          PushNotificationIOS.setApplicationIconBadgeNumber(42)
        }
      />

      <View style={{ height: 20 }} /> {/* 设置间隔高度 */}

      <Button
        title="Clear app's icon badge"
        onPress={() =>
          PushNotificationIOS.setApplicationIconBadgeNumber(0)
        }
      />

      <View style={{ height: 20 }} /> {/* 设置间隔高度 */}

      <Button
        title="Remove All Delivered Notification Requests"
        onPress={removeAllDeliveredNotifications}
      />

      <View style={{ height: 20 }} /> {/* 设置间隔高度 */}

      <Button
        onPress={removeDeliveredNotifications}
        title="Remove Delivered Notification Requests"
      />

      <View style={{ height: 20 }} /> {/* 设置间隔高度 */}

      <View>
        <Button
          onPress={getDeliveredNotifications}
          title="Get Delivered Notification"
        />
        <Text>{JSON.stringify(data)}</Text>
      </View>
    </View>
  );
};
