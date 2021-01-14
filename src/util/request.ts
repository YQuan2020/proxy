import Axios from 'axios'
import {Logger} from './logger'
import {Get, Post} from './define'

export class Request {
    private readonly logger = new Logger()

    async send ({method, url, body, header}: {method: string, url: string, body?: any, header?: any}) {
        let result
        switch (method) {
            case Get:
                result = await this.Get(url, header)
                break
            case Post:
                result = await this.Post(url, body, header)
                break
            default:
                throw new Error('unknown request method')
        }
        return result
    }

    async Get (url: string, header?: any) {
        let result, err
        try {
            result = await Axios.get(url)
        } catch (error) {
            err = error
        }
        this.log(Get, url, null, header, err, result)
        return result.data
    }

    async Post (url: string, body: any, header?: any) {
        let result, err
        try {
            result = await Axios.post(url, body)
        } catch (error) {
            err = error
        }
        this.log(Post, url, body, header, err, result)
        return result.data
    }

    log (method: string, url: string, body?: any, header?: any, err?: any, result?: any) {
        const prefix = `[${method}] ${url}`
        if (err) {
            this.logger.error(prefix, err.message, body, header)
        } else {
            this.logger.info(prefix, result && result.data, body, header)
        }
    }
}