import {StyleSheet, ScrollView, Text} from 'react-native';
import {Center, Image, VStack} from 'native-base';
export function ImageExample() {
  return (
    <>
      <ScrollView style={styles.content}>
        <Center>
          <Image
            source={{
              uri: 'https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI.png',
            }}
            alt="Alternate Text"
            size="xl"
          />
        </Center>
        ;
        <Center>
          <Image
            src="https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI.png"
            alt="Alternate Text"
            size="xl"
          />
        </Center>
        ;
        <Center>
          <Image
            source={{
              uri: 'https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI.png',
            }}
            alt="Alternate Text"
            size="xl"
          />
          <Image
            source={{
              uri: 'https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI.png',
            }}
            alt="Alternate Text"
            _alt={{color: 'red', fontSize: '20'}}
            size="xl"
          />
        </Center>
        <VStack
          space={2}
          justifyContent="center"
          alignItems="center"
          safeAreaTop // my={6}
          mb={6}>
          {['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map(size => (
            <Image
              key={size}
              size={size}
              resizeMode="cover"
              source={{
                uri: 'https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI.png',
              }}
              alt={'Alternate Text ' + size}
            />
          ))}
        </VStack>
        <Center>
          <Image
            size={150}
            alt="fallback text"
            borderRadius={100}
            source={{
              uri: 'https://-page-icon.png',
            }}
            fallbackSource={{
              uri: 'https://www.w3schools.com/css/img_lights.jpg',
            }}
          />
        </Center>
        <Center>
          <Image
            size={150}
            ignoreFallback={true}
            alt="fallback text"
            borderRadius={100}
            source={{
              uri: 'https://-page-icon.png',
            }}
            fallbackSource={{
              uri: 'https://www.w3schools.com/css/img_lights.jpg',
            }}
          />
          <Image
            size={150}
            ignoreFallback={false}
            alt="fallback text"
            borderRadius={100}
            source={{
              uri: 'https://-page-icon.png',
            }}
            fallbackSource={{
              uri: 'https://www.w3schools.com/css/img_lights.jpg',
            }}
          />
        </Center>
        <Center>
          <Image
            size={150}
            fallbackElement={<Text>fallbackElement</Text>}
            alt="fallback text"
            borderRadius={100}
            source={{
              uri: 'https://-page-icon.png',
            }}
            fallbackSource={{
              uri: 'https://www.w3schools.com/css/img_lights.jpg',
            }}
          />
        </Center>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  btn: {
    width: 60,
    height: 60,
    aspectRatio: 1,
  },
  content: {
    width: '100%',
    height: '100%',
  },
  section: {
    backgroundColor: '#f2f2f2',
  },
  box: {
    height: 100,
    width: 200,
  },
  tipText: {
    fontSize: 12,
    color: '#999',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    color: '#fff',
  },
  colText: {
    padding: 5,
  },
  col: {
    backgroundColor: '#FFB6C1',
  },
  row: {
    backgroundColor: '#00BFFF',
  },
});
