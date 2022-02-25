import { VFC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import { ArtboardPage } from 'components/pages/ArtboardPage'
import { DocumentPage } from 'components/pages/DocumentPage'
import { client } from 'graphql/client'
import { GlobalStyles } from 'styles/global'

const App: VFC = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/documents/:documentId" element={<DocumentPage />} />
        <Route
          path="/documents/:documentId/artboards/:index"
          element={<ArtboardPage />}
        />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </ApolloProvider>
  </BrowserRouter>
)

export default App
