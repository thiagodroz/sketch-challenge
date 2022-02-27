import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import { client } from '../src/graphql/client'
import { GlobalStyles } from '../src/styles/global'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  Story => (
    <ApolloProvider client={client}>
      <MemoryRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Story />} />
        </Routes>
      </MemoryRouter>
    </ApolloProvider>
  ),
]
