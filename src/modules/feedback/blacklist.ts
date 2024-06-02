import { proxySetWithGmStorage } from '../../utility/valtio'

export const blacklist = await proxySetWithGmStorage<string>('blacklist')
