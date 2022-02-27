import { VFC } from 'react'

import { Header } from 'components/shared/Header'
import * as S from './ErrorPage.styles'

interface ErrorPageProps {
  title?: string
  message?: string
}

export const ErrorPage: VFC<ErrorPageProps> = ({ title, message }) => (
  <>
    <Header>{title ?? 'Error'}</Header>
    <S.Container>
      <S.Message>
        {message ??
          'Something went wrong with your request. Please try again or contact us.'}
      </S.Message>
    </S.Container>
  </>
)
