import serve from 'koa-static'
import { resolve } from 'path'

export const serveStatic = app => {
    const staticPath = resolve(__dirname, '../../dist')
    app.use(serve(staticPath))
}