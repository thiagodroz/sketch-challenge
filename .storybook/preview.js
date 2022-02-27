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
  (Story, { parameters }) => (
    <ApolloProvider client={client}>
      <MemoryRouter
        initialEntries={parameters.routerInitialEntries || undefined}
      >
        <GlobalStyles />
        <Routes>
          <Route path={parameters.routePath || '*'} element={<Story />} />
        </Routes>
      </MemoryRouter>
    </ApolloProvider>
  ),
]
