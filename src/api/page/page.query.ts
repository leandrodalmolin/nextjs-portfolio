export const query = `
  query PageQuery($slug: String!) {
    page(where: { slug: $slug }) {
      slug
      masthead {
        heading
        subheading
      }
      sections {
        ... on Section {
          id
          menuText
          menuTarget
          headline {
            heading
            subheading
          }
          component {
            ... on About {
              id
              about {
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
                id
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
`
