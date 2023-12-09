import { create } from 'zustand'
import { TGlobals, getGlobals } from '@/api'

interface GlobalsState {
  globals?: TGlobals
  fetch: () => void
}

export const useGlobalsStore = create<GlobalsState>((set) => ({
  globals: undefined,
  fetch: async () => {
    const data = await getGlobals()
    set({ globals: data?.globals[0] })
  },
}))
