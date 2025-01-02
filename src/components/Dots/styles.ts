import styled, { css } from 'styled-components'
import type { DotsWrapperTypes } from 'src/components/Dots/types'
import { moveUp } from 'src/components/Dots/animations'

export const DotsWrapper = styled.div<DotsWrapperTypes>(
  ({ isVisible }) => css`
    display: flex;
    justify-content: center;
    gap: 22px;

    opacity: 0;
    transform: translateY(50px);
    animation: ${isVisible ? moveUp : ''} 0.8s ease-out forwards 0.8s;
  `,
)

export const Dot = styled.div`
  aspect-ratio: 1 / 1;
  height: 7px;
  background-color: white;
  border-radius: 50%;
`
