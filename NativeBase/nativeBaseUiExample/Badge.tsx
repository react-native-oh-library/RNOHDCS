import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {
  Badge,
  Box,
  VStack,
  HStack,
  Button,
  Center,
} from 'native-base';

function Example() {
  return (
    <Box alignItems="center">
      <VStack>
        {/* 鸿蒙上单独写zIndex属性不生效可以用position+zIndex实现效果 */}
        <Badge // bg="red.400"
          colorScheme="danger"
          rounded="full"
          mb={-4}
          mr={-4}
          zIndex={1}
          variant="solid"
          position={'absolute'}
          right={0}
          top={-5}
          alignSelf="flex-end"
          _text={{
            fontSize: 12,
          }}>
          2
        </Badge>
        <Button
          zIndex={0}
          mx={{
            base: 'auto',
            md: 0,
          }}
          p="2"
          bg="cyan.500"
          _text={{
            fontSize: 14,
          }}>
          Notifications
        </Button>
      </VStack>
    </Box>
  );
}

export function BadgeExample() {
  // 各种状态标签
  return (
    <>
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text>Basic</Text>
          <View style={styles.subSection}>
            <HStack
              space={{
                base: 2,
                sm: 4,
              }}
              mx={{
                base: 'auto',
                md: 0,
              }}>
              <Badge colorScheme="success">SUCCESS</Badge>
              <Badge colorScheme="danger">DANGER</Badge>
              <Badge colorScheme="info">INFO</Badge>
              <Badge colorScheme="coolGray">DARK</Badge>
            </HStack>
          </View>
        </View>
        <View style={styles.section}>
          <Text>Variants</Text>
          <View style={styles.subSection}>
            <Box alignItems="center">
              <HStack
                space={4}
                mx={{
                  base: 'auto',
                  md: '0',
                }}>
                {['solid', 'outline', 'subtle'].map(key => (
                  <VStack key={key} space={4}>
                    <Badge variant={key} alignSelf="center">
                      DEFAULT
                    </Badge>
                    <Badge
                      colorScheme="success"
                      alignSelf="center"
                      variant={key}>
                      SUCCESS
                    </Badge>
                    <Badge colorScheme="error" alignSelf="center" variant={key}>
                      ERROR
                    </Badge>
                    <Badge colorScheme="info" alignSelf="center" variant={key}>
                      INFO
                    </Badge>
                    <Badge
                      colorScheme="warning"
                      alignSelf="center"
                      variant={key}>
                      WARNING
                    </Badge>
                  </VStack>
                ))}
              </HStack>
            </Box>
          </View>
        </View>
        <View style={styles.section}>
          <Text>Composition</Text>
          <View style={styles.subSection}>
            <Center flex={1} px="3">
              <Example />
            </Center>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
  },
  section: {
    backgroundColor: '#f2f2f2',
  },
  subSection: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 10,
    width: '100%',
    padding: 10,
  },
});
