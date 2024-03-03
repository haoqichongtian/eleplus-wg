import { buildProps, definePropType } from '@wg-plus/utils'

import type { DescriptionItemVNode } from './description-item'

export const descriptionsRowProps = buildProps({
  row: {
    type: definePropType<DescriptionItemVNode[]>(Array),
    default: () => [],
  },
} as const)
