import styled, { css } from 'styled-components'
import { moveUp } from 'src/constants/animations'
import type { DownloadButtonWrapperT } from 'src/components/DownloadButton/types'

export const DownloadButtonWrapper = styled.a<DownloadButtonWrapperT>(
  ({ isVisible }) => css`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px 20px;
    border: 1px solid #2a2a2a;
    border-radius: 15px;
    text-decoration: none;

    opacity: 0;
    transform: translateY(50px);
    animation: ${isVisible ? moveUp : ''} 1.2s ease-out forwards 0.35s;
  `,
)

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`

export const Text = styled.p`
  color: #c2c2c2;
  font-size: 11px;
`

export const Platform = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`
