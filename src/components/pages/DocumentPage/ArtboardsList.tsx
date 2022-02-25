import { VFC } from 'react'
import { useParams } from 'react-router-dom'

import { Artboard } from 'types'
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
          to={`/documents/${documentId}/artboards/${index + 1}`}
        >
          <S.ArtboardImageContainer>
            <S.ArtboardImage
              src={artboard.files?.at(0)?.thumbnails?.at(0)?.url?.toString()}
            />
          </S.ArtboardImageContainer>
          <S.ArtboardName>{artboard.name}</S.ArtboardName>
        </S.Artboard>
      ))}
    </S.Container>
  )
}
