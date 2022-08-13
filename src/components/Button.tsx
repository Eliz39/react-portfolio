import React from 'react'
import styled from 'styled-components'

export function Button(props: React.ComponentProps<typeof Button_Styled>) {
  return <Button_Styled {...props} />
}

const Button_Styled = styled.button`
  padding: 10px 15px;
  background-color: ${props => props.theme.palette.primary.main};
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    color: ${props => props.theme.palette.primary.contrastText};
  }
`
