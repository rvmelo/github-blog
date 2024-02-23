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
import { formatTimeUntilNow } from '../../../../utils/formatTime'

interface PostInfoProps {
  comments: number
  createdAt: Date
  login: string
  repositoryUrl: string
  number: string
}

export const PostInfo: React.FC<PostInfoProps> = ({
  login,
  comments,
  repositoryUrl,
  number,
  createdAt,
}) => {
  const theme = useTheme()

  const navigate = useNavigate()

  const repositoryName = repositoryUrl.substring(
    repositoryUrl.lastIndexOf('/'),
    repositoryUrl.length,
  )

  return (
    <PostInfoContainer>
      <HeaderWrapper>
        <GoBackWrapper onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faChevronLeft} color={theme.blue} />
          <span>voltar</span>
        </GoBackWrapper>
        <CustomLink
          label="ver no github"
          link={`https://github.com/rvmelo/${repositoryName}/issues/${number}`}
        />
      </HeaderWrapper>
      <span>JavaScript data types and data structures</span>
      <AdditionalInfoWrapper>
        <InfoItem>
          <FontAwesomeIcon icon={faGithub} color={theme['base-label']} />
          <span>{login}</span>
        </InfoItem>
        <InfoItem>
          <FontAwesomeIcon icon={faCalendar} color={theme['base-label']} />
          <span>{formatTimeUntilNow(createdAt)}</span>
        </InfoItem>
        <InfoItem>
          <FontAwesomeIcon icon={faComment} color={theme['base-label']} />
          <span>
            {comments} {comments === 1 ? 'comentário' : 'comentários'}
          </span>
        </InfoItem>
      </AdditionalInfoWrapper>
    </PostInfoContainer>
  )
}
