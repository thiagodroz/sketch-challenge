import { VFC } from 'react'
import { useParams } from 'react-router-dom'

import { ErrorPage } from 'components/pages/ErrorPage'
import { Header } from 'components/shared/Header'
import { Loading } from 'components/shared/Loading'
import { useDocumentDetails } from 'graphql/useDocumentDetails'
import { ArtboardsList } from './ArtboardsList'

export const DocumentPage: VFC = () => {
  const { documentId } = useParams()
  const { data, error, loading } = useDocumentDetails(documentId!)

  if (loading) return <Loading />

  if (error) return <ErrorPage />

  return (
    <>
      <Header>{data!.name}</Header>
      <ArtboardsList artboards={data!.artboards!.entries} />
    </>
  )
}
