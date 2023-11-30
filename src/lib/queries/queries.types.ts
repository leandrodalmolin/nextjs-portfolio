type TAbout = {
  html: string
}

type TSkill = {
  id: string
  title: string
  iconSvg: string
}

type TProjectLink = {
  id: string
  text: string
  url: string
  external: boolean,
  icon: 'Github' | 'External' | null
}

type TProject = {
  id: string
  title: string
  description: string
  links: TProjectLink[]
}

type TWork = {
  id: string
  title: string
  description: string
  siteUrl: string
  image: {
    url: string
  },
  cardColour: {
    hex: string
  }
}

type TComponent = {
  id: string
  work?: TWork[]
  projects?: TProject[]
  skills?: TSkill[]
  about?: TAbout
}

type TMasthead = {
  heading: string
  subheading: string
}

type THeadline = {
  heading: string
  subheading: string
}

type TSection = {
  id: string
  anchor: string
  headline: THeadline
  component: TComponent
}

type TPageContent = {
  slug: string
  masthead: TMasthead
  sections: TSection[]
}

export interface IPageData {
  page: TPageContent
}