import styled from 'styled-components'

export const PostContainer = styled.div``

export const PostContentWrapper = styled.div`
  padding: 2.5rem 2rem;

  > p {
    color: ${({ theme }) => theme['base-text']};
    line-height: 160%;
  }
`
