import {Request} from '../util'

/**
 * this server must deploy out of China mainland
 */
export class ForeignProxy {
    private readonly request = new Request()
    /**
     *
     * @param {{method: string body: any header: any url: string}} data
     */
    async send (data: {method: string, url: string, body?: any, header?: any}) {
        const result = await this.request.send(data)
        return result
    }
}