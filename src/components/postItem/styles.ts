import styled from 'styled-components'

export const PostItemContainer = styled.div`
  border-radius: 10px;
  padding: 2rem;
  background: ${({ theme }) => theme['base-post']};

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  width: 100%;

  > p {
    color: ${({ theme }) => theme['base-text']};
    line-height: 160%;
  }
`

export const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  .postTitle {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-title']};
  }

  .postTime {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-span']};
    white-space: nowrap;

    margin-top: 6px;
  }
`
