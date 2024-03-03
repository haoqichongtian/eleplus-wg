import { componentSizeMap } from '@wg-plus/constants'

import type { ComponentSize } from '@wg-plus/constants'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}
