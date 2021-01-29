import React from 'react'
import * as S from './styles'

import { getImageUrl } from '../../utils/getImageUrl'
import { LogoProps } from '../../types/api'

const Logo = ({ alternativeText, url }: LogoProps) => (
  <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />
)

export default Logo
