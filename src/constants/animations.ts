import { keyframes } from 'styled-components'

export const styledHomeAnimation = keyframes`
  to {
    transform: translateY(0px);
  }
`

export const greetingAnimation = keyframes`
  to {
    opacity: 1;
    transform: translateY(0px) translateX(0px);
  }
`

export const imageAnimation = keyframes`
  to {
    opacity: 1;
    transform: translateY(0px) scale(1) rotate(0deg);
  }
`

export const nameAnimation = keyframes`
  to {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
`

export const showOpacity = keyframes`
    to {
    opacity: 1;
  }
`

export const moveUp = keyframes`
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`

export const topToBottom = keyframes`
  0% {
    transform: translateY(-40px);
  }
  50% {
    transform: translateY(200px);
  }
  100% {
    transform: translateY(-40px);
  }
`

export const scale = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.6);
  }
  100% {
    transform: scale(1);
  }
`

export const showElement = keyframes`
  to {
    opacity: 1;
    transform: translateY(0px) scale(1) skewY(0deg);
  }
`
