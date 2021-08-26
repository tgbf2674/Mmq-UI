//Button
type ButtonTheme = "button" | "link" | "text"

type ButtonSize = "big" | "normal" | "small"

type ButtonLevel = "main" | "normal" | "danger"

//Card
type CardShadow = "always" | "hover" | "never"

//dialog
interface IDialogOptions {
  title: string,
  content: string,
  ok: Function,
  cancel: Function,
  closeOnClickOverlay: boolean
}

interface ILoadingOptions {
  text: string,
  background?: string
}
