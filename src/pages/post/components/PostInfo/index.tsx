import React from 'react'
import { CustomLink } from '../../../../components/customLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'styled-components'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  AdditionalInfoWrapper,
  GoBackWrapper,
  HeaderWrapper,
  InfoItem,
  PostInfoContainer,
} from './styles'
import { useNavigate } from 'react-router-dom'

export const PostInfo: React.FC = () => {
  const theme = useTheme()

  const navigate = useNavigate()

  return (
    <PostInfoContainer>
      <HeaderWrapper>
        <GoBackWrapper onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faChevronLeft} color={theme.blue} />
          <span>voltar</span>
        </GoBackWrapper>
        <CustomLink label="ver no github" link="https://github.com/rvmelo" />
      </HeaderWrapper>
      <span>JavaScript data types and data structures</span>
      <AdditionalInfoWrapper>
        <InfoItem>
          <FontAwesomeIcon icon={faGithub} color={theme['base-label']} />
          <span>rvtheone</span>
        </InfoItem>
        <InfoItem>
          <FontAwesomeIcon icon={faCalendar} color={theme['base-label']} />
          <span>Há 1 dia</span>
        </InfoItem>
        <InfoItem>
          <FontAwesomeIcon icon={faComment} color={theme['base-label']} />
          <span>Há 1 dia</span>
        </InfoItem>
      </AdditionalInfoWrapper>
    </PostInfoContainer>
  )
}
