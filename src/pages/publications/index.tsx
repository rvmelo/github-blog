import React from 'react'
import { ProfileInfo } from './components/profileInfo'
import { PublicationInfoContainer, PublicationsContainer } from './styles'
import { Input } from '../../components/input'

export const Publications: React.FC = () => {
  return (
    <PublicationsContainer>
      <ProfileInfo />
      <PublicationInfoContainer>
        <span className="mainTitle">Publicações</span>
        <span className="smallText">6 publicações</span>
      </PublicationInfoContainer>
      <Input />
    </PublicationsContainer>
  )
}
