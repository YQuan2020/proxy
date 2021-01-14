import {ProxyController} from '../controller'

const proxyController = new ProxyController()

export function set (router) {
    router.post('/foreign/proxy', proxyController.send)
}