import { VFC } from 'react'
import { ApolloProvider } from '@apollo/client'

import { client } from 'graphql/client'

const App: VFC = () => (
  <ApolloProvider client={client}>
    <div>Sketch Challenge</div>
  </ApolloProvider>
)

export default App
