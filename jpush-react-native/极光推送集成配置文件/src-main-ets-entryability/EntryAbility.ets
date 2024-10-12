import { RNAbility, RNOHContext } from "@rnoh/react-native-openharmony";
import { JPushInterface } from "@react-native-oh-tpl/jpush-react-native";
import Want from "@ohos.app.ability.Want";
import { abilityAccessCtrl, PermissionRequestResult, Permissions } from '@kit.AbilityKit';
import { notificationManager } from '@kit.NotificationKit';
import hilog from '@ohos.hilog';
import { BusinessError } from '@kit.BasicServicesKit';

const TAG: string = 'JPUSH-JLog-RemoteNotificationExtAbility';
const permissions: Array<Permissions> = ['ohos.permission.APP_TRACKING_CONSENT'];

export default class EntryAbility extends RNAbility {
  onCreate(want: Want): void {
    super.onCreate(want);
    JPushInterface.setClickWant(want)
    let context: Context = this.context;
    let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
    atManager.requestPermissionsFromUser(context, permissions).then((data: PermissionRequestResult) => {
      let grantStatus: Array<number> = data.authResults;
      let length: number = grantStatus.length;
      for (let i = 0; i < length; i++) {
        if (grantStatus[i] === 0) {
          hilog.info(0x0000, TAG, '%{public}s', 'requestPermissionsFromUser ok');
        } else {
          hilog.info(0x0000, TAG, '%{public}s', 'requestPermissionsFromUser fail');
        }
      }
      // 授权成功 然后启用推送业务功能
      JPushInterface.init(this.context)
    }).catch((err: BusinessError) => {
      //然后启用推送业务功能
      JPushInterface.init(this.context)
      hilog.error(0x0000, TAG, '%{public}s',
        `requestPermissionsFromUser failed, code is ${err.code}, message is ${err.message}`);

    })
    notificationManager.requestEnableNotification(this.context).then(() => {
      hilog.info(0x0000, TAG, '%{public}s', `requestEnableNotification success`);
    }).catch((err: BusinessError) => {
      hilog.error(0x0000, TAG, '%{public}s',
        `requestEnableNotification failed, code is ${err.code}, message is ${err.message}`);
    });
  }

  getPagePath() {
    return "pages/Index"
  }
};
