import {ForeignProxy} from '../service'
const service = new ForeignProxy()

export class ProxyController {

    async send (ctx) {
        const result = await service.send(ctx.request.body)
        ctx.body = result
    }
}