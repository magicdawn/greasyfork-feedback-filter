import { APP_NAME } from '$common'
import { proxySetWithGmStorage } from '$utility/valtio'

export const logined = (() => {
  const loginLink = document.querySelector('#nav-user-info .sign-in-link')
  return !loginLink
})()

export const currentLoginHasAdminPermission = (() => {
  const adminUrl = new URL('./admin', location.href)
  const adminUrlPath = adminUrl.pathname
  return !!document.querySelector(`#script-links a[href^='${adminUrlPath}']`)
})()

const scriptIdSetWithAdminPermission = await proxySetWithGmStorage<string>(
  'script-ids-with-admin-permission',
)

// https://greasyfork.org/zh-CN/scripts/480255-
export const scriptId = /\/scripts\/(?<scriptId>\d+)-/.exec(location.href)?.groups?.scriptId

export const HAS_ADDMIN_PERMISSION = (() => {
  // login
  if (logined) {
    // save for none login use
    if (currentLoginHasAdminPermission && scriptId) {
      setTimeout(() => {
        scriptIdSetWithAdminPermission.add(scriptId)
      }, 100)
    }

    return currentLoginHasAdminPermission
  }

  // check cache
  if (scriptId) {
    return scriptIdSetWithAdminPermission.has(scriptId)
  }

  return false
})()
