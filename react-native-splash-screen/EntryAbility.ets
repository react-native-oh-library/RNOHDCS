import {RNAbility} from '@rnoh/react-native-openharmony';
import window from '@ohos.window';
import { SplashScreen } from '@react-native-oh-tpl/react-native-splash-screen/src/main/ets/SplashScreen'

export default class EntryAbility extends RNAbility {
  getPagePath() {
    return 'pages/Index';
  }

  shouldCleanUpRNInstance__hack() {
    return true // Used by RNOH devs. If set to true, the app may crash.
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    let startWindowIcon = $r('app.media.splashIcon');
    let startWindowBackground = "#FFFFFF";
    SplashScreen.show(this.context, windowStage, startWindowIcon, startWindowBackground, 'pages/SplashScreenPage').then(() => {
      super.onWindowStageCreate(windowStage);
    })
  }
}
