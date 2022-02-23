import { VFC } from 'react'
import { ApolloProvider } from '@apollo/client'

import { client } from 'graphql/client'
import { GlobalStyles } from 'styles/global'

const App: VFC = () => (
  <ApolloProvider client={client}>
    <GlobalStyles />
    <div>Sketch Challenge</div>
  </ApolloProvider>
)

export default App
