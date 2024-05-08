import React from 'react';
import { Text, View, ScrollView, StyleSheet} from 'react-native';
import { Avatar, Badge, Icon, withBadge } from '@rneui/themed';

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
    <>
      <Text style={styles.titleStyle}>Badge</Text>
      <ScrollView>
      
        <Text style={styles.subTitleStyle}>Standard Badge</Text>
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
      
        <Text style={styles.subTitleStyle}>Mini Badge</Text>
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

        <Text style={styles.subTitleStyle}>Badge as Indicator</Text>
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
      </ScrollView>
    </>
  );
};

export default badgeComponent;
