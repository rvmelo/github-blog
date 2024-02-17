import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'styled-components'
import { CustomLinkWrapper } from './styles'

interface CustomLinkProps {
  label: string
  link: string
}

export const CustomLink: React.FC<CustomLinkProps> = ({ label, link }) => {
  const theme = useTheme()

  return (
    <CustomLinkWrapper>
      <a href={link}>{label}</a>
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} color={theme.blue} />
    </CustomLinkWrapper>
  )
}
