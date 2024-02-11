export const query = `
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
