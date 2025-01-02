export type CarouselWrapperTypes = {
  isVisible: boolean
}

export type CarouselProps = {
  pictures: { id: string; src: string; alt: string }[]
  id: string
  isVisible: boolean
  name: string
}
