import { hygraph } from '@/lib'
import { query } from './page.query'
import { IPageData } from './page.types'

export async function getPage(slug: string) {
  try {
    const data = await hygraph.request<IPageData>(query, { slug })
    return data?.page
  } catch (error) {
    console.error(error)
  }
}
