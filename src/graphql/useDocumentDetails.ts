import { gql, useQuery } from '@apollo/client'

import { Share } from 'types/Document'

const DOCUMENT_DETAILS = gql`
  query DocumentDetails($documentId: String!) {
    share(id: $documentId) {
      identifier
      version {
        document {
          name
          artboards {
            entries {
              name
              isArtboard
              files {
                url
                height
                width
                scale
                thumbnails {
                  url
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`

interface ApiResponse {
  share: Share
}

export const useDocumentDetails = (documentId?: string) => {
  const { data, loading, error } = useQuery<ApiResponse>(DOCUMENT_DETAILS, {
    variables: { documentId },
  })

  return { data: data?.share.version.document, loading, error }
}
