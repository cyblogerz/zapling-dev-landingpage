import { ReactNode } from 'react'

export type DownloadButtonProps = {
  icon: ReactNode
  text: string
  platform: string
  href: string
  isVisible: boolean
}

export type DownloadButtonWrapperT = {
  isVisible: boolean
}
