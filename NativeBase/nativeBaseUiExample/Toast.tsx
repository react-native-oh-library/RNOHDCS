import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Center, Box, VStack, useToast, Button} from 'native-base';

export function ToastExample() {
  const toast = useToast();
  return (
    <>
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text>Basic</Text>
          <View style={styles.subSection}>
            <Center>
              <Button
                onPress={() =>
                  toast.show({
                    description: 'Hello world',
                  })
                }>
                Show Toast
              </Button>
            </Center>
          </View>
        </View>
        <View style={styles.section}>
          <Text>位置</Text>
          <View style={styles.subSection}>
            <Center>
              <VStack space={2}>
                <Button
                  onPress={() =>
                    toast.show({
                      title: 'Hello world',
                      placement: 'bottom',
                    })
                  }>
                  Bottom
                </Button>
                <Button
                  onPress={() =>
                    toast.show({
                      title: 'Hello world',
                      placement: 'top',
                    })
                  }>
                  Top
                </Button>
                <Button
                  onPress={() =>
                    toast.show({
                      title: 'Hello world',
                      placement: 'top-left',
                    })
                  }>
                  Top left
                </Button>
                <Button
                  onPress={() =>
                    toast.show({
                      title: 'Hello world',
                      placement: 'top-right',
                    })
                  }>
                  Top right
                </Button>
                <Button
                  onPress={() =>
                    toast.show({
                      title: 'Hello world',
                      placement: 'bottom-left',
                    })
                  }>
                  Bottom left
                </Button>
                <Button
                  onPress={() =>
                    toast.show({
                      title: 'Hello world',
                      placement: 'bottom-right',
                    })
                  }>
                  Bottom right
                </Button>
              </VStack>
            </Center>
          </View>
        </View>
        <View style={styles.section}>
          <Text>自定义</Text>
          <View style={styles.subSection}>
            <Center>
              <Button
                onPress={() => {
                  toast.show({
                    render: () => {
                      return (
                        <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                          Hello! Have a nice day
                        </Box>
                      );
                    },
                  });
                }}>
                Custom Toast
              </Button>
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
