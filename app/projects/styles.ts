import styled, { css } from 'styled-components'
import type { AnimationType } from 'src/types'
import { moveUp } from 'src/constants/animations'

export const StyledProjects = styled.main`
  width: min(850px, 90vw);
  margin: 50px 30px;
  color: rgb(220, 220, 220);

  *::selection {
    background-color: rgb(255, 157, 0);
    color: white;
  }

  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  @media (max-width: 600px) {
    margin: 20px 30px 50px 30px;
  }
`

export const MainHeader = styled.h1`
  text-align: center;
  margin-bottom: 50px;
  font-size: 46px;
  font-weight: 600;

  opacity: 0;
  transform: translateY(50px);
  animation: ${moveUp} 1s ease-out forwards 0.1s;

  @media (max-width: 600px) {
    font-size: 36px;
    font-weight: 600;
  }
`

export const ProjectHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
`

export const ProjectInitials = styled.div<AnimationType>(
  ({ isVisible }) => css`
    opacity: 0;
    transform: translateY(50px);
    animation: ${isVisible ? moveUp : ''} 1.2s ease-out forwards 0.2s;
  `,
)

export const ProjectName = styled.h2`
  margin-bottom: 6px !important;
  font-size: 38px;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 28px;
    font-weight: 600;
  }
`

export const ProjectDescription = styled.h4`
  font-size: 18px;
  color: rgb(174, 174, 174);
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`

export const TechnologiesSection = styled.div<AnimationType>(
  ({ isVisible }) => css`
    opacity: 0;
    transform: translateY(50px);
    animation: ${isVisible ? moveUp : ''} 1.2s ease-out forwards 0.55s;
  `,
)

export const TechnologiesHeader = styled.h3`
  font-size: 20px;
  margin-bottom: 6px !important;
`

export const Technologies = styled.p`
  color: rgb(188, 188, 188);
`

export const SummarySection = styled.div<AnimationType>(
  ({ isVisible }) => css`
    line-height: 29px;
    white-space: pre-wrap;
    text-align: justify;

    opacity: 0;
    transform: translateY(50px);
    animation: ${isVisible ? moveUp : ''} 1.2s ease-out forwards 0.65s;
  `,
)

export const SummaryHeader = styled(TechnologiesHeader)``

export const ProjectLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 30px;
`

export const Link = styled.a<AnimationType>(
  ({ isVisible }) => css`
    padding: 15px 18px;
    font-size: 14px;
    border: 2px solid rgb(42, 42, 42);
    border-radius: 15px;
    color: rgb(194, 194, 194);
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;

    opacity: 0;
    transform: translateY(50px);
    animation: ${isVisible ? moveUp : ''} 1.2s ease-out forwards 0.35s;

    &:hover {
      color: white;
      border-color: rgb(70, 70, 70);
    }

    &:last-child {
      animation: ${isVisible ? moveUp : ''} 1.2s ease-out forwards 0.7s;
    }
  `,
)
