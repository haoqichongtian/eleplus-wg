import { componentSizes, datePickTypes } from '@wg-plus/constants'
import type { ComponentSize, DatePickType } from '@wg-plus/constants'

export const isValidComponentSize = (val: string): val is ComponentSize | '' =>
  ['', ...componentSizes].includes(val)

export const isValidDatePickType = (val: string): val is DatePickType =>
  ([...datePickTypes] as string[]).includes(val)
