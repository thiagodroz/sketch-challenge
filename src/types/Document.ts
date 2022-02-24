interface Thumbnail {
  height: number | null
  width: number | null
  url: string
}

interface File {
  height: number
  width: number
  scale: number
  thumbnails: Thumbnail[]
  url: string
}

export interface Artboard {
  name: string
  isArtboard: boolean
  files: File[]
}

export interface Document {
  name: string
  artboards: { entries: Artboard[] }
}

interface Version {
  document: Document
}

export interface Share {
  identifier: string
  version: Version
}
