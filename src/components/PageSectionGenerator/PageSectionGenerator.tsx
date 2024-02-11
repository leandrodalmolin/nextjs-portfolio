import { About, SideProjects, SkillSet, Work } from '@/components'
import { IPageSectionGenerator } from './PageSectionGenerator.types'

export function PageSectionGenerator({ sections }: IPageSectionGenerator) {
  return sections.map((section) => {
    const { id, menuTarget, headline, component } = section

    const componentParts = Object.keys(component)
    const componentName = componentParts[1]

    switch (componentName) {
      case 'work':
        return (
          <Work
            key={id}
            target={menuTarget}
            headline={headline}
            works={component.work}
          />
        )
      case 'projects':
        return (
          <SideProjects
            key={id}
            target={menuTarget}
            headline={headline}
            projects={component.projects}
          />
        )
      case 'skills':
        return (
          <SkillSet
            key={id}
            target={menuTarget}
            headline={headline}
            skills={component.skills}
          />
        )
      case 'about':
        return (
          <About
            key={id}
            target={menuTarget}
            headline={headline}
            content={component.about}
          />
        )
    }
  })
}
