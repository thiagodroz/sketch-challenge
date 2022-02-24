import { FC } from 'react'
import { Link } from 'react-router-dom'

import * as S from './Header.styles'

interface HeaderProps {
  onCloseRedirectPath?: string
}

export const Header: FC<HeaderProps> = ({ onCloseRedirectPath, children }) => (
  <S.Container>
    {onCloseRedirectPath ? (
      <Link to={onCloseRedirectPath}>
        <S.CloseIcon />
      </Link>
    ) : (
      <S.SketchLogo />
    )}
    <S.Separator />
    {typeof children === 'string' ? <S.Title>{children}</S.Title> : children}
  </S.Container>
)
