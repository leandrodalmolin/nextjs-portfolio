import { GraphQLClient } from 'graphql-request'

export const hygraph = new GraphQLClient(process.env.HYGRAPH_URL!, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
  },
  // Replaced by webhook where the build is triggered
  // every time CMS data is published
  // next: {
  //   revalidate: 60 * 60 * 24,
  // },
})
