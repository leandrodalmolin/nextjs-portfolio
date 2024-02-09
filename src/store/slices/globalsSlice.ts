import { StateCreator } from 'zustand'
import { TGlobals, getGlobals } from '@/api'

export interface IGlobalsSlice {
  globals?: TGlobals
  fetchGlobals: () => Promise<void>
}

export const createGlobalsSlice: StateCreator<IGlobalsSlice> = (set) => ({
  globals: undefined,
  fetchGlobals: async () => {
    const data = await getGlobals()
    set({ globals: data?.globals[0] })
  },
})
