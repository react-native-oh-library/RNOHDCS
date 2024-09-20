import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

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
      <Page name="INDEX">
        <IndexPage />
      </Page>
      {children}
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
        <TouchableOpacity
          onPress={() => {
            navigateTo('INDEX');
          }}>
          <Text style={styles.buttonText}>{'‹ Back'}</Text>
        </TouchableOpacity>
      )}
      {children}
    </View>
  ) : null;
}

export function IndexPage() {
  const {navigateTo, registeredPageNames} = useNavigation();

  return (
    <FlatList
      data={registeredPageNames}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigateTo(item);
            }}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        );
      }}
      ItemSeparatorComponent={() => (
        <View style={{height: 1, backgroundColor: 'silver'}} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#333',
  },
  buttonText: {
    width: '100%',
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingVertical: 24,
    color: 'blue',
  },
});
