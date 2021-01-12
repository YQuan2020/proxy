import {Request} from '../util'

const Get = 'Get'
const Post = 'Post'
const Put = 'Put'
const Patch = 'Patch'

/**
 * this server must deploy out of China mainland
 */
export class ForeignProxy {
    private readonly request = new Request()
    /**
     *
     * @param {{method: string body: any header: any url: string}} data
     */
    async send (data) {
        let result
        const url = data.url
        switch (data.method) {
            case Get:
                result = await this.request.Get(url)
                break
            case Post:
                const res = await this.request.Post(url, data.body)
                result = res.data
                break
            default:
                throw new Error('Unknown request method')
        }
        return result
    }
}