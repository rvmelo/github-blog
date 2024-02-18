import React from 'react'
import { PostHeader, PostItemContainer } from './styles'

export const PostItem: React.FC = () => {
  return (
    <PostItemContainer>
      <PostHeader>
        <span className="postTitle">
          JavaScript data types and data structures
        </span>
        <span className="postTime">Há 1 dia</span>
      </PostHeader>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in
      </p>
    </PostItemContainer>
  )
}
