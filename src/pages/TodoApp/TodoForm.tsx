import { Button } from '../../components/Button'
import { TodosContext } from './TodoList'
import { idGenerator } from '../../utils/idGenerator'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'

export type TodoTask = {
  id: number
  text: string
  isComplete: boolean
}

export type TodoForm = {
  todo?: TodoTask
  onSubmit: (todo: TodoTask) => void
  editId?: number
  editValue?: string
}

export const TodoForm = (props: TodoForm) => {
  const logic = useContext(TodosContext)
  const [input, setInput] = useState(props.editValue ? props.editValue : '')

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    logic.setTodos([
      {
        id: idGenerator(),
        text: input,
        isComplete: false,
      },
      ...logic.todos,
    ])
    props.onSubmit({
      id: idGenerator(),
      text: input,
      isComplete: false,
    })
    setInput('')
  }

  return (
    <Form_Styled onSubmit={handleSubmit}>
      <Input_Styled
        type='text'
        placeholder={props.editValue ? 'Update task' : 'What needs to be done?'}
        value={input}
        name='text'
        onChange={e => setInput(e.target.value)}
        className={props.editValue ? 'update' : ''}
        autoFocus
      />
      <Button_Styled type='submit'>{props.editValue ? 'Update' : 'Add task'}</Button_Styled>
    </Form_Styled>
  )
}

const Input_Styled = styled.input<{ className: string }>`
  box-sizing: border-box;
  max-width: 330px;
  width: 100%;
  height: 100%;
  display: block;
  background: ${props => props.theme.palette.common.bg};
  color: ${props =>
    props.className === 'update'
      ? props.theme.palette.standard.contrastText
      : props.theme.palette.bright.contrastText};
  font-size: 14px;
  line-height: 30px;
  overflow: hidden;
  border: none;
  outline: none;
  border-radius: 7px;
  border: 1px solid
    ${props =>
      props.className === 'update'
        ? props.theme.palette.primary.main
        : props.theme.palette.bright.contrastText};
  padding: 10px;
  box-shadow: 0 0 15px 4px rgb(255 184 0 / 6%);

  @media (max-width: ${props => props.theme.palette.breakpoints.xs}) {
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
