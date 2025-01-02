import styled, { css } from 'styled-components'
import type { CarouselWrapperTypes } from 'src/components/Carousel/types'
import { moveUp } from 'src/components/Carousel/animations'

export const CarouselWrapper = styled.div<CarouselWrapperTypes>(
  ({ isVisible }) => css`
    position: relative;
    aspect-ratio: 1.77 / 1;
    width: 100%;
    border-radius: 30px;
    overflow: hidden;

    opacity: 0;
    transform: translateY(50px);
    animation: ${isVisible ? moveUp : ''} 1.2s ease-out forwards 0.35s;

    svg {
      height: 50px;
      width: 50px;
      fill: white;
    }

    .left-button {
      position: absolute;
      height: 100%;
      left: -5px;
    }

    .right-button {
      position: absolute;
      height: 100%;
      right: -5px;
    }

    .dots-wrapper {
      position: absolute;
      bottom: 10px;
      gap: 13px;
      padding: 14px 18px;
      background-color: rgb(15, 16, 17);
      border-radius: 13px;
    }

    @media (max-width: 600px) {
      svg {
        height: 30px;
        width: 30px;
      }

      .dots-wrapper {
        gap: 10px;
        bottom: 5px;
        padding: 10px 15px;
        border-radius: 10px;
      }
    }
  `,
)

export const ImageHolder = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
  }
`
