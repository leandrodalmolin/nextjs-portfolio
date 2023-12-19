import { create } from 'zustand'
import { IGlobalsSlice, createGlobalsSlice } from './slices'

interface IStoreState extends IGlobalsSlice {}

export const useStore = create<IStoreState>((...args) => ({
  ...createGlobalsSlice(...args)
}))
