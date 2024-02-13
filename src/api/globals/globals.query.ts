import { gql } from 'graphql-request'

export const query = gql`
  query GlobalsQuery {
    globals {
      email
      github
      linkedin
      cvFile {
        url
      }
    }
  }
`
