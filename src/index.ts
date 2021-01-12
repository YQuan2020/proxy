import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as logger from 'koa-logger'
import * as json from 'koa-json'
import * as bodyParser from 'koa-bodyparser'
import * as ProxyRoutes from './router/proxy-routes'

const app = new Koa()
const router = new Router()
ProxyRoutes.set(router)

app
    .use(json())
    .use(logger())
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(8080, () => {
    console.log('koa started')
})