import styled from 'styled-components'

export const ProfileInfoContainer = styled.div`
  width: 100%;
  padding: 2rem 2.5rem;
  background: ${({ theme }) => theme['base-profile']};
  margin-top: -5rem;

  border-radius: 10px;

  display: flex;
  flex-direction: row;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > p {
    color: ${({ theme }) => theme['base-text']};
    line-height: 160%;
  }
`

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 8px;

  width: 100%;

  > span {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-title']};
  }
`

export const AdditionalInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;

  margin-top: auto;
`

export const InfoItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  > span {
    color: ${({ theme }) => theme['base-subtitle']};
  }
`
