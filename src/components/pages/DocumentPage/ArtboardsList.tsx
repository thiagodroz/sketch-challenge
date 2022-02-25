import { VFC } from 'react'
import { useParams } from 'react-router-dom'

import { Artboard } from 'types/Document'
import * as S from './ArtboardsList.styles'

interface ArtboardsListProps {
  artboards: Artboard[]
}

export const ArtboardsList: VFC<ArtboardsListProps> = ({ artboards }) => {
  const { documentId } = useParams()

  return (
    <S.Container>
      {artboards.map((artboard, index) => (
        <S.Artboard
          key={artboard.name}
          to={`/documents/${documentId}/${index + 1}`}
        >
          <S.ArtboardImageContainer>
            <S.ArtboardImage src={artboard.files[0].thumbnails[0].url} />
          </S.ArtboardImageContainer>
          <S.ArtboardName>{artboard.name}</S.ArtboardName>
        </S.Artboard>
      ))}
    </S.Container>
  )
}
