import styled from 'styled-components'

export const CustomLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  cursor: pointer;

  padding-bottom: 2px;

  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.blue};
  }

  font-size: 0.75rem;

  a {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    color: ${({ theme }) => theme.blue};
  }
`
