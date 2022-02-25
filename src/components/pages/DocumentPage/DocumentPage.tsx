import { VFC } from 'react'
import { useParams } from 'react-router-dom'

import { Header } from 'components/shared/Header'
import { Loading } from 'components/shared/Loading'
import { useDocumentDetails } from 'graphql/useDocumentDetails'
import { ArtboardsList } from './ArtboardsList'

export const DocumentPage: VFC = () => {
  const { documentId } = useParams()
  const { data, error, loading } = useDocumentDetails(documentId!)

  if (loading) return <Loading />

  if (error) return <div>Error...</div>

  return (
    <>
      <Header>{data!.name}</Header>
      <ArtboardsList artboards={data!.artboards!.entries} />
    </>
  )
}
