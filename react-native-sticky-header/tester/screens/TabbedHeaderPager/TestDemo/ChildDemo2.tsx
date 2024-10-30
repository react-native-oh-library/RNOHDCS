import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import type {LayoutChangeEvent} from 'react-native';
import {
  Modal,
  Platform,
  RefreshControl,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {TabbedHeaderPager} from 'react-native-sticky-parallax-header';
import {runOnJS} from 'react-native-reanimated';
import type {User} from '../../../assets/data/cards';
import {logo, photosPortraitMe} from '../../../assets/images';
import {QuizListElement, UserModal} from '../../../components';
import {colors, screenStyles} from '../../../constants';
import type {RootStackNavigationProp} from '../../../navigation/types';

import {TABS, users} from '../data';
import {homeScreenTestIDs} from '../testIDs';

const wait = (timeout: number) =>
  new Promise(resolve => {
    setTimeout(resolve, timeout);
  });

const TabbedHeaderPagerDemoChild2: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const {height: windowHeight} = useWindowDimensions();

  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  const [userSelected, setUserSelected] = React.useState<User>();
  const [contentHeight, setContentHeight] = React.useState<{
    [key: string]: number;
  }>({});

  const [callbackInfo, setCallbackInfo] = React.useState({});

  const openUserModal = React.useCallback((user: User) => {
    setUserSelected(() => {
      setModalVisible(true);

      return {...user};
    });
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => {
      setRefreshing(false);
    });
  }, []);

  const calcMargin = (title: string): number => {
    let marginBottom = 50;

    if (contentHeight[title]) {
      const padding = 24;
      const isBigContent = windowHeight - contentHeight[title] < 0;

      if (isBigContent) {
        return marginBottom;
      }

      const headerHeight = 92;

      marginBottom =
        windowHeight - padding * 2 - headerHeight - contentHeight[title];

      return marginBottom > 0 ? marginBottom : 0;
    }

    return marginBottom;
  };

  const onLayoutContent = (title: string) => (e: LayoutChangeEvent) => {
    const newHeight = e.nativeEvent.layout.height;

    setContentHeight(prevHeight => {
      return {...prevHeight, [title]: newHeight};
    });
  };

  const navigateToCardScreen = React.useCallback(
    (user: User) => {
      return () => {
        navigation.navigate('Card', {user});
      };
    },
    [navigation],
  );

  const pressUserModal = React.useCallback(
    (user: User) => {
      return () => {
        openUserModal(user);
      };
    },
    [openUserModal],
  );

  const onPressCloseModal = React.useCallback(() => {
    setModalVisible(false);
  }, []);
  // 处理回调方法调用
  const handleChangeTab = () => {
    let newInfo = {...callbackInfo, onChangeTab: 'onChangeTab方法已调用'};
    setCallbackInfo(newInfo);
  };
  const onTabsLayout = () => {
    let newInfo = {
      ...callbackInfo,
      onTabsLayout: 'onTabsLayout回调已调用',
    };
    setCallbackInfo(newInfo);
  };
  const onTopReached = () => {
    let newInfo = {
      ...callbackInfo,
      onTopReached: 'onTopReached回调已调用',
    };
    setCallbackInfo(newInfo);
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primaryGreen}
        translucent
      />
      <View style={styles.showInfoContainer}>
        <Text>{JSON.stringify(callbackInfo)}</Text>
      </View>
      <TabbedHeaderPager
        containerStyle={screenStyles.stretchContainer}
        backgroundColor={colors.primaryGreen}
        tabsContainerBackgroundColor={colors.secondaryGreen}
        rememberTabScrollPosition
        logo={logo}
        logoStyle={styles.logoStyle}
        onChangeTab={handleChangeTab}
        onTabsLayout={onTabsLayout}
        onTopReached={onTopReached}
        logoContainerStyle={styles.logoContainer}
        title={"Mornin' Mark! \nReady for a quiz?"}
        titleStyle={screenStyles.text}
        titleTestID={homeScreenTestIDs.headerTitle}
        foregroundImage={photosPortraitMe}
        headerHeight={250}
        tabs={TABS.map(tab => ({title: tab.title, testID: tab.testID}))}
        tabTextStyle={screenStyles.text}
        // Refresh control is not implemented on web and even if provided, it will double padding top and bottom
        {...(Platform.OS !== 'web' && {
          refreshControl: (
            <RefreshControl
              //  z Index is required on IOS, to refresh indicator be visible
              style={styles.refreshControl}
              refreshing={refreshing}
              titleColor={colors.white}
              tintColor={colors.white}
              title="Refreshing"
              onRefresh={onRefresh}
            />
          ),
        })}>
        {TABS.map((tab, i) => {
          const title = tab.contentTitle;
          const marginBottom = Platform.select({
            ios: calcMargin(title) + 20,
            android: 10,
          });

          return (
            <View
              key={i}
              onLayout={onLayoutContent(title)}
              style={[screenStyles.content, {marginBottom}]}>
              <Modal
                animationType="slide"
                transparent
                visible={modalVisible}
                style={styles.modalStyle}>
                <View style={styles.modalContentContainer}>
                  <UserModal
                    setModalVisible={setModalVisible}
                    onPressCloseModal={onPressCloseModal}
                    user={userSelected}
                  />
                </View>
              </Modal>
              <Text style={screenStyles.contentText} testID={tab.contentTestID}>
                {title}
              </Text>
              {users.map(
                user =>
                  (title === 'Popular Quizes' || title === user.type) && (
                    <QuizListElement
                      key={user.author}
                      elements={user.cardsAmount}
                      authorName={user.author}
                      mainText={user.label}
                      labelText={user.type}
                      imageSource={user.image}
                    />
                  ),
              )}
            </View>
          );
        })}
      </TabbedHeaderPager>
    </>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    margin: 0,
  },
  showInfoContainer: {
    position: 'absolute',
    top: 270,
    width: '100%',
    height: 152,
    borderColor: 'white',
    borderWidth: 1,
    zIndex: 666,
  },
  modalContentContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  refreshControl: {
    zIndex: 1,
  },
  logoStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  logoContainer: {
    borderWidth: 1,
    borderColor: 'yellow',
  },
});

export default TabbedHeaderPagerDemoChild2;
