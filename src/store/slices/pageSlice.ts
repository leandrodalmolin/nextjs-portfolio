import { StateCreator } from 'zustand'
import { TPageContent, getPage } from '@/api'

export interface IPageSlice {
  page?: TPageContent
  fetchPage: () => void
}

export const createPageSlice: StateCreator<IPageSlice> = (set) => ({
  page: undefined,
  fetchPage: async () => {
    const data = await getPage('home')
    set({ page: data?.page })
  },
})
