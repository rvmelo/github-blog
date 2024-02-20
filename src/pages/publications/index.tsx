import React from 'react'
import { ProfileInfo } from './components/profileInfo'
import {
  PublicationInfoContainer,
  PublicationItemsContainer,
  PublicationsContainer,
} from './styles'
import { Input } from '../../components/input'
import { PostItem } from '../../components/postItem'
import { useNavigate } from 'react-router-dom'

export const Publications: React.FC = () => {
  const navigate = useNavigate()

  return (
    <PublicationsContainer>
      <ProfileInfo />
      <PublicationInfoContainer>
        <span className="mainTitle">Publicações</span>
        <span className="smallText">6 publicações</span>
      </PublicationInfoContainer>
      <Input />
      <PublicationItemsContainer>
        <PostItem onClick={() => navigate('/post')} />
        <PostItem onClick={() => navigate('/post')} />
        <PostItem onClick={() => navigate('/post')} />
        <PostItem onClick={() => navigate('/post')} />
        <PostItem onClick={() => navigate('/post')} />
        <PostItem onClick={() => navigate('/post')} />
      </PublicationItemsContainer>
    </PublicationsContainer>
  )
}
