import {
    Alert,
    Platform,
  } from 'react-native';
import {InAppBrowser} from 'react-native-inappbrowser-reborn'

export interface options {
  dismissButtonStyle?: string,
  preferredBarTintColor?:string,
  preferredControlTintColor?:string
}

export const openLink = async (
url: string,
statusBarStyle: options,
animated = true,
) => {
    let result  = await InAppBrowser.open(
        url,
        {
          dismissButtonStyle:statusBarStyle.dismissButtonStyle,
          preferredBarTintColor:statusBarStyle.preferredBarTintColor,
          preferredControlTintColor:statusBarStyle.preferredControlTintColor
        }
    );
    Alert.alert('Response', JSON.stringify(result));
    return result;
}

export const getDeepLink = (path = '') => {
    const scheme = 'my-demo';
    const prefix =
      Platform.OS === 'android' ? `${scheme}://demo/` : `${scheme}://`;
    return prefix + path;
};

export const tryDeepLinking = async () => {
    const loginUrl = 'https://proyecto26.github.io/react-native-inappbrowser/';
    const redirectUrl = getDeepLink();
    const url = `${loginUrl}?redirect_url=${encodeURIComponent(redirectUrl)}`;
    try {
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.openAuth(url, redirectUrl, {
          // iOS Properties
          ephemeralWebSession: false,
        });
        //await sleep(800);
        Alert.alert('Response', JSON.stringify(result));
        return result
      } else {
        return 'InAppBrowser is not supported :/'
      }
    } catch (error) {
      console.error(error);
    }
    return 'Something’s wrong with the app :('
};
  
