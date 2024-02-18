import styled from 'styled-components'

export const InputWrapper = styled.div`
  padding: 0.75rem 1rem;

  width: 100%;

  border-radius: 6px;

  background: ${({ theme }) => theme['base-input']};

  &[data-state='onFocus'] {
    border: 1px solid ${({ theme }) => theme.blue};
  }

  &[data-state='onBlur'] {
    border: 1px solid ${({ theme }) => theme['base-border']};
  }

  input {
    width: 100%;
    border: none;
    color: ${({ theme }) => theme['base-text']};
    background: ${({ theme }) => theme['base-input']};
  }

  input::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }

  input:focus {
    outline: 0;
    -webkit-appearance: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
  }
`
