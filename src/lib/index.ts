export { default as MqSwitch } from './MqSwitch.vue'
export { default as MqButton } from './Button.vue'
export { default as MqButtonGroup } from './ButtonGroup.vue'
export { default as MqTabs } from './Tabs.vue'
export { default as MqTab } from './Tab.vue'
export { default as MqRadio } from './Radio.vue'
export { default as MqTag } from './Tag.vue'
export { default as MqAside } from './Container/Aside.vue'
export { default as MqContainer } from './Container/Container.vue'
export { default as MqFooter } from './Container/Footer.vue'
export { default as MqHeader } from './Container/Header.vue'
export { default as MqMain } from './Container/Main.vue'
export { default as MqResult } from './Result/Result.vue'
export { default as MqAlert } from './Alert.vue'
export { default as MqBackTop } from './BackTop.vue'
export { default as MqBadge } from './Badge.vue'
export { default as MqBreadcrumb } from './Breadcrumb.vue'
export { default as MqBreadcrumbItem } from './BreadcrumbItem.vue'
export { default as MqCard } from './Card.vue'
export { default as MqCheckbox } from './Checkbox.vue'
export { default as MqCheckboxGroup } from './CheckboxGroup.vue'
export { default as MqCollapse } from './Collapse.vue'
export { default as MqCollapseItem } from './CollapseItem.vue'
export { default as MqDialog } from './Dialog.vue'
export { default as MqDropdown } from './Dropdown.vue'
export { default as MqEmpty } from './Empty.vue'
export { default as MqForm } from './Form.vue'
export { default as MqFormItem } from './FormItem.vue'
export { default as MqGrid } from './Grid.vue'
export { default as MqGridCol } from './GridCol.vue'
export { default as MqIcon } from './MqIcon.vue'
export { default as MqInput } from './Input.vue'
export { default as MqInputNumber } from './InputNumber.vue'
export { default as MqLoading } from './Loading.vue'
export { default as MqMessage } from './Message.vue'
export { default as MqSkeleton } from './Skeleton.vue'
export { default as MqSkeletonItem } from './SkeletonItem.vue'
export { default as MqSpread } from './Spread.vue'
export { default as MqSticky } from './Sticky.vue'
export { default as MqSwiper } from './Swiper.vue'
export { default as MqTooltip } from './Tooltip.vue'
export { default as MqSelect } from './MqSelect.vue'
export { default as MqSelectOption } from './MqSelectOption.vue'
export { default as MqPagination } from './MqPagination.vue'
export { default as MqTable } from './MqTable.vue'

import MqSwitch from './MqSwitch.vue'
import MqButton from './Button.vue'
import MqButtonGroup from './ButtonGroup.vue'
import MqTabs from './Tabs.vue'
import MqTab from './Tab.vue'
import MqRadio from './Radio.vue'
import MqTag from './Tag.vue'
import MqAside from './Container/Aside.vue'
import MqContainer from './Container/Container.vue'
import MqFooter from './Container/Footer.vue'
import MqHeader from './Container/Header.vue'
import MqMain from './Container/Main.vue'
import MqResult from './Result/Result.vue'
import MqAlert from './Alert.vue'
import MqBackTop from './BackTop.vue'
import MqBadge from './Badge.vue'
import MqBreadcrumb from './Breadcrumb.vue'
import MqBreadcrumbItem from './BreadcrumbItem.vue'
import MqCard from './Card.vue'
import MqCheckbox from './Checkbox.vue'
import MqCheckboxGroup from './CheckboxGroup.vue'
import MqCollapse from './Collapse.vue'
import MqCollapseItem from './CollapseItem.vue'
import MqDialog from './Dialog.vue'
import MqDropdown from './Dropdown.vue'
import MqEmpty from './Empty.vue'
import MqForm from './Form.vue'
import MqFormItem from './FormItem.vue'
import MqGrid from './Grid.vue'
import MqGridCol from './GridCol.vue'
import MqIcon from './Icon.vue'
import MqInput from './Input.vue'
import MqInputNumber from './InputNumber.vue'
import MqLoading from './Loading.vue'
import MqMessage from './Message.vue'
import MqSkeleton from './Skeleton.vue'
import MqSkeletonItem from './SkeletonItem.vue'
import MqSpread from './Spread.vue'
import MqSticky from './Sticky.vue'
import MqSwiper from './Swiper.vue'
import MqTooltip from './Tooltip.vue'
import MqPagination from './MqPagination.vue';
import MqSelect from './MqSelect.vue';
import MqSelectOption from './MqSelectOption.vue';
import MqTable from './MqTable.vue';
import { App} from 'vue';

const componentList: any = [
  MqFooter,
  MqCollapse,
  MqTooltip,
  MqSticky,
  MqSwiper,
  MqSpread,
  MqSkeletonItem,
  MqSkeleton,
  MqMessage,
  MqLoading,
  MqInput,
  MqInputNumber,
  MqIcon,
  MqGrid,
  MqGridCol,
  MqForm,
  MqFormItem,
  MqEmpty,
  MqDialog,
  MqDropdown,
  MqCollapseItem,
  MqBadge,
  MqCheckboxGroup,
  MqCard,
  MqCheckbox,
  MqBreadcrumb,
  MqBreadcrumbItem,
  MqHeader,
  MqMain,
  MqResult,
  MqAlert,
  MqBackTop,
  MqSwitch,
  MqButton,
  MqButtonGroup,
  MqTabs,
  MqTab,
  MqRadio,
  MqTag,
  MqAside,
  MqContainer,
  MqPagination,
  MqSelect,
  MqSelectOption,
  MqTable
]

const install = function (Vue: App) {
  componentList.forEach((item: any) => {
    Vue.component(item.name, item)
  })
}

export default install
