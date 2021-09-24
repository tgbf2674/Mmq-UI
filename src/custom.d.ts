//Button
type ButtonTheme = 'button' | 'link' | 'text'

type ButtonSize = 'big' | 'normal' | 'small'

type ButtonLevel = 'main' | 'normal' | 'danger'

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
  separatorClass: string
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
  type?: 'success' | 'error' | 'warning' | 'info' | string,
  canClose?: boolean,
  close?: () => void,
  displayTime?: number,
  top?: number,
  time: number
}
