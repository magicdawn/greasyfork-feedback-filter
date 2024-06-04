import { ERatingKeys, type ERatingKey } from '$enums'
import { proxyWithGmStorage } from '$utility/valtio'
import { useSnapshot } from 'valtio'

export const configState = await proxyWithGmStorage<{ hiddenRatings: ERatingKey[] }>(
  {
    hiddenRatings: ['Bad'],
  },
  'config',
)

// validate & remove invalid keys
if (configState.hiddenRatings.some((x) => !ERatingKeys.includes(x))) {
  configState.hiddenRatings = configState.hiddenRatings.filter((x) => ERatingKeys.includes(x))
}

export function useConfigSnapshot() {
  return useSnapshot(configState)
}
