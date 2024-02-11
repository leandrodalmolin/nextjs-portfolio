export type TAbout = {
  html: string
}

export type TSkill = {
  id: string
  title: string
  iconSvg: string
}

export type TProjectLinkIcon = 'Github' | 'External' | null

export type TProjectLink = {
  id: string
  text: string
  url: string
  external: boolean
  icon: TProjectLinkIcon
}

export type TProject = {
  id: string
  title: string
  description: string
  links: TProjectLink[]
}

export type TWork = {
  id: string
  title: string
  description: string
  siteUrl: string
  image: {
    url: string
  }
  cardColour: {
    hex: string
  }
}

export type TComponent = {
  id: string
  work?: TWork[]
  projects?: TProject[]
  skills?: TSkill[]
  about?: TAbout
}

export type TMasthead = {
  heading: string
  subheading: string
}

export type THeadline = {
  heading: string
  subheading: string
}

export type TSection = {
  id: string
  menuText: string
  menuTarget: string
  headline: THeadline
  component: TComponent
}

export type TPageContent = {
  slug: string
  masthead: TMasthead
  sections: TSection[]
}

export interface IPageData {
  page: TPageContent
}
