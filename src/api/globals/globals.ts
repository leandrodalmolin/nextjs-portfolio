import { hygraph } from '@/lib'
import { query } from './globals.query'
import { IGlobalsData } from './globals.types'

export async function getGlobals() {
  try {
    const data = await hygraph.request<IGlobalsData>(query)
    return data?.globals[0]
  } catch (error) {
    console.error('Error fetching data:', error)
    throw new Error('Failed to fetch data')
  }
}
