import installer from './defaults'
export * from '@wg-plus/components'
export * from '@wg-plus/constants'
export * from '@wg-plus/directives'
export * from '@wg-plus/hooks'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
