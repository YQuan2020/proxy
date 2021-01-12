import {ForeignProxy} from '../service'

class ProxyController {
    async send (ctx) {
        const data = ctx.request.body
        const foreignProxy = new ForeignProxy()
        const result = await foreignProxy.send(data)
        ctx.body = result
    }
}

export default new ProxyController()