/* eslint-disable camelcase */
import React from 'react'
import {
  AdditionalInfoWrapper,
  HeaderInfo,
  InfoItem,
  InfoWrapper,
  ProfileInfoContainer,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { CustomLink } from '../../../../components/customLink'
import { useTheme } from 'styled-components'
import { GitHubUserData } from '../..'

interface ProfileInfoProps {
  githubUser: GitHubUserData
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({ githubUser }) => {
  const theme = useTheme()

  const { name, login, bio, avatar_url, followers, html_url } = githubUser || {}

  return (
    <ProfileInfoContainer>
      <img src={avatar_url} alt="rvmelo" />
      <InfoWrapper>
        <HeaderInfo>
          <span>{name}</span>
          <CustomLink label="github" link={html_url} />
        </HeaderInfo>
        <p>{bio}</p>
        <AdditionalInfoWrapper>
          <InfoItem>
            <FontAwesomeIcon icon={faGithub} color={theme['base-label']} />
            <span>{login}</span>
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon
              icon={faUserGroup}
              color={theme['base-label']}
              size="sm"
            />
            <span>
              {followers} {followers === 1 ? 'seguidor' : 'seguidores'}
            </span>
          </InfoItem>
        </AdditionalInfoWrapper>
      </InfoWrapper>
    </ProfileInfoContainer>
  )
}
