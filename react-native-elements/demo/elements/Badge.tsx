import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Avatar, Badge, Icon, withBadge } from '@rneui/themed';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino'

const BadgedIcon = withBadge(15)(Icon);

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  subTitleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  }
});

const badgeComponent = () => {
  return (
    <Tester>
      <TestSuite name='Badge'>
        <ScrollView>
          <TestCase itShould='Standard Badge' tags={['C_API']}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20,
                marginBottom: 40,
              }}
            >
              <Badge value="3" status="success" />
              <Badge value="99+" status="error" />
              <Badge value="500" status="primary" />
              <Badge value="10" status="warning" />
            </View>
          </TestCase>
          <TestCase itShould='Mini Badge' tags={['C_API']}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <Badge status="success" />
              <Badge status="error" />
              <Badge status="primary" />
              <Badge status="warning" />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginBottom: 20,
              }}
            >
              <Text style={{ color: '#397af8', paddingVertical: 10 }}>Success</Text>
              <Text style={{ color: '#397af8', paddingVertical: 10 }}>Error</Text>
              <Text style={{ color: '#397af8', paddingVertical: 10 }}>Primary</Text>
              <Text style={{ color: '#397af8', paddingVertical: 10 }}>Warning</Text>
            </View>

          </TestCase>
          <TestCase itShould='Badge as Indicator' tags={['C_API']}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20,
                marginBottom: 40,
              }}
            >
              <View>
                <Avatar
                  rounded
                  source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
                  size="medium"
                />
                <Badge
                  status="success"
                  containerStyle={{ position: 'absolute', top: 5, left: 40 }}
                />
              </View>
              {/* @ts-ignore */}
              <BadgedIcon type="font-awesome" name="rocket" />
              <View>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/women/40.jpg',
                  }}
                  size="large"
                />
                <Badge
                  status="primary"
                  value={10}
                  containerStyle={{ position: 'absolute', top: 5, left: 60 }}
                />
              </View>
            </View>
          </TestCase>
        </ScrollView>
      </TestSuite>
    </Tester>
  );
};

export default badgeComponent;
