import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {PALETTE} from './palette';

const NavigationContext = React.createContext<
  | {
      currentPageName: string;
      navigateTo: (pageName: string) => void;
      registerPageName: (pageName: string) => void;
      registeredPageNames: string[];
    }
  | undefined
>(undefined);

export function NavigationContainer({
  initialPage = 'INDEX',
  children,
}: {
  initialPage?: string;
  children: any;
}) {
  const [currentPageName, setCurrentPageName] = React.useState(initialPage);
  const [registeredPageNames, setRegisteredPageNames] = React.useState<
    string[]
  >([]);

  return (
    <NavigationContext.Provider
      value={{
        currentPageName,
        navigateTo: setCurrentPageName,
        registerPageName: (pageName: string) => {
          setRegisteredPageNames(pageNames => {
            if (pageNames.includes(pageName)) {
              return pageNames;
            }
            return [...pageNames, pageName];
          });
        },
        registeredPageNames,
      }}>
      <View style={{width: '100%', height: '100%', flexDirection: 'column'}}>
        <Page name="INDEX">
          <IndexPage />
        </Page>
        {children}
      </View>
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return React.useContext(NavigationContext)!;
}

export function Page({name, children}: {name: string; children: any}) {
  const {currentPageName, navigateTo, registerPageName} = useNavigation();

  useEffect(() => {
    if (name !== 'INDEX') {
      registerPageName(name);
    }
  }, [name]);

  return name === currentPageName ? (
    <View style={{width: '100%', height: '100%'}}>
      {name !== 'INDEX' && (
        <View style={{backgroundColor: PALETTE.REACT_CYAN_DARK}}>
          <TouchableOpacity
            onPress={() => {
              navigateTo('INDEX');
            }}>
            <Text
              style={[styles.buttonText, {color: PALETTE.REACT_CYAN_LIGHT}]}>
              {'‹ Back'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={{width: '100%', flex: 1}}>{children}</View>
    </View>
  ) : null;
}

export function IndexPage() {
  const {navigateTo, registeredPageNames} = useNavigation();

  return (
    <FlatList
      data={registeredPageNames}
      ListHeaderComponent={
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingVertical: 16,
          }}>
          <Image
            style={{width: 32, height: 32}}
            resizeMode="contain"
            source={require('../assets/react-native-logo.png')}
          />
          <Text
            style={{
              color: '#EEE',
              fontSize: 24,
              fontWeight: 'bold',
              padding: 16,
            }}>
            RN Tester
            {'rnohArchitecture' in Platform.constants
              ? (` (${Platform.constants.rnohArchitecture})` as string)
              : ''}
          </Text>
        </View>
      }
      renderItem={({item}) => {
        return (
          <View style={{backgroundColor: PALETTE.REACT_CYAN_DARK}}>
            <TouchableOpacity
              onPress={() => {
                navigateTo(item);
              }}>
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          </View>
        );
      }}
      ItemSeparatorComponent={() => (
        <View
          style={{height: StyleSheet.hairlineWidth, backgroundColor: '#666'}}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#888',
  },
  buttonText: {
    width: '100%',
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingVertical: 24,
    color: 'white',
    backgroundColor: 'black',
  },
});
