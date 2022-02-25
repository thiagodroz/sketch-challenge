import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: calc(100vh - 64px);
  overflow-x: auto;
`

export const Artboard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  padding: 24px;
  text-decoration: none;
`

export const ArtboardImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
  width: 100%;
`

export const ArtboardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`

export const ArtboardName = styled.span`
  margin: 16px 0;
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.65);
`
