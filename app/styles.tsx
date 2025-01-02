import styled, { css } from 'styled-components'
import Link from 'next/link'
import type { OptionTypes } from 'src/types'
import {
  styledHomeAnimation,
  greetingAnimation,
  imageAnimation,
  nameAnimation,
  showOpacity,
} from 'src/constants/animations'

export const StyledHome = styled.main`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 40px 20px 100px 20px;
  color: rgb(194, 194, 194);

  transform: translateY(160px);
  animation: ${styledHomeAnimation} 2.6s ease-in-out forwards 1.6s;

  *::selection {
    background-color: #072ea3;
    color: white;
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    filter: blur(35px);
  }

  &::before {
    z-index: 1;
    width: 480px;
    height: 360px;
    margin-left: -400px;
    background: linear-gradient(
      to bottom right,
      rgba(1, 65, 255, 0),
      rgba(1, 65, 255, 0),
      rgba(1, 65, 255, 0.3)
    );
    border-radius: 50%;
  }

  &::after {
    height: 200px;
    width: 260px;
    bottom: 50%;
    left: 50%;
    background: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));
  }

  @media (max-width: 600px) {
    &::after {
      height: 110px;
      width: 170px;
    }
  }
`

export const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TopGreeting = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 600px) {
    gap: 5px;
  }
`

export const Greeting = styled.h1`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px;
  font-size: 50px;
  font-weight: 300;

  opacity: 0;
  transform: translateY(30px) translateX(30px) scale(0.8);
  animation: ${greetingAnimation} 0.75s ease-out forwards 0.1s;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`

export const ImageHolder = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  overflow: hidden;

  opacity: 0;
  transform: translateY(50px) scale(0.8) rotate(10deg);
  animation: ${imageAnimation} 0.65s ease-out forwards 0.35s;

  img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: brightness(1.1);
  }

  @media (max-width: 600px) {
    width: 60px;
    height: 60px;
  }
`

export const Name = styled(Greeting)`
  transform: scale(0.9) translateY(40px);
  animation: ${nameAnimation} 0.65s ease-out forwards 0.55s;
`

export const Position = styled(Greeting)`
  z-index: 1;
  transform: translateY(0px) translateX(0px) scale(1);
  animation: ${showOpacity} 1.4s ease-out forwards 2.1s;
`

export const NavigationSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Option = styled(Link)<OptionTypes>(
  ({ index }) => css`
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    padding: 20px 24px;
    color: rgb(194, 194, 194);
    font-size: 14px;
    border: 2px solid rgb(40, 40, 40);
    border-radius: 12px;
    text-decoration: none;
    cursor: pointer;

    opacity: 0;
    transition: 0.3s;
    animation: ${showOpacity} 0.7s ease-out forwards ${2.5 + (index * 3) / 10}s;

    &:hover {
      color: white;
      border-color: rgb(70, 70, 70);

      svg {
        transform: translateX(25px);
      }
    }

    div {
      display: flex;
      align-items: center;
    }

    p {
      color: rgb(97, 97, 97);
      margin: 0 15px 0 0;
    }

    svg {
      height: 22px;
      width: 22px;
      transition: 0.5s;

      &:first-child {
        position: absolute;
        left: -25px;
        fill: white;
      }
    }

    @media (max-width: 600px) {
      padding: 15px 24px;
    }
  `,
)

export const ArrowContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 25px;
  overflow: hidden;
`

export const Text = styled.div`
  z-index: 2;
  display: flex;
  font-size: 13px;
  opacity: 0;
  animation: ${showOpacity} 0.5s ease-out forwards 3.45s;

  a {
    position: relative;
    color: rgb(194, 194, 194);
    text-decoration: none;
    cursor: pointer;

    &:hover {
      div {
        background-color: rgb(194, 194, 194);
      }
    }
  }
`

export const StyledLink = styled(Link)`
  position: relative;
  margin-left: 2px;
  cursor: pointer;
  transition: text-shadow 0.5s;

  &::after {
    position: absolute;
    content: ' ';
    left: 0;
    height: 1.5px;
    width: 100%;
    background-color: rgb(255, 255, 255, 0.64);
    transform: scaleX(0) translateY(20px);
    transform-origin: right;
    transition: transform 0.5s;
  }

  &:hover {
    text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.864);
    &::after {
      transform: scaleX(1) translateY(20px);
      transform-origin: left;
    }
  }
`
