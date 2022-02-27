import { VFC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import { ArtboardPage } from 'components/pages/ArtboardPage'
import { DocumentPage } from 'components/pages/DocumentPage'
import { ErrorPage } from 'components/pages/ErrorPage'
import { client } from 'graphql/client'
import { GlobalStyles } from 'styles/global'

const App: VFC = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Routes>
        <Route
          path="/"
          element={
            <ErrorPage
              title="Page not found"
              message="404 - The page you requested doesn't exist."
            />
          }
        />
        <Route path="/documents/:documentId" element={<DocumentPage />} />
        <Route
          path="/documents/:documentId/artboards/:index"
          element={<ArtboardPage />}
        />
        <Route
          path="*"
          element={
            <ErrorPage
              title="Page not found"
              message="404 - The page you requested doesn't exist."
            />
          }
        />
      </Routes>
    </ApolloProvider>
  </BrowserRouter>
)

export default App
