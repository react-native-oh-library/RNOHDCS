import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Avatar, Icon } from '@rneui/themed';
import { Text } from '@rneui/base';

type AvatarData = {
  image_url: string;
};

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  subTitleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  normalTitle: {
    fontWeight: 'bold',
    fontSize: 15,
  }
});


const dataList: AvatarData[][] = [[{
  image_url: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
},
{
  image_url: 'https://randomuser.me/api/portraits/men/36.jpg',
},
{
  image_url:
    'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
}],
[
  {
    image_url:
      'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg',
  },
  {
    image_url:
      'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg',
  },
  {
    image_url:
      'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
  }
]
];

type AvatarComponentProps = {};

const Avatars: React.FunctionComponent<AvatarComponentProps> = () => {
  return (
    <>
      <Text style={styles.titleStyle}>Avatars</Text>
      <ScrollView>
        <Text style={styles.subTitleStyle}>Photo Avatars</Text>
        {dataList.map((chunk, chunkIndex) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 30,
            }}
            key={chunkIndex}
          >
            {chunk.map((l, i) => (
              <Avatar
                size={64}
                rounded
                source={l.image_url ? { uri: l.image_url } : {}}
                key={`${chunkIndex}-${i}`}
              />
            ))}
          </View>
        ))}
        <Text style={styles.subTitleStyle}>Icon Avatars</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 30,
          }}
        >
          <Avatar
            size={64}
            rounded
            icon={{ name: 'pencil', type: 'font-awesome' }}
            containerStyle={{ backgroundColor: '#6733b9' }}
          />
          <Avatar
            size={64}
            rounded
            icon={{ name: 'rocket', type: 'font-awesome' }}
            containerStyle={{ backgroundColor: '#00a7f7' }}
          />
          <Avatar
            size={64}
            rounded
            icon={{ name: 'heartbeat', type: 'font-awesome' }}
            containerStyle={{ backgroundColor: '#eb1561' }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 30,
          }}
        >
          <Avatar
            size={64}
            rounded
            icon={{
              name: 'users',
              type: 'font-awesome',
              color: '#cdde20',
            }}
            containerStyle={{
              borderColor: 'grey',
              borderStyle: 'solid',
              borderWidth: 1,
            }}
          />
          <Avatar
            size={64}
            rounded
            icon={{ name: 'bank', type: 'font-awesome', color: '#009688' }}
            containerStyle={{
              borderColor: 'grey',
              borderStyle: 'solid',
              borderWidth: 1,
            }}
          />
          <Avatar
            size={64}
            rounded
            icon={{ name: 'apple', type: 'font-awesome', color: '#ff5606' }}
            containerStyle={{
              borderColor: 'grey',
              borderStyle: 'solid',
              borderWidth: 1,
            }}
          />
        </View>

        <Text style={styles.subTitleStyle}>Letter Avatars</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 30,
          }}
        >
          <Avatar
            size={64}
            rounded
            title="Fc"
            containerStyle={{ backgroundColor: '#3d4db7' }}
          />
          <Avatar
            size={64}
            rounded
            title="P"
            containerStyle={{ backgroundColor: 'coral' }}
          />
          <Avatar
            size={64}
            rounded
            title="Rd"
            containerStyle={{ backgroundColor: 'purple' }}
          />
        </View>

        <Text style={styles.subTitleStyle}>Badged Avatars</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 40,
          }}
        >
          <Avatar
            size={64}
            rounded
            icon={{ name: 'pencil', type: 'font-awesome' }}
            containerStyle={{ backgroundColor: 'orange' }}
          >
            <Avatar.Accessory size={24} />
          </Avatar>
          <Avatar
            size={64}
            rounded
            source={{ uri: 'https://randomuser.me/api/portraits/women/57.jpg' }}
            containerStyle={{ backgroundColor: 'grey' }}
          >
            <Avatar.Accessory size={23} name='pencil' type='font-awesome' color='#00aced'>
            </Avatar.Accessory>
          </Avatar>
        </View>
      </ScrollView>
    </>
  );
};

export default Avatars;
