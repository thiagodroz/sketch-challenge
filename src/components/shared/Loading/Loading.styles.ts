import styled from 'styled-components'

import spinner from './assets/spinner.gif'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export const Spinner = styled.img.attrs({
  src: spinner,
  alt: 'Loading...',
})``
