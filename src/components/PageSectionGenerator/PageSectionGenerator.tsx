import { About, SideProjects, SkillSet, Work } from '@/components'
import { IPageSectionGenerator } from './PageSectionGenerator.types'

export function PageSectionGenerator({ sections }: IPageSectionGenerator) {
  {
    return sections.map(({ component }) => {
      const componentParts = Object.keys(component)
      const componentName = componentParts[1]
      switch (componentName) {
        case 'work':
          return <Work works={component.work} />
        case 'projects':
          return <SideProjects projects={component.projects} />
        case 'skills':
          return <SkillSet skills={component.skills} />
        case 'about':
          return <About content={component.about} />
      }
    })
  }
}
