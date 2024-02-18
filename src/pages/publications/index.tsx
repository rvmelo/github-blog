import React from 'react'
import { ProfileInfo } from './components/profileInfo'
import {
  PublicationInfoContainer,
  PublicationItemsContainer,
  PublicationsContainer,
} from './styles'
import { Input } from '../../components/input'
import { PostItem } from '../../components/postItem'

export const Publications: React.FC = () => {
  return (
    <PublicationsContainer>
      <ProfileInfo />
      <PublicationInfoContainer>
        <span className="mainTitle">Publicações</span>
        <span className="smallText">6 publicações</span>
      </PublicationInfoContainer>
      <Input />
      <PublicationItemsContainer>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </PublicationItemsContainer>
    </PublicationsContainer>
  )
}
