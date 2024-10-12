import AbilityStage from '@ohos.app.ability.AbilityStage';
import { hilog } from '@kit.PerformanceAnalysisKit';
import {
  CallBackMsg,
  JAliasMessage,
  JCmdMessage,
  JCustomMessage,
  JMessage,
  JMessageExtra,
  JMessageVoIP,
  JPushInterface,
  JTagMessage
} from '@react-native-oh-tpl/jpush-react-native';
import { common } from '@kit.AbilityKit';

const TAG: string = 'JPUSH-JLog-MyAbilityStage'
const JPUSH_APP_KEY ="a18a04fc594484b4c24b337b";
class MyCallBackMsg extends CallBackMsg {
  context: common.ApplicationContext

  constructor(co: common.ApplicationContext) {
    super();
    this.context = co
  }

  /**
   * 注册成功后回调rid
   * @param registrationId 注册成功后回调rid
   */
  onRegister(registrationId: string): void {
    hilog.info(0x0000, TAG, '%{public}s', 'onRegister registrationId:' + registrationId);
    this.context.eventHub.emit('jPush_event_rid', registrationId);
    this.context.eventHub.emit('jPush_event', "registrationId:" + registrationId);
  }

  /**
   * 长连接登陆 回调
   * @param isConnected true:成功，false：失败
   */
  onConnected(isConnected: boolean): void {
    hilog.info(0x0000, TAG, '%{public}s', 'onConnected isConnected:' + isConnected);
    this.context.eventHub.emit('jPush_event_isConnected', isConnected);
    this.context.eventHub.emit('jPush_event', "isConnected:" + isConnected);
  }

  /**
   * 操作 tag 接口回调
   * @param jTagMessage
   * export class JTagMessage {
   * sequence?: number //对应操作id，全局不要重复
   * code?: number //0成功，JTagMessage.CODE_TIME_OUT超时
   * op?: string
   * tags?: string[] //对应数据
   * curr?: number //数据当前页数，页数从1开始
   * total?: number //数据总页数
   * msg?: string
   * }
   */
  onTagOperatorResult(jTagMessage: JTagMessage): void {
    hilog.info(0x0000, TAG, '%{public}s', 'onTagOperatorResult JTagMessage code:' + jTagMessage.code);
    hilog.info(0x0000, TAG, '%{public}s', 'onTagOperatorResult JTagMessage:' + JSON.stringify(jTagMessage));
    this.context.eventHub.emit('jPush_event', "onTagOperatorResult:" + JSON.stringify(jTagMessage));
  }

  /**
   * 操作 Alias 接口回调
   * @param jAliasMessage
   * export class JAliasMessage {
   * sequence?: number //对应操作id，全局不要重复
   * code?: number //0成功，JAliasMessage.CODE_TIME_OUT超时
   * op?: string
   * alias?: string //对应数据
   * curr?: number
   * total?: number
   * msg?: string
   * }
   */
  onAliasOperatorResult(jAliasMessage: JAliasMessage): void {
    hilog.info(0x0000, TAG, '%{public}s', 'onAliasOperatorResult jAliasMessage:' + JSON.stringify(jAliasMessage));
    this.context.eventHub.emit('jPush_event', "onAliasOperatorResult:" + JSON.stringify(jAliasMessage));
  }

  /**
   * 通知点击事件回调
   * @param jMessage
   *
   * export class JMessage {
   * msgId?: string //通知id
   * title?: string //通知标题
   * content?: string//通知内容
   * extras?: string//自定义数据
   * }
   */
  onClickMessage(jMessage: JMessage) {
    hilog.info(0x0000, TAG, '%{public}s', 'onClickMessage jMessage:' + JSON.stringify(jMessage));
    this.context.eventHub.emit('jPush_event', "onClickMessage:" + JSON.stringify(jMessage));
  }

  /**
   * 自定义信息通知回调
   *  回调一：冷启动调用sdk初始化后回调之前还没有回调的信息
   *  回调二：app存活时会直接回调信息
   * @param jCustomMessage
   *
   * export class JCustomMessage {
   *  msgId?: string //通知id
   *  title?: string //通知标题
   *  content?: string //通知内容
   *  contentType?: string //通知内容类型
   *  extras?: Record<string, Object> //通知自定义键值对
   *  ttl?: number //后台下发的信息过期时间，单位秒
   *  stime?: number //后台下发时间，毫秒
   * }
   */
  onCustomMessage(jCustomMessage: JCustomMessage) {
    hilog.info(0x0000, TAG, '%{public}s', 'onCustomMessage jCustomMessage:' + JSON.stringify(jCustomMessage));
    this.context.eventHub.emit('jPush_event', "onCustomMessage:" + JSON.stringify(jCustomMessage));
  }
  /**
   * 通知扩展消息回调
   * @param jMessageExtra
   *
   * export class JMessageExtra {
   * msgId?: string //通知id
   * title?: string //通知标题
   * content?: string//通知内容
   * extras?: Record<string, Object>//自定义数据
   * extraData?: string//通知扩展消息的自定义数据
   * }
   */
  onJMessageExtra(jme: JMessageExtra) {
    hilog.info(0x0000, TAG, '%{public}s', 'onJMessageExtra jme:' + JSON.stringify(jme));
    this.context.eventHub.emit('jPush_event', "onJMessageExtra:" + JSON.stringify(jme));
  }

  /**
   * VoIP呼叫消息回调
   * export class JMessageVoIP {
   * msgId?: string //通知id
   * extraData?: string //VoIP自定义数据
   }
   * @param jmVoIP
   */
  onJMessageVoIP(jmVoIP: JMessageVoIP) {
    hilog.info(0x0000, TAG, '%{public}s', 'JMessageVoIP jmVoIP:' + JSON.stringify(jmVoIP));
    this.context.eventHub.emit('jPush_event', "JMessageVoIP:" + JSON.stringify(jmVoIP));
  }

  /**
   * 交互事件回调
   * @param cmdMessage
   * export class JCmdMessage {
   * public static CMD_PUSH_STOP = 2007 //通知停止 设置回调
   * public static CMD_PUSH_RESUME = 2006 //	通知恢复 设置回调
   *
   * cmd?: number  //操作事件，2007通知停止，2006恢复通知
   * errorCode?: number //0表示成功，其他为错误
   * msg?: string //内容信息
   * extra?: Record<string, Object>
   * }
   */
  onCommandResult(cmdMessage: JCmdMessage) {
    hilog.info(0x0000, TAG, '%{public}s', 'onCommandResult cmdMessage:' + JSON.stringify(cmdMessage));
    this.context.eventHub.emit('jPush_event', "onCommandResult:" + JSON.stringify(cmdMessage));
  }
}

export default class MyAbilityStage extends AbilityStage {
  onCreate() {
    // 应用的HAP在首次加载的时，为该Module初始化操作
    hilog.info(0x0000, TAG, '%{public}s', 'MyAbilityStage onCreate');
    JPushInterface.setChannel("test demo")
    JPushInterface.setAppKey(JPUSH_APP_KEY)
    JPushInterface.setDebug(true)
    JPushInterface.setCallBackMsg(new MyCallBackMsg(this.context.getApplicationContext()))
  }
}
