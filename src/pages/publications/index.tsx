import React from 'react'
import { ProfileInfo } from './components/profileInfo'
import { PublicationsContainer } from './styles'

export const Publications: React.FC = () => {
  return (
    <PublicationsContainer>
      <ProfileInfo />
    </PublicationsContainer>
  )
}
