import React from 'react'
import styled from 'styled-components'

const Button_Styled = styled.button`
  padding: 10px 15px;
  background-color: ${props => props.theme.palette.primary.main};
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    color: ${props => props.theme.palette.common.hover};
    box-shadow: 0 0 15px 4px ${props => props.theme.palette.common.shadow};
  }
`
export const Button = Button_Styled
