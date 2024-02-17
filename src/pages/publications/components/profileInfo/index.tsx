import React from 'react'
import {
  AdditionalInfoWrapper,
  HeaderInfo,
  InfoItem,
  InfoWrapper,
  ProfileInfoContainer,
} from './styles'

export const ProfileInfo: React.FC = () => {
  return (
    <ProfileInfoContainer>
      <img src="https://github.com/rvmelo.png" alt="" />
      <InfoWrapper>
        <HeaderInfo>
          <span>Roberto Vasconcelos</span>
        </HeaderInfo>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <AdditionalInfoWrapper>
          <InfoItem>
            <span>rvtheone</span>
          </InfoItem>
          <InfoItem>
            <span>3 seguidores</span>
          </InfoItem>
        </AdditionalInfoWrapper>
      </InfoWrapper>
    </ProfileInfoContainer>
  )
}
