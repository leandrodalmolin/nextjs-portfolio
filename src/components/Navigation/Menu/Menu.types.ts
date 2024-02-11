export type TMenuItem = {
  text: string
  target: string
}

export interface IMenu {
  items: TMenuItem[]
  onLinkClick?: () => void
}
