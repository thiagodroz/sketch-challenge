import { render, screen } from '@testing-library/react'

import { Loading } from './Loading'

describe('<Loading />', () => {
  it('renders the loading gif successfuly', () => {
    render(<Loading />)
    expect(screen.getByAltText('Loading...')).toBeInTheDocument()
  })
})
