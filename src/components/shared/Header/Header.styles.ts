import styled from 'styled-components'

import sketchLogo from './assets/sketch-logo.svg'
import separator from './assets/separator.svg'
import closeIcon from './assets/close.svg'

export const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 0 24px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
  background-color: #fff;
`

export const SketchLogo = styled.img.attrs({
  src: sketchLogo,
  alt: 'Sketch',
})`
  width: 28px;
`

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 400;
`

export const Separator = styled.img.attrs({
  src: separator,
  alt: 'Separator',
})`
  height: 32px;
  margin: 0 24px;
`

export const CloseIcon = styled.img.attrs({
  src: closeIcon,
  alt: 'Close',
})`
  width: 24px;
`
