import React, { useState } from 'react'
import { InputWrapper } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ ...rest }) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <InputWrapper data-state={isFocused ? 'onFocus' : 'onBlur'}>
      <input
        {...rest}
        placeholder="Buscar conteúdo"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </InputWrapper>
  )
}
