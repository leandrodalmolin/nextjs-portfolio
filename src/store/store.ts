import { create } from 'zustand'
import {
  IGlobalsSlice,
  IPageSlice,
  createGlobalsSlice,
  createPageSlice,
} from './slices'

interface IStoreState extends IGlobalsSlice, IPageSlice {}

export const useStore = create<IStoreState>((...args) => ({
  ...createGlobalsSlice(...args),
  ...createPageSlice(...args),
}))
