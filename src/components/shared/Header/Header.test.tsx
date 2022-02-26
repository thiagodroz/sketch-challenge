import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { Header } from './Header'

describe('<Header />', () => {
  it('renders the text successfully if a string child is provided', () => {
    render(<Header>Sketch challenge</Header>)
    expect(screen.getByText('Sketch challenge')).toBeInTheDocument()
  })
  it('renders the content correctly if a non string child is provided', () => {
    render(
      <Header>
        <div>Inner content</div>
      </Header>,
    )
    expect(screen.getByText('Inner content')).toBeInTheDocument()
  })
  it('renders the Sketch logo if no onCloseRedirectPath is provided', () => {
    render(<Header>Sketch Challenge</Header>)
    expect(screen.getByAltText('Sketch')).toBeInTheDocument()
  })
  it('renders the close button if a onCloseRedirectPath is provided', () => {
    render(<Header onCloseRedirectPath="/">Sketch Challenge</Header>, {
      wrapper: MemoryRouter,
    })
    expect(screen.getByAltText('Close')).toBeInTheDocument()
  })
})
