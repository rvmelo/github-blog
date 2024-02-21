import React from 'react'
import { PostHeader, PostItemContainer } from './styles'

interface PostItemProps {
  onClick: () => void
  title: string
  body: string
}

export const PostItem: React.FC<PostItemProps> = ({ onClick, title, body }) => {
  return (
    <PostItemContainer onClick={onClick}>
      <PostHeader>
        <span className="postTitle">{title}</span>
        <span className="postTime">Há 1 dia</span>
      </PostHeader>
      <p>{body.length > 220 ? body.substring(0, 220) + '...' : body}</p>
    </PostItemContainer>
  )
}
