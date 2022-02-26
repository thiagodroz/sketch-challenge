import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ApolloError } from '@apollo/client'

import * as hooks from 'graphql/useDocumentDetails'
import { DocumentPage } from './DocumentPage'

describe('<DocumentPage />', () => {
  it('renders the Loading component if the query is loading', () => {
    jest
      .spyOn(hooks, 'useDocumentDetails')
      .mockImplementation((documentId?: string) => ({
        loading: true,
        data: undefined,
        error: undefined,
      }))

    render(<DocumentPage />, { wrapper: MemoryRouter })
    expect(screen.getByAltText('Loading...')).toBeInTheDocument()
  })
  it('renders the error message if the query returns an error', () => {
    jest
      .spyOn(hooks, 'useDocumentDetails')
      .mockImplementation((documentId?: string) => ({
        loading: false,
        data: undefined,
        error: new ApolloError({}),
      }))

    render(<DocumentPage />, { wrapper: MemoryRouter })
    expect(screen.getByText('Error...')).toBeInTheDocument()
  })
  it('renders the artboard list if the query returns successfully', () => {
    const data = {
      name: 'Test Document',
      artboards: {
        entries: [
          {
            name: 'Artboard 1',
            files: [
              {
                identifier: '123',
                height: 808,
                scale: 1,
                url: '/',
                width: 608,
                thumbnails: [
                  {
                    url: '/',
                  },
                ],
              },
            ],
          },
        ],
      },
    }

    jest
      .spyOn(hooks, 'useDocumentDetails')
      .mockImplementation((documentId?: string) => ({
        loading: false,
        data: data as any,
        error: undefined,
      }))

    render(<DocumentPage />, { wrapper: MemoryRouter })
    expect(screen.getByText('Test Document')).toBeInTheDocument()
    expect(screen.getByText('Artboard 1')).toBeInTheDocument()
  })
})
