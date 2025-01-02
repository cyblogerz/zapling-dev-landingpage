import { memo } from 'react'
import Image from 'next/image'
import Swipi from 'swipi'
import ChevronLeft from 'src/assets/icons/chevron-left.svg'
import ChevronRight from 'src/assets/icons/chevron-right.svg'
import type { CarouselProps } from 'src/components/Carousel/types'
import { CarouselWrapper, ImageHolder } from 'src/components/Carousel/styles'

const Carousel = ({ pictures, id, isVisible, name }: CarouselProps) => (
  <CarouselWrapper id={id} isVisible={isVisible}>
    <Swipi
      loop
      slidesNumber={name === 'Weaponry' ? 3 : 1}
      spaceBetweenSlides={name === 'Weaponry' ? 15 : 0}
      animationSpeed={500}
      prevButton={<ChevronLeft />}
      nextButton={<ChevronRight />}
    >
      {pictures.map(picture => (
        <ImageHolder key={picture.id}>
          <Image
            unoptimized
            height={100}
            width={350}
            src={picture.src}
            alt={picture.alt}
          />
        </ImageHolder>
      ))}
    </Swipi>
  </CarouselWrapper>
)

export default memo(Carousel)
