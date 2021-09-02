//Button
type ButtonTheme = "button" | "link" | "text"

type ButtonSize = "big" | "normal" | "small"

type ButtonLevel = "main" | "normal" | "danger"

//Card
type CardShadow = "always" | "hover" | "never"


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
