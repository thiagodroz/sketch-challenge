import { MemoryRouter, Routes, Route } from 'react-router-dom'

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
    <MemoryRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Story />} />
      </Routes>
    </MemoryRouter>
  ),
]
