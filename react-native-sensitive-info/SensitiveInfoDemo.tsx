import React, { useCallback } from 'react';
import { TestSuite, Tester, TestCase,Filter } from '@rnoh/testerino';

import { View, Alert, Button, } from 'react-native';

import sensitive from 'react-native-sensitive-info'

export function SensitiveInfo({ filter }: { filter: Filter }) {

  const handleSetItem = useCallback(() => {
    sensitive.setItem('key1', 'value1', {
      sharedPreferencesName: 'exampleApp',
      keychainService: 'exampleApp',
    })
  }, []);

  const handleGetItem = useCallback(() => {
    sensitive.getItem('key1', {
      sharedPreferencesName: 'exampleApp',
      keychainService: 'exampleApp',
    }).then(res => {
      Alert.alert(res)
    });
  }, []);

  const handleHasItem = useCallback(() => {
    sensitive.hasItem('key1', {
      sharedPreferencesName: 'exampleApp',
      keychainService: 'exampleApp',
      kSecAccessControl: 'kSecAccessControlBiometryAny', // Enabling FaceID
      touchID: true,
      showModal: true,
    });
  }, []);

  const handleDelItem = useCallback(() => {
    sensitive.deleteItem('key1', {
      sharedPreferencesName: 'exampleApp',
      keychainService: 'exampleApp',
    });
  }, [])

  const handleGetAllItems = useCallback(() => {
    sensitive.getAllItems({
      sharedPreferencesName: 'exampleApp',
      keychainService: 'exampleApp',
    });
  }, [])

  const handleHasEnrolledFingerprints = useCallback(() => {
    sensitive.hasEnrolledFingerprints();
  }, [])

  const handleIsSensorAvailable = useCallback(() => {
    sensitive.isSensorAvailable().then(res => {
      Alert.alert(JSON.stringify(res))
    });
  }, [])

  return (
    <Tester>
      <TestSuite name='SensitiveInfoDemo'>
        <TestCase itShould='Basic modal' tags={['C_API']}>
          <View style={{ width: '100%', height: '100%', backgroundColor: '#222' }}>
            <Button
              title="Add item using setItem"
              onPress={handleSetItem}
            />
            <Button
              title="Add item using getItem"
              onPress={handleGetItem}
            />
            <Button
              title="Add item using handleSetItemUsingTouchIDOnPress"
              onPress={handleHasItem}
            />
            <Button
              title="Add item using deleteItem"
              onPress={handleDelItem}
            />
            <Button
              title="Add item using handleGetAllItems"
              onPress={handleGetAllItems}
            />
            <Button
              title="handleHasEnrolledFingerprints"
              onPress={handleHasEnrolledFingerprints}
            />
            <Button
              title="handleIsSensorAvailable"
              onPress={handleIsSensorAvailable}
            />
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
  );
}