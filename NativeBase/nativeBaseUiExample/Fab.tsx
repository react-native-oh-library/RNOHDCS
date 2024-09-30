import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Fab, Box, Center, WarningIcon, CloseIcon} from 'native-base';

export function FabExample() {
  return (
    <>
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text>Basic</Text>
          <View style={styles.subSection}>
            <Box alignItems="center">
              <Center>
                <Box
                  height="200"
                  w={[200, 300, 400]}
                  shadow="2"
                  rounded="lg"
                  _dark={{
                    bg: 'coolGray.200:alpha.20',
                  }}
                  _light={{
                    bg: 'coolGray.200:alpha.20',
                  }}>
                  <Fab
                    renderInPortal={false}
                    shadow={2}
                    size="sm"
                    icon={<WarningIcon color="white" name="plus" size="sm" />}
                  />
                </Box>
              </Center>
            </Box>
          </View>
        </View>
        <View style={styles.section}>
          <Text>Placement</Text>
          <View style={styles.subSection}>
            <Center>
              <Box
                height="200"
                w={[200, 300, 400]}
                shadow="2"
                rounded="lg"
                _dark={{
                  bg: 'coolGray.200:alpha.20',
                }}
                _light={{
                  bg: 'coolGray.200:alpha.20',
                }}>
                <Fab
                  renderInPortal={false}
                  shadow={2}
                  placement="top-right"
                  size="sm"
                  icon={<CloseIcon size="3" />}
                  label="Quick Start"
                />
              </Box>
            </Center>
          </View>
        </View>
        <View style={styles.section}>
          <Text>Custom Position</Text>
          <View style={styles.subSection}>
            <Center>
              <Box
                height="200"
                w={[200, 300, 400]}
                shadow="2"
                rounded="lg"
                _dark={{
                  bg: 'coolGray.200:alpha.20',
                }}
                _light={{
                  bg: 'coolGray.200:alpha.20',
                }}>
                <Fab
                  renderInPortal={false}
                  shadow={2}
                  right={70}
                  bottom={50}
                  size="sm"
                  icon={<CloseIcon size="3" />}
                />
              </Box>
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
