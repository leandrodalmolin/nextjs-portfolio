import { fetchData } from '.'

export async function getPage(slug: string) {
  return fetchData(`
    query PageQuery {
      page(where: {slug: "${slug}"}) {
        slug
        masthead {
          heading
          subheading
        }
        sections {
          ... on Section {
            id
            anchor
            headline {
              heading
              subheading
            }
            component {
              ... on About {
                id
                content {
                  html
                }
              }
              ... on ProjectsList {
                id
                projects {
                  ... on Project {
                    id
                    title
                    description
                    links {
                      ... on ProjectLink {
                        id
                        text
                        url
                        external
                        icon
                      }
                    }
                  }
                }
              }
              ... on SkillsList {
                id
                skills {
                  ... on Skill {
                    id
                    title
                    iconSvg
                  }
                }
              }
              ... on WorksList {
                id
                work {
                  title
                  description
                  siteUrl
                  image {
                    url(transformation: {document: {output: {format: jpg}}})
                  }
                  cardColour {
                    hex
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
}
