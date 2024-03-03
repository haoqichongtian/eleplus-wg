import { ElAffix } from '@wg-plus/components/affix'
import { ElAlert } from '@wg-plus/components/alert'
import { ElAutocomplete } from '@wg-plus/components/autocomplete'
import { ElAvatar } from '@wg-plus/components/avatar'
import { ElBacktop } from '@wg-plus/components/backtop'
import { ElBadge } from '@wg-plus/components/badge'
import {
  ElBreadcrumb,
  ElBreadcrumbItem,
} from '@wg-plus/components/breadcrumb'
import { ElButton, ElButtonGroup } from '@wg-plus/components/button'
import { ElCalendar } from '@wg-plus/components/calendar'
import { ElCard } from '@wg-plus/components/card'
import { ElCarousel, ElCarouselItem } from '@wg-plus/components/carousel'
import { ElCascader } from '@wg-plus/components/cascader'
import { ElCascaderPanel } from '@wg-plus/components/cascader-panel'
import { ElCheckTag } from '@wg-plus/components/check-tag'
import {
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
} from '@wg-plus/components/checkbox'
import { ElCol } from '@wg-plus/components/col'
import { ElCollapse, ElCollapseItem } from '@wg-plus/components/collapse'
import { ElCollapseTransition } from '@wg-plus/components/collapse-transition'
import { ElColorPicker } from '@wg-plus/components/color-picker'
import { ElConfigProvider } from '@wg-plus/components/config-provider'
import {
  ElAside,
  ElContainer,
  ElFooter,
  ElHeader,
  ElMain,
} from '@wg-plus/components/container'
import { ElDatePicker } from '@wg-plus/components/date-picker'
import {
  ElDescriptions,
  ElDescriptionsItem,
} from '@wg-plus/components/descriptions'
import { ElDialog } from '@wg-plus/components/dialog'
import { ElDivider } from '@wg-plus/components/divider'
import { ElDrawer } from '@wg-plus/components/drawer'
import {
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
} from '@wg-plus/components/dropdown'
import { ElEmpty } from '@wg-plus/components/empty'
import { ElForm, ElFormItem } from '@wg-plus/components/form'
import { ElIcon } from '@wg-plus/components/icon'
import { ElImage } from '@wg-plus/components/image'
import { ElImageViewer } from '@wg-plus/components/image-viewer'
import { ElInput } from '@wg-plus/components/input'
import { ElInputNumber } from '@wg-plus/components/input-number'
import { ElLink } from '@wg-plus/components/link'
import {
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
} from '@wg-plus/components/menu'
import { ElPageHeader } from '@wg-plus/components/page-header'
import { ElPagination } from '@wg-plus/components/pagination'
import { ElPopconfirm } from '@wg-plus/components/popconfirm'
import { ElPopover } from '@wg-plus/components/popover'
import { ElPopper } from '@wg-plus/components/popper'
import { ElProgress } from '@wg-plus/components/progress'
import {
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
} from '@wg-plus/components/radio'
import { ElRate } from '@wg-plus/components/rate'
import { ElResult } from '@wg-plus/components/result'
import { ElRow } from '@wg-plus/components/row'
import { ElScrollbar } from '@wg-plus/components/scrollbar'
import {
  ElOption,
  ElOptionGroup,
  ElSelect,
} from '@wg-plus/components/select'
import { ElSelectV2 } from '@wg-plus/components/select-v2'
import { ElSkeleton, ElSkeletonItem } from '@wg-plus/components/skeleton'
import { ElSlider } from '@wg-plus/components/slider'
import { ElSpace } from '@wg-plus/components/space'
import { ElStatistic } from '@wg-plus/components/statistic'
import { ElCountdown } from '@wg-plus/components/countdown'
import { ElStep, ElSteps } from '@wg-plus/components/steps'
import { ElSwitch } from '@wg-plus/components/switch'
import { ElTable, ElTableColumn } from '@wg-plus/components/table'
import { ElAutoResizer, ElTableV2 } from '@wg-plus/components/table-v2'
import { ElTabPane, ElTabs } from '@wg-plus/components/tabs'
import { ElTag } from '@wg-plus/components/tag'
import { ElText } from '@wg-plus/components/text'
import { ElTimePicker } from '@wg-plus/components/time-picker'
import { ElTimeSelect } from '@wg-plus/components/time-select'
import { ElTimeline, ElTimelineItem } from '@wg-plus/components/timeline'
import { ElTooltip } from '@wg-plus/components/tooltip'
import { ElTooltipV2 } from '@wg-plus/components/tooltip-v2'
import { ElTransfer } from '@wg-plus/components/transfer'
import { ElTree } from '@wg-plus/components/tree'
import { ElTreeSelect } from '@wg-plus/components/tree-select'
import { ElTreeV2 } from '@wg-plus/components/tree-v2'
import { ElUpload } from '@wg-plus/components/upload'
import { ElWatermark } from '@wg-plus/components/watermark'
import { ElTour, ElTourStep } from '@wg-plus/components/tour'
import { ElAnchor, ElAnchorLink } from '@wg-plus/components/anchor'

import type { Plugin } from 'vue'

export default [
  ElAffix,
  ElAlert,
  ElAutocomplete,
  ElAutoResizer,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElButtonGroup,
  ElCalendar,
  ElCard,
  ElCarousel,
  ElCarouselItem,
  ElCascader,
  ElCascaderPanel,
  ElCheckTag,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElCollapseTransition,
  ElColorPicker,
  ElConfigProvider,
  ElContainer,
  ElAside,
  ElFooter,
  ElHeader,
  ElMain,
  ElDatePicker,
  ElDescriptions,
  ElDescriptionsItem,
  ElDialog,
  ElDivider,
  ElDrawer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElEmpty,
  ElForm,
  ElFormItem,
  ElIcon,
  ElImage,
  ElImageViewer,
  ElInput,
  ElInputNumber,
  ElLink,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElPageHeader,
  ElPagination,
  ElPopconfirm,
  ElPopover,
  ElPopper,
  ElProgress,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElRate,
  ElResult,
  ElRow,
  ElScrollbar,
  ElSelect,
  ElOption,
  ElOptionGroup,
  ElSelectV2,
  ElSkeleton,
  ElSkeletonItem,
  ElSlider,
  ElSpace,
  ElStatistic,
  ElCountdown,
  ElSteps,
  ElStep,
  ElSwitch,
  ElTable,
  ElTableColumn,
  ElTableV2,
  ElTabs,
  ElTabPane,
  ElTag,
  ElText,
  ElTimePicker,
  ElTimeSelect,
  ElTimeline,
  ElTimelineItem,
  ElTooltip,
  ElTooltipV2,
  ElTransfer,
  ElTree,
  ElTreeSelect,
  ElTreeV2,
  ElUpload,
  ElWatermark,
  ElTour,
  ElTourStep,
  ElAnchor,
  ElAnchorLink,
] as Plugin[]
