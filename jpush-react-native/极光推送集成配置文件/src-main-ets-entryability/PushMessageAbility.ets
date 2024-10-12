import { UIAbility } from '@kit.AbilityKit';
import { JPushInterface } from '@react-native-oh-tpl/jpush-react-native';
import { pushCommon, pushService } from '@kit.PushKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG: string = 'JPUSH-JLog-PushMessageAbility'

export default class PushMessageAbility extends UIAbility {
  onCreate(): void {
    try { // receiveMessage中的参数固定为BACKGROUND-------后台自定义信息接收
      pushService.receiveMessage('BACKGROUND', this, async (data: pushCommon.PushPayload) => {
        let jg = await JPushInterface.customMessageBackgroundData(data)
        hilog.info(0x0000, TAG, '%{public}s', 'customMessageBackgroundData fail:' + jg?'true':'false');
        if (jg) { //如果是true为已经处理
          return
        }
      });
    } catch (e) {
      hilog.info(0x0000, TAG, '%{public}s', 'BACKGROUND fail:' + JSON.stringify(e));
    }

    try { // receiveMessage中的参数固定为IM-------拓展通知接收
      pushService.receiveMessage('IM', this, async (data) => {
        let jg = await JPushInterface.extraMessageBackgroundData(data)
        if (jg) { //如果是true为已经处理
          return
        }
      });
    } catch (e) {
      hilog.info(0x0000, TAG, '%{public}s', 'IM fail:' + JSON.stringify(e));
    }


    try {
      pushService.receiveMessage('VoIP', this, async (data) => {
        let jg = await JPushInterface.voIPMessageBackgroundData(data)
        if (jg) { //如果是true为已经处理
          return
        }
      });
    } catch (e) {
      hilog.info(0x0000, TAG, '%{public}s', 'VoIP fail:' + JSON.stringify(e));
    }
  }
}