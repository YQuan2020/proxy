import {ProxyController} from '../controller'

export function set (router) {
    router.post('/foreign/proxy', ProxyController.send)
}