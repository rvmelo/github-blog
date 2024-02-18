import styled from 'styled-components'

export const PublicationsContainer = styled.div``

export const PublicationInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-top: 4.5rem;
  margin-bottom: 0.75rem;

  .mainTitle {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-title']};
  }

  .smallText {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-span']};
  }
`
