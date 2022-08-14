import { Button } from '../../components/Button'
import React, { useState } from 'react'
import styled from 'styled-components'

export type TodoTask = {
  id: number
  text: string
  isComplete: boolean
}

export type TodoForm = {
  todo?: TodoTask
  onSubmit?: (todo: any) => void
  edit?: {
    id: number
    value: string
  }
}

export const TodoForm = (props: TodoForm) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (props.onSubmit) {
      props.onSubmit({
        id: Math.floor(Math.random() * 10_000),
        text: input,
      })
    }
    setInput('')
  }

  return (
    <Form_Styled onSubmit={handleSubmit}>
      <>
        <Input_Styled_Updated
          type='text'
          placeholder={props.edit ? 'Update task' : 'What needs to be done?'}
          value={input}
          name='text'
          onChange={handleChange}
          autoFocus
        />
        <Button_Styled type='submit'>{props.edit ? 'Update' : 'Add task?'}</Button_Styled>
      </>
    </Form_Styled>
  )
}

const Input_Styled = styled.input`
  box-sizing: border-box;
  max-width: 330px;
  width: 100%;
  height: 100%;
  display: block;
  background: ${props => props.theme.palette.common.bg};
  color: ${props => props.theme.palette.bright.contrastText};
  font-size: 14px;
  line-height: 30px;
  overflow: hidden;
  border: none;
  outline: none;
  border-radius: 7px;
  border: 1px solid ${props => props.theme.palette.bright.contrastText};
  padding: 10px;
  box-shadow: 0 0 15px 4px rgb(255 184 0 / 6%);

  &::placeholder {
    pointer-events: none;
    color: ${props => props.theme.palette.bright.contrastText};
    transition-duration: 0.3s;
    font-size: 14px;
  }

  @media (max-width: 500px) {
    max-width: 230px;
  }
`
const Form_Styled = styled.form`
  display: flex;
  align-items: center;
`
const Button_Styled = styled(Button)`
  font-size: 14px;
`
const Input_Styled_Updated = styled(Input_Styled)`
  color: #fff;
  border-color: ${props => props.theme.palette.primary.main};
`
