import { hygraph } from '@/lib'
import { query } from './page.query'
import { IPageData } from './page.types'

export async function getPage(slug: string) {
  try {
    return await hygraph.request<IPageData>(query, { slug })
  } catch (error) {
    console.error(error)
  }
}
