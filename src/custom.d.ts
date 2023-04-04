//Button
type ButtonTheme = 'button' | 'link' | 'text'

type ButtonSize = 'big' | 'normal' | 'small'

type ButtonLevel = 'main' | 'normal' | 'danger'

type ButtonSizeLevelType = {
  size: ButtonSize,
  level: ButtonLevel
}

//Card
type CardShadow = 'always' | 'hover' | 'never'
//Link
type LinkType = 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'default'

//Tag
type TagType = 'success' | 'info' | 'warning' | 'danger' | ''

type ComponentSize = 'medium' | 'small' | 'mini'

//alert
type AlertEffect = 'light' | 'dark'

//breadcrumb
interface IBreadcrumbProps {
  separator: string
  separatorCustom: string
}

interface ICollapseProps{
  activeName: Array<string>
  accordion: boolean
}

interface ISelectProps {
  multiple: boolean
}

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T
  currentTarget: T
}


// skeleton
type Variants =
  | 'circle'
  | 'rect'
  | 'h1'
  | 'h3'
  | 'text'
  | 'caption'
  | 'p'
  | 'image'
  | 'button'

//dialog
interface DialogOptions {
  title: string,
  content: string,
  ok: Function,
  cancel: Function,
  closeOnClickOverlay: boolean
}

//Loading
interface LoadingOptions {
  text: string,
  background?: string
}

//Message
interface MessageOptions {
  message: string,
  type?: 'SuccessFilled' | 'WarningFilled' | 'CircleCloseFilled' | 'InfoFilled' ,
  canClose?: boolean,
  close?: () => void,
  displayTime?: number,
  top?: number,
  time?: number
}

// Tooltip
type TooltipEffectOptions = 'dark' | 'light'

// Input
type InputSizeOptions =  'large' | 'normal' | 'small'
type InputTypeOptions = 'text' | 'textarea' | 'password'

// image
type imageFitOptions = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

// form
interface FormFieldsOptions {
  prop: string
}

interface FormErrorOptions {
  [propsName: string]: string
}


// table
interface TableColumnsOptions {
  title: string, dataIndex: string, key?: string, width?: number, fixed?: string | boolean, ellipsis?: boolean, bordered?: boolean, sort?: Function
}
type TableSizeOptions =  'normal' | 'middle' | 'small'
