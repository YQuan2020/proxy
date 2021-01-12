import Axios from 'axios'

export class Request {
    async Get (url) {
        console.log('===============url===============')
        console.log(url)
        const result = await Axios.get(url)
        console.log(result)
        console.log('===============data===============')
        return result.data
    }

    async Post (url, body) {
        const result = await Axios.post(url, body)
        return result.data
    }
}