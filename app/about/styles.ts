import styled, { css } from 'styled-components'
import type { AnimationType } from 'src/types'
import { showElement, moveUp } from 'src/constants/animations'

export const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: min(700px, 90vw);
  margin: 40px 0 100px 0;
  color: rgb(194, 194, 194);

  * {
    &::selection {
      background-color: #c90000;
      color: white;
    }
  }

  @media (max-width: 600px) {
    margin: 20px 0 100px 0;
  }

  img {
    height: 350px;
    width: 100%;
    border-radius: 12px;
    object-fit: cover;
    filter: brightness(1.4);

    opacity: 0;
    transform: translateY(90px) scale(0.7) skewY(8deg);
    animation: ${showElement} 0.7s ease-out forwards 0.3s;
  }
`

export const Header = styled.h1`
  text-align: center;
  font-size: 50px;
  font-weight: 300;

  opacity: 0;
  transform: translateY(50px) scale(0.6) skewY(3deg);
  animation: ${showElement} 0.8s ease-out forwards 0.1s;
`

export const Greeting = styled.h3`
  text-align: center;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 500;

  opacity: 0;
  transform: translateY(50px) scale(0.8) skewY(3deg);
  animation: ${showElement} 0.6s ease-out forwards 0.6s;
`

export const AboutMe = styled.div`
  opacity: 0;
  transform: translateY(60px);
  animation: ${moveUp} 0.8s ease-out forwards 0.8s;

  p {
    margin: 20px 0;
    text-align: justify;
    font-size: 18px;
    line-height: 29px;
  }
`

export const Specifics = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 20px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      color: rgb(110, 110, 110);
      font-size: 16px;
    }
  }
`

export const Projects = styled.div<AnimationType>(
  ({ isVisible }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    opacity: 0;
    transform: translateY(40px);
    animation: ${isVisible ? moveUp : ''} 0.8s ease-out forwards 0.3s;

    p {
      color: rgb(110, 110, 110);
      font-size: 16px;
    }
  `,
)

export const Experience = styled(Projects)<AnimationType>(
  ({ isVisible }) => css`
    animation: ${isVisible ? moveUp : ''} 0.8s ease-out forwards 0.6s;
  `,
)

export const Number = styled.div`
  font-size: 60px;
  font-weight: 300;
`

export const SkillsHeader = styled.h2<AnimationType>(
  ({ isVisible }) => css`
    font-size: 36px;
    font-weight: 500;

    opacity: 0;
    transform: translateY(50px);
    animation: ${isVisible ? moveUp : ''} 0.8s ease-out forwards 0.3s;
  `,
)

export const SkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const Skills = styled.div<AnimationType>(
  ({ isVisible }) => css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    padding: 25px 35px;
    border-radius: 10px;
    border: 2px solid rgb(40, 40, 40);

    opacity: 0;
    transform: translateY(50px);
    animation: ${isVisible ? moveUp : ''} 0.8s ease-out forwards 0.3s;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      font-size: 17px;
    }

    svg {
      height: 40px;
      width: 40px;
    }
  `,
)
