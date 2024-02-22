import React from 'react'
import { PostHeader, PostItemContainer } from './styles'
import { formatTimeUntilNow } from '../../utils/formatTime'

interface PostItemProps {
  onClick: () => void
  title: string
  body: string
  createdAt: Date
}

export const PostItem: React.FC<PostItemProps> = ({
  onClick,
  title,
  body,
  createdAt,
}) => {
  return (
    <PostItemContainer onClick={onClick}>
      <PostHeader>
        <span className="postTitle">{title}</span>
        <span className="postTime">{formatTimeUntilNow(createdAt)}</span>
      </PostHeader>
      <p>{body.length > 220 ? body.substring(0, 220) + '...' : body}</p>
    </PostItemContainer>
  )
}
