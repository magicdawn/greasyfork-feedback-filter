import { pick } from 'lodash-es'
import { proxy, snapshot, subscribe } from 'valtio'
import { proxySet } from 'valtio/utils'

export async function proxySetWithGmStorage<T>(storageKey: string) {
  const savedValue: T[] = (await GM.getValue(storageKey)) || []
  const p = proxySet<T>(savedValue)

  // start subscribe in nextTick, so value can be changed synchronously without persist
  setTimeout(() => {
    subscribe(p, () => {
      const val = Array.from(snapshot(p))
      GM.setValue(storageKey, val)
    })
  })

  return p
}

export async function proxyWithGmStorage<T extends object>(initialVaue: T, storageKey: string) {
  const allowedKeys = Object.keys(initialVaue)
  const savedValue = pick((await GM.getValue(storageKey)) || {}, allowedKeys)

  const p = proxy<T>({
    ...initialVaue,
    ...savedValue,
  })

  // start subscribe in nextTick, so value can be changed synchronously without persist
  setTimeout(() => {
    subscribe(p, () => {
      const val = snapshot(p)
      GM.setValue(storageKey, val)
    })
  })

  return p
}
