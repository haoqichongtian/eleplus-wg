import { withInstall } from '@wg-plus/utils'

import Card from './src/card.vue'

export const ElCard = withInstall(Card)
export default ElCard

export * from './src/card'
export type { CardInstance } from './src/instance'
