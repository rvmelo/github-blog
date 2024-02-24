import React, { useCallback, useEffect, useState } from 'react'
import { ProfileInfo } from './components/profileInfo'
import {
  PublicationInfoContainer,
  PublicationItemsContainer,
  PublicationsContainer,
} from './styles'
import { Input } from '../../components/input'
import { PostItem } from '../../components/postItem'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { githubLogin, githubUserRepository } from '../../static/github'

export interface GitHubUserData {
  login: string
  avatar_url: string
  html_url: string
  name: string
  bio: string
  followers: number
}

export interface PostsAxiosResponse {
  total_count: number
  items: {
    id: number
    number: number
    body: string
    title: string
    created_at: Date
  }[]
}
export type GitHubPostsData = PostsAxiosResponse['items']

export const Publications: React.FC = () => {
  const navigate = useNavigate()

  const [githubUser, setGitHubUser] = useState({} as GitHubUserData)
  const [githubPosts, setGitHubPosts] = useState([] as GitHubPostsData)
  const [isLoading, setIsLoading] = useState(true)
  const [totalCount, setTotalCount] = useState(0)
  const [searchText, setSearchText] = useState('')

  const loadUser = useCallback(async () => {
    try {
      setIsLoading(true)
      const [{ data: user }, { data: posts }] = await Promise.all([
        api.get<GitHubUserData>(`/users/${githubLogin}`),
        api.get<PostsAxiosResponse>(
          `/search/issues?q=repo:${githubLogin}/${githubUserRepository}`,
        ),
      ])
      setGitHubUser(user)
      setGitHubPosts(posts?.items)
      setTotalCount(posts.total_count)
      setIsLoading(false)
    } catch {
      setIsLoading(false)
    }
  }, [])

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  const handleSearch = useCallback(async () => {
    try {
      const { data } = await api.get<PostsAxiosResponse>(
        `/search/issues?q=${searchText.trim()}%20repo:${githubLogin}/${githubUserRepository}`,
      )

      setGitHubPosts(data.items)
    } catch (err) {
      console.error('Search error: ', err)
    }
  }, [searchText])

  useEffect(() => {
    const timerId = setTimeout(handleSearch, 1000)

    return () => clearTimeout(timerId)
  }, [handleSearch])

  useEffect(() => {
    loadUser()
  }, [loadUser])

  if (isLoading) {
    return undefined
  }

  return (
    <PublicationsContainer>
      <ProfileInfo githubUser={githubUser} />
      <PublicationInfoContainer>
        <span className="mainTitle">Publicações</span>
        <span className="smallText">
          {totalCount === 1
            ? `${totalCount} publicação`
            : `${totalCount} publicações`}
        </span>
      </PublicationInfoContainer>
      <Input onChange={onChange} value={searchText} />
      <PublicationItemsContainer>
        {githubPosts?.map((post) => (
          <PostItem
            key={post.id}
            title={post.title}
            body={post.body}
            createdAt={post.created_at}
            onClick={() =>
              navigate({
                pathname: 'post',
                search: createSearchParams({
                  number: `${post.number}`,
                }).toString(),
              })
            }
          />
        ))}
      </PublicationItemsContainer>
    </PublicationsContainer>
  )
}
