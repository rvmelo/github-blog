/* eslint-disable camelcase */
import React, { useCallback, useEffect, useState } from 'react'
import { PostContainer, PostContentWrapper } from './styles'
import { PostInfo } from './components/PostInfo'
import { useSearchParams } from 'react-router-dom'
import { api } from '../../services/api'
import Markdown from 'react-markdown'

interface PostAxiosResponse {
  user: {
    login: string
  }
  comments: number
  body: string
  created_at: Date
}

export const Post: React.FC = () => {
  const [params] = useSearchParams()

  const [isLoading, setIsLoading] = useState(true)

  const [postData, setPostData] = useState({} as PostAxiosResponse)

  const loadPost = useCallback(async () => {
    try {
      const { data } = await api.get<PostAxiosResponse>(
        `/repos/rvmelo/github-blog/issues/${params.get('number')}`,
      )

      setPostData(data)
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
    }
  }, [params])

  useEffect(() => {
    loadPost()
  }, [loadPost])

  const { comments, created_at, user, body } = postData || {}

  if (isLoading) return null

  return (
    <PostContainer>
      <PostInfo comments={comments} createdAt={created_at} login={user.login} />
      <PostContentWrapper>
        <p>
          <Markdown>{body}</Markdown>
        </p>
      </PostContentWrapper>
    </PostContainer>
  )
}
