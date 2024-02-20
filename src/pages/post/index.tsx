import React from 'react'
import { PostContainer, PostContentWrapper } from './styles'
import { PostInfo } from './components/PostInfo'

export const Post: React.FC = () => {
  return (
    <PostContainer>
      <PostInfo />
      <PostContentWrapper>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
      </PostContentWrapper>
    </PostContainer>
  )
}
