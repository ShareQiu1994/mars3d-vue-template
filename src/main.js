/*
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-17 14:14:23
 * @LastEditTime: 2021-06-17 14:32:20
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 使用免费开源版本
import 'mars3d/dist/mars3d.css'
import * as mars3d from 'mars3d'

// 导入插件(其他插件类似，插件清单访问：http://mars3d.cn/dev/guide/start/install.html)
// echarts插件
// import 'mars3d-echarts'

const app = createApp(App).use(store).use(router)
// 为了方便使用,绑定到原型链，在其他vue文件，直接 this.mars3d 来使用
app.config.globalProperties.mars3d = mars3d
app.config.globalProperties.Cesium = mars3d.Cesium

app.mount('#app')
