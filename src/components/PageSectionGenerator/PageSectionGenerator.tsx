import { About, SideProjects, SkillSet, Work } from '@/components'
import { IPageSectionGenerator } from './PageSectionGenerator.types'

export function PageSectionGenerator({ sections }: IPageSectionGenerator) {
  return sections.map((section) => {
    const { id, anchor, headline, component } = section

    const componentParts = Object.keys(component)
    const componentName = componentParts[1]

    switch (componentName) {
      case 'work':
        return (
          <Work
            key={id}
            anchor={anchor}
            headline={headline}
            works={component.work}
          />
        )
      case 'projects':
        return (
          <SideProjects
            key={id}
            anchor={anchor}
            headline={headline}
            projects={component.projects}
          />
        )
      case 'skills':
        return (
          <SkillSet
            key={id}
            anchor={anchor}
            headline={headline}
            skills={component.skills}
          />
        )
      case 'about':
        return (
          <About
            key={id}
            anchor={anchor}
            headline={headline}
            content={component.about}
          />
        )
    }
  })
}
