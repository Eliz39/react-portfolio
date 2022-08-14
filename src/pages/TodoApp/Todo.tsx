import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import { TodoForm, TodoTask } from './TodoForm'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'

type Todo = {
  todos: TodoTask[]
  completeTodo: (id: number) => void
  removeTodo: (id: number) => void
  updateTodo: (id: number, value: TodoTask) => void
  filterTodo: () => TodoTask[]
}

export const Todo = (props: Todo) => {
  const [edit, setEdit] = useState({
    id: 0,
    value: '',
  })

  const submitUpdate = (value: TodoTask) => {
    props.updateTodo(edit.id, value)
    setEdit({
      id: 0,
      value: '',
    })
  }

  if (edit.id) {
    return (
      <>
        <TodoForm edit={edit} onSubmit={submitUpdate} />
      </>
    )
  }

  return (
    <>
      {props.filterTodo().map((todo, index) => (
        <Div_NewTodo key={index} className={todo.isComplete ? 'complete' : ''}>
          <div key={todo.id} onClick={() => props.completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className='icons'>
            <IoCheckmarkDoneCircleOutline_Styled onClick={() => props.completeTodo(todo.id)} />
            <RiCloseCircleLine_Styled onClick={() => props.removeTodo(todo.id)} />
            <TiEdit_Styled
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className='edit-icon'
            />
          </div>
        </Div_NewTodo>
      ))}
    </>
  )
}

const Div_NewTodo = styled.div<{ className: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${props => props.theme.palette.bright.contrastText};
  font-size: 14px;
  padding: 10px;
  color: ${props => props.theme.palette.bright.contrastText};
  border-radius: 7px;
  text-decoration: ${props => (props.className === 'complete' ? 'line-through' : 'none')};
`
const iconStyles = () => css`
  margin-right: 5px;
  width: 20px;
  height: 20px;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.palette.primary.main};
  }
`
const TiEdit_Styled = styled(TiEdit)`
  ${iconStyles}
`
const RiCloseCircleLine_Styled = styled(RiCloseCircleLine)`
  ${iconStyles}
`
const IoCheckmarkDoneCircleOutline_Styled = styled(IoCheckmarkDoneCircleOutline)`
  ${iconStyles}
`
