
<h1 style="text-align: center">
规范资源引入
</h1>
## 背景介绍
**由于页面文件放置路径不定，而资源文件均为项目根目录的`assets`下，因此避免页面路径问题导致跑测试用例时，需要频繁修改资源相对路径，故引入路径别名`@`代指项目根目录。**

## 本文基于

```js
"react-native": "0.72.5",
"babel-plugin-module-resolver": "^5.0.2"

```
## 1. 安装依赖

```js
npm i babel-plugin-module-resolver --save

```
## 2.配置 babel.config.js
`plugins` 是 Babel 的插件集合，允许你添加额外的转换器和工具来处理你的代码。

`'module-resolver'` 是一个 Babel 插件，它允许你在代码中使用别名来代替相对路径，以便更方便地引用文件。比如，`import SomeComponent from '@/components/SomeComponent';` 就可以代替 `import SomeComponent from './components/SomeComponent';`。

`root: ['.']` 定义了解析别名时的根路径。这里是相对于当前项目根目录的路径数组。

`extensions: ['.js', '.ts', '.tsx', '.json']` 定义了可以解析的文件扩展名。这些是常见的扩展名，包括JavaScript、TypeScript和JSON。

`alias: { '@': ['.'] }` 定义了别名映射，@ 代表当前项目的根目录。这样设置后，可以在代码中使用 `@` 来引用项目根目录中的文件或目录。

```js
// 新增
plugins: [
    [
        'module-resolver',
        {
            root: ['.'],
            extensions: ['.js', '.ts', '.tsx', '.json'],
            alias: {
                '@': ['.']
            }
        }
    ],
]

```
## 3.配置 tsconfig.json (可选项)
`baseUrl: "."`：设置模块解析时相对路径的基准目录。`.` 表示使用当前的工作目录作为基础路径。


`"@/*": ["./*"] `：这个配置是 TypeScript 的路径映射规则之一，它的作用是指定模块导入时的路径解析。具体来说：`@/*`：这里的 @ 符号通常用作路径别名的前缀，类似于在许多前端框架中使用的 @/ 或者 @src/ 之类的约定。它表示一个自定义的路径别名。

`["./*"]`：这里定义了一个路径映射规则，表示当 TypeScript 编译器在代码中看到 @/ 或者类似于 @ 开头的路径时，应该将其解析为当前目录下的相对路径。

```js
// 新增
{
    ...
    "baseUrl": ".",
    "compilerOptions": {
        ...
        "paths": {
        ...
        "@/*": ["./*"]
        },
    }
}

```
## 4.使用
配置完成后，重新启动项目 npm run dev，即可使用`@`代替项目根目录。例：在代码中可以使用`@/assets`代替`../../assets`。

```ts
// 如
import Xxxxxxx from '@/examples/Xxxxxxx'
// 或
const catImg = require('@/assets/cat.jpg')

```