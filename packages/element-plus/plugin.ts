import { ElInfiniteScroll } from '@wg-plus/components/infinite-scroll'
import { ElLoading } from '@wg-plus/components/loading'
import { ElMessage } from '@wg-plus/components/message'
import { ElMessageBox } from '@wg-plus/components/message-box'
import { ElNotification } from '@wg-plus/components/notification'
import { ElPopoverDirective } from '@wg-plus/components/popover'

import type { Plugin } from 'vue'

export default [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElPopoverDirective,
] as Plugin[]
