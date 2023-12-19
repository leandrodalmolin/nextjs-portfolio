import { create } from 'zustand'
import {
  IGlobalsSlice,
  IPageSlice,
  createGlobalsSlice,
  createPageSlice,
} from './slices'

interface IBoundStoreState extends IGlobalsSlice, IPageSlice {}

export const useBoundStore = create<IBoundStoreState>((...args) => ({
  ...createGlobalsSlice(...args),
  ...createPageSlice(...args),
}))
