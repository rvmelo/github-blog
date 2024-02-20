import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme['base-profile']};
  width: 100%;
  margin-top: -5rem;
  border-radius: 10px;

  > span {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-title']};
  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.25rem;

  width: 100%;
`

export const GoBackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  font-size: 0.8rem;

  cursor: pointer;

  > span {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.blue};
  }
`

export const AdditionalInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;

  margin-top: 0.5rem;
`

export const InfoItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  > span {
    color: ${({ theme }) => theme['base-span']};
  }
`
