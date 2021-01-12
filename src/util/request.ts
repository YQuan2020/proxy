import Axios from 'axios'

export class Request {
    async Get (url) {
        const result = await Axios.get(url)
        return result
    }

    async Post (url, body) {
        const result = await Axios.post(url, body)
        return result
    }
}