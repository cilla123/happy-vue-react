import Koa from 'koa'
import { resolve } from 'path'
import R from 'ramda'

import defaultConfig from './config/config.default'

// 中间件
const MIDDLEWARES = ['serve', 'router']

// 使用中间件
const useMiddlewares = (app) => {
    R.map(
        R.compose(
            R.forEachObjIndexed(initWith => initWith(app)),
            require,
            name => resolve(__dirname, `./middlewares/${name}`)
        ))(MIDDLEWARES)
}

// 设置全局配置
const setGlobalConfig = (app) => {
    global.config = defaultConfig
}

;(async () => {

    setGlobalConfig()

    const app = new Koa()

    await useMiddlewares(app)

    app.listen(3000, () => {
        console.log('App listening on port 3000!');
    });

})()
