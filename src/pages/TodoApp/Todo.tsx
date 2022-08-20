import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import { TodoForm, TodoTask } from './TodoForm'
import { TodosContext } from './TodoList'
import { useContext, useState } from 'react'
import styled, { css } from 'styled-components'

export const Todo = () => {
  const logic = useContext(TodosContext)

  if (logic.editId) {
    return (
      <TodoForm editId={logic.editId} editValue={logic.editValue} onSubmit={logic.submitUpdate} />
    )
  }

  return (
    <>
      {logic.filterTodo().map(todo => (
        <Div_NewTodo key={todo.id} isComplete={todo.isComplete ? 'complete' : ''}>
          <div key={todo.id} onClick={() => logic.completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div>
            <IoCheckmarkDoneCircleOutline_Styled onClick={() => logic.completeTodo(todo.id)} />
            <RiCloseCircleLine_Styled onClick={() => logic.removeTodo(todo.id)} />
            <TiEdit_Styled
              onClick={() => {
                logic.setEditId(todo.id)
                logic.setEditValue(todo.text)
              }}
            />
          </div>
        </Div_NewTodo>
      ))}
    </>
  )
}

const Div_NewTodo = styled.div<{ isComplete: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${props => props.theme.palette.bright.contrastText};
  font-size: 14px;
  padding: 10px;
  color: ${props => props.theme.palette.bright.contrastText};
  border-radius: 7px;
  text-decoration: ${props => (props.isComplete === 'complete' ? 'line-through' : 'none')};
`
const iconStyles = css`
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
