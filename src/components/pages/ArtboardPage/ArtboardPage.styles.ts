import styled from 'styled-components'
import { Link } from 'react-router-dom'

import arrowLeftIcon from './assets/arrow-left.svg'
import arrowRightIcon from './assets/arrow-right.svg'

export const HeaderContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderPageChanger = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const HeaderTitle = styled.div`
  font-size: 14px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const MainContent = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 64px);
  padding: 24px;
`

export const ArtboardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`

export const ArtboardNavAnchor = styled(Link)<{ disabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;

  @media (min-width: 768px) {
    padding: 8px 16px;
  }

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0;
    pointer-events: none;
  `}
`

export const ArrowLeftIcon = styled.img.attrs({
  src: arrowLeftIcon,
  alt: 'Previous artboard',
})`
  transform: scale(0.8);

  @media (min-width: 768px) {
    transform: scale(1);
  }
`

export const ArrowRightIcon = styled.img.attrs({
  src: arrowRightIcon,
  alt: 'Next artboard',
})`
  transform: scale(0.8);

  @media (min-width: 768px) {
    transform: scale(1);
  }
`
