import { VFC } from 'react'
import { useParams } from 'react-router-dom'

import { ErrorPage } from 'components/pages/ErrorPage'
import { Header } from 'components/shared/Header'
import { Loading } from 'components/shared/Loading'
import { useDocumentDetails } from 'graphql/useDocumentDetails'

import * as S from './ArtboardPage.styles'

export const ArtboardPage: VFC = () => {
  const { documentId, index } = useParams()
  const { data, error, loading } = useDocumentDetails(documentId!)

  const artboardIndex = Number.parseInt(index!)

  if (loading) return <Loading />

  if (error || !artboardIndex) return <ErrorPage />

  const { name, files } = data!.artboards!.entries[artboardIndex - 1]
  const documentPageUrl = `/documents/${documentId}`

  return (
    <>
      <Header onCloseRedirectPath={documentPageUrl}>
        <S.HeaderContent>
          <S.HeaderPageChanger>
            <S.ArtboardNavAnchor
              to={`${documentPageUrl}/artboards/${artboardIndex - 1}`}
              disabled={artboardIndex === 1}
            >
              <S.ArrowLeftIcon />
            </S.ArtboardNavAnchor>
            {artboardIndex} / {data!.artboards!.entries.length}
            <S.ArtboardNavAnchor
              to={`${documentPageUrl}/artboards/${artboardIndex + 1}`}
              disabled={artboardIndex === data!.artboards!.entries.length}
            >
              <S.ArrowRightIcon />
            </S.ArtboardNavAnchor>
          </S.HeaderPageChanger>
          <S.HeaderTitle>{name}</S.HeaderTitle>
          <div />
        </S.HeaderContent>
      </Header>
      <S.MainContent>
        <S.ArtboardImage src={files[0]!.url?.toString()} alt={name} />
      </S.MainContent>
    </>
  )
}
