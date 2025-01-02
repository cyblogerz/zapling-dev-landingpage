import { keyframes } from 'styled-components'

export const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`

export const showFromBottom = keyframes`
  0% {
    transform: translateY(90px);
  }
  10% {
    opacity: 1;
    transform: translateY(70px);
  }
  100% {
    opacity: 1;
    transform: translateY(-50%);
  }
`

export const showFromLeft = keyframes`
  0% {
    transform: translateX(-90px) translateY(-50%);
  }
  10% {
    opacity: 1;
    transform: translateX(-70px) translateY(-50%);
  }
  100% {
    opacity: 1;
    transform: translateX(0px) translateY(-50%);
  }
`
