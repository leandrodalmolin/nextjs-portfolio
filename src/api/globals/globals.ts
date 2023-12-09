import { hygraph } from '@/lib'
import { query } from './globals.query'
import { IGlobalsData } from './globals.types'

export async function getGlobals() {
  try {
    return await hygraph.request<IGlobalsData>(query)
  } catch (error) {
    console.error(error)
  }
}
