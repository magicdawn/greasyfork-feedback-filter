import { snapshot, subscribe } from 'valtio'
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
