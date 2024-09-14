import {useNavigation, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as React from 'react';
import {StatusBar, View, Text, StyleSheet, ScrollView} from 'react-native';
import {colors, screenStyles} from '../../constants/index';
import {EXAMPLES, ExampleLink} from './ExampleLink';

const RouteCenterScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  function goBack() {
    navigation.goBack();
  }

  return (
    <>
      <SafeAreaView>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.primaryBlue}
          translucent
        />
        <View style={styles.container}>
          <View style={styles.header}>
            <Text>react-native-sticky-parallax-header测试中心页面</Text>
          </View>
          <ScrollView>
            {EXAMPLES.map(example => (
              <ExampleLink key={example.routeName} {...example} />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'hsl(193, 95%, 68%)',
    paddingBottom: 100,
  },
  header: {
    width: '100%',
    padding: 20,
    textAlign: 'center',
  },
});

export default RouteCenterScreen;
