## react-native-fileupload 服务端指导说明

1、登录服务器面版：https://x.xx.xx.xxx:8080/login （真实服务器仅供内部人员使用，外部人员请自行搭建）

2、进入到/www/wwwroot/uploadServer  目录下，打开终端执行命令：node server.js，终端显示：Server is running on port 8085.表示服务器已经启动成功。

3、参数uploadUrl替换成真实的地址： https://x.xx.xx.xxx:8080/upload

4、参数filepath替换成真实的文件地址，例如：/data/storage/el2/base/haps/entry/cache/assets_placeholder2000x2000.jpg（确保该应用下有文件，测试时若无文件需要把文件推入到目录下，测试接口功能）；

5、文件推入命令：hdc file send 待推送文件的本地路径 /data/app/el2/100/based/com.rnoh.test/haps/entry/cache/； 例如：hdc file send E:\assets_placeholder2000x2000.jpg /data/app/el2/100/based/com.rnoh.test/haps/entry/cache/

6、参数filename替换成真实的文件名，参数filetype替换成真实的文件类型，例如：assets_placeholder2000x2000.jpg