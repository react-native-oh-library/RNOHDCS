import {useNavigation, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as React from 'react';
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import type {RootStackNavigationProp} from '../../navigation/types';
import {colors, screenStyles} from '../../constants/index';
import {ROUTES, CHILDROUTES} from '../../navigation/routes';
import {ExampleLink} from '../RouteCenterScreen/ExampleLink';

//引入组件测试demo
import AvatarHeaderSectionListDemoDefault from './DefaultDemo/index';
//定义组件测试testID
const testIdObject = {
  default: 'AvatarHeaderSectionListDemoScreenDefault_testID',
};
const defaultRouter = {
  routeName: CHILDROUTES.AvatarHeaderSectionListDemoDefault,
  label: 'AvatarHeaderSectionList默认组件',
  testID: testIdObject.default,
  title: '默认组件AvatarHeaderSectionListDemoDefault(设置对比属性值)',
  testProps: {
    backgroundColor: '设置背景色为蓝色',
    hasBorderRadius: '设置header部分右下角圆角效果',
    leftTopIcon: '左上角icon图标',
    leftTopIconOnPress: '左上角icon图标点击触发回调',
    rightTopIcon: '右上角icon图标',
    rightTopIconOnPress: '右上角icon图标点击触发回调',
    subtitle: 'Brandon',
    subtitleStyle: '设置文字颜色为白色',
    subtitleTestID: '测试唯一标识符，传递即生效',
    title: 'Brandon',
    titleStyle: `color:'white'`,
    sections: 'SectionList组件必传属性，内部已生效',
    keyExtractor: 'SectionList组件必传属性，内部已生效',
    renderItem: 'SectionList组件Item渲染函数，内部已生效',
  },
};

const SimpleTable = props => {
  const Keys = Object.keys(props.obj);
  return (
    <View style={styles.tableContainer}>
      <View style={[styles.tableHeaderContainer, styles.lineBase]}>
        <Text>测试属性Prop</Text>
        <Text>Prop值/含义</Text>
      </View>
      {Keys.map((key, index) => (
        <View key={`${key}-${index}`} style={styles.lineBase}>
          <Text>{key}</Text>
          <Text>{props.obj[key]}</Text>
        </View>
      ))}
    </View>
  );
};
const AvatarHeaderSectionListDemoScreen: React.FC = () => {
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
            <Text>AvatarHeaderSectionList组件测试页面</Text>
          </View>
          <ScrollView>
            <View style={styles.testCenter}>
              <View style={styles.sectionPart}>
                <Text>{defaultRouter.title}</Text>
                <SimpleTable obj={defaultRouter.testProps}></SimpleTable>
                <Text>测试链接：</Text>
                <ExampleLink key={defaultRouter.routeName} {...defaultRouter} />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'hsl(193, 95%, 68%)',
  },
  header: {
    width: '100%',
    padding: 20,
    textAlign: 'center',
  },
  testCenter: {
    paddingBottom: 20,
  },
  sectionPart: {
    borderWidth: 1,
    borderColor: 'green',
    marginBottom: 20,
  },
  linkLabel: {
    color: colors.purplishBlue,
    fontFamily: 'AvertaStd-Semibold',
    fontSize: 20,
    padding: 10,
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 10,
  },
  lineBase: {
    width: '100%',
    height: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'green',
  },
  tableHeaderContainer: {
    fontWeight: 700,
    fontSize: 18,
  },
});

export default AvatarHeaderSectionListDemoScreen;
export {AvatarHeaderSectionListDemoDefault};
