import { VFC } from 'react'

import { Artboard } from 'types/Document'
import * as S from './ArtboardsList.styles'

interface ArtboardsListProps {
  artboards: Artboard[]
}

export const ArtboardsList: VFC<ArtboardsListProps> = ({ artboards }) => {
  return (
    <S.Container>
      {artboards.map(artboard => (
        <S.Artboard key={artboard.name}>
          <S.ArtboardImageContainer>
            <S.ArtboardImage src={artboard.files[0].thumbnails[0].url} />
          </S.ArtboardImageContainer>
          <S.ArtboardName>{artboard.name}</S.ArtboardName>
        </S.Artboard>
      ))}
    </S.Container>
  )
}
