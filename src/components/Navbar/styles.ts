import styled, { css } from 'styled-components'
import Link from 'next/link'
import type {
  ImageHolderTypes,
  StyledNavbarTypes,
} from 'src/components/Navbar/types'
import {
  showFromBottom,
  showFromLeft,
  rotate,
} from 'src/components/Navbar/animations'

export const StyledNavbar = styled.nav<StyledNavbarTypes>(
  ({ isMobile, delay }) => css`
    position: fixed;
    z-index: 4;
    bottom: -5px;
    display: flex;
    gap: 12px;
    height: fit-content;

    opacity: 0;
    animation: ${isMobile ? showFromBottom : showFromLeft} 2s ease-out forwards
      ${delay}s;

    @media (min-width: 1050px) {
      flex-direction: column;
      top: 50%;
      left: 30px;
    }
  `,
)

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  background-color: black;
`

export const LinkHolder = styled.div<ImageHolderTypes>(
  ({ glowingColor }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 47px;
    height: 47px;
    padding: 1.3px;
    transform: translateZ(0);
    border-radius: 12px;
    overflow: hidden;

    svg {
      height: 26px;
      width: 26px;
    }

    &:hover {
      svg {
        fill: white;
      }
    }

    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      width: 200%;
      height: 200%;
      background: conic-gradient(${glowingColor});
      animation: 6s ${rotate} linear infinite;
    }
  `,
)

export const Overflow = styled.div`
  position: fixed;
  z-index: 3;
  bottom: 0;
  height: 90px;
  width: 100vw;
  background-image: linear-gradient(to bottom, transparent, black);
`
