import styled from 'styled-components'

type ButtonProps = {
  text?: string
  onClick?: () => void
  [x: string]: any
}

export const Button = (props: ButtonProps) => {
  return <Button_Styled onClick={props.onClick}>{props.text}</Button_Styled>
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
