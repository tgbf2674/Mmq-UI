# 介绍

mmq-ui 是一款基于 Vue 3 和 TypeScript 的 UI 组件库。

这款组件库其实是我为了总结自己目前掌握的技术栈而写的，能自己写就自己写，尽量不采用第三方库，包括你现在看到的这个官网。

## 浏览器支持

![IE](https://camo.githubusercontent.com/6521b3b065ddba8c8378e7c1e4e2da7090548ce61384e99111dd17ca93d47c3b/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f617263686976652f696e7465726e65742d6578706c6f7265725f372d382f696e7465726e65742d6578706c6f7265725f372d385f34387834382e706e67) | ![Edge](https://camo.githubusercontent.com/b9d103cc69d7a8dc55248c732a7aeb55c1f79e665c76bf523b431db262f0808d/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f656467652f656467655f34387834382e706e67) | ![Chrome](https://camo.githubusercontent.com/1d440f4ffad2f6a8df0e532493cd225964bc8624cb0956171be0717dc4fbce64/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f6368726f6d652f6368726f6d655f34387834382e706e67) | ![Firefox](https://camo.githubusercontent.com/b2a1e5b90d591dfbf5dfa425c0d60d80aa3590d22ace3408cfb36d935808bb69/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f66697265666f782f66697265666f785f34387834382e706e67) | ![Opera](https://camo.githubusercontent.com/8663fa4d6a0533eac6da67e2bbfaee3cc1ee6644454a88b21bf31f8196bb0d2f/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f6f706572612f6f706572615f34387834382e706e67) | ![Safari](https://camo.githubusercontent.com/8d37441ff74dfc50881abae7596a28677bba4617631eccf2143e9559906a81de/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f7361666172692f7361666172695f34387834382e706e67)
--- | --- | --- | --- | --- | --- |
7+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 6+ ✔ |

## 安装
```
npm install mmq-ui
yarn install mmq-ui
pnpm install mmq-ui
```

## 导入使用
```
import 'mmq-ui/dist/lib/mmqUI.css'
import {MqButton, MqTag, MqDialog} from 'mmq-ui'
<template>
<div>
<Button>按钮</Button>
</div>
</template>
<script>
  import {Button, Tabs, Switch, Dialog} from "mmq-ui"
  export default {
  components: {Button}
}
</script>
```

### 按需导入
这样按需引入方法，可以使体积达到最小
```
import 'mmq-ui/dist/lib/mmqUI.css'
import {MqButton, MqTag, MqDialog} from 'mmq-ui'
<template>
<div>
<Button>按钮</Button>
</div>
</template>
<script>
  import {Button, Tabs, Switch, Dialog} from "mmq-ui"
  export default {
  components: {Button}
}
</script>
```

### 完整导入
如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。
```
在项目的main.ts中
import 'mmq-ui/dist/lib/mmqUI.css'
import mmqUI from './lib'
const app = createApp(App);
app.use(mmqUI)
```

然后即可直接使用

下一节：[安装](#/doc/install)
