import styled from 'styled-components'
import background from '../../assets/header-background.svg'

export const HeaderWrapper = styled.header`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 18.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 4rem;
    width: 9.25rem;
    height: 6.125rem;
  }
`
