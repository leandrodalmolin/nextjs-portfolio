export type TGlobals = {
  email?: string
  github?: string
  linkedin?: string
  cvFile?: {
    url: string
  }
}

export interface IGlobalsData {
  globals: TGlobals[]
}
