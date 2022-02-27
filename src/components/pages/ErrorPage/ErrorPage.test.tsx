import { render } from '@testing-library/react'

import { ErrorPage } from './ErrorPage'

describe('<ErrorPage />', () => {
  it('matches the snapshot without params', () => {
    expect(render(<ErrorPage />).container).toMatchInlineSnapshot(`
      <div>
        <header
          class="sc-bdvvtL bPLUNA"
        >
          <img
            alt="Sketch"
            class="sc-gsDKAQ coNSAl"
            src="sketch-logo.svg"
          />
          <img
            alt="Separator"
            class="sc-hKwDye dQenwC"
            src="separator.svg"
          />
          <h1
            class="sc-dkPtRN cEdlJY"
          >
            Error
          </h1>
        </header>
        <main
          class="sc-jRQBWg bWnRfB"
        >
          <div
            class="sc-gKclnd fTqAVy"
          >
            Something went wrong with your request. Please try again or contact us.
          </div>
        </main>
      </div>
    `)
  })
  it('matches the snapshot with params', () => {
    expect(
      render(<ErrorPage title="Error..." message="Something went wrong..." />)
        .container,
    ).toMatchInlineSnapshot(`
      <div>
        <header
          class="sc-bdvvtL bPLUNA"
        >
          <img
            alt="Sketch"
            class="sc-gsDKAQ coNSAl"
            src="sketch-logo.svg"
          />
          <img
            alt="Separator"
            class="sc-hKwDye dQenwC"
            src="separator.svg"
          />
          <h1
            class="sc-dkPtRN cEdlJY"
          >
            Error...
          </h1>
        </header>
        <main
          class="sc-jRQBWg bWnRfB"
        >
          <div
            class="sc-gKclnd fTqAVy"
          >
            Something went wrong...
          </div>
        </main>
      </div>
    `)
  })
})
