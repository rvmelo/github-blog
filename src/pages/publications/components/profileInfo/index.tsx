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

export const ProfileInfo: React.FC = () => {
  const theme = useTheme()

  return (
    <ProfileInfoContainer>
      <img src="https://github.com/rvmelo.png" alt="" />
      <InfoWrapper>
        <HeaderInfo>
          <span>Roberto Vasconcelos</span>
          <CustomLink label="github" link="https://github.com/rvmelo" />
        </HeaderInfo>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <AdditionalInfoWrapper>
          <InfoItem>
            <FontAwesomeIcon icon={faGithub} color={theme['base-label']} />
            <span>rvtheone</span>
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon
              icon={faUserGroup}
              color={theme['base-label']}
              size="sm"
            />
            <span>3 seguidores</span>
          </InfoItem>
        </AdditionalInfoWrapper>
      </InfoWrapper>
    </ProfileInfoContainer>
  )
}
