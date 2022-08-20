import { Button } from '../../components/Button'
import { Todo } from './Todo'
import { TodoForm, TodoTask } from './TodoForm'
import { genericHookContextBuilder } from '../../utils/genericHookContextBuilder'
import { useContext, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'
import styled from 'styled-components'

const removeRedundantSpacesRegExp = new RegExp(/^\s*$/)

export const useLogicState = () => {
  const [todos, setTodos] = useLocalStorage('tasks', [] as TodoTask[])
  const [filter, setFilter] = useLocalStorage<'All' | 'Active' | 'Completed'>(
    'filteredTasks',
    'All'
  )

  const addTodo = (todo: TodoTask) => {
    if (!todo.text || removeRedundantSpacesRegExp.test(todo.text)) {
      return
    }
    setTodos([todo, ...todos])
  }

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const updateTodo = (todoId: number, newValue: TodoTask) => {
    if (!newValue.text || removeRedundantSpacesRegExp.test(newValue.text)) {
      return
    }
    setTodos(todos.map(item => (item.id === todoId ? newValue : item)))
  }

  const completeTodo = (id: number) => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, isComplete: !todo.isComplete } : { ...todo }))
    )
  }

  const filterTodo = () => {
    if (filter === 'Active') {
      return todos.filter(todo => !todo.isComplete)
    } else if (filter === 'Completed') {
      return todos.filter(todo => todo.isComplete)
    } else {
      return todos
    }
  }
  return {
    todos,
    setTodos,
    addTodo,
    filter,
    setFilter,
    removeTodo,
    updateTodo,
    completeTodo,
    filterTodo,
  }
}

export const { ContextProvider: TodoContextProvider, Context: TodosContext } =
  genericHookContextBuilder(useLogicState)

export const TodoApp = () => {
  return (
    <TodoContextProvider>
      <TodoList />
    </TodoContextProvider>
  )
}

const TodoList = () => {
  const logic = useContext(TodosContext)

  return (
    <TodoContextProvider>
      <Div_TodoList>
        <Div_FormWrapper>
          <H1_Styled>What is the plan for today?</H1_Styled>
          <TodoForm onSubmit={logic.addTodo} />
          <Todo
            todos={logic.filterTodo()}
            completeTodo={logic.completeTodo}
            removeTodo={logic.removeTodo}
            updateTodo={logic.updateTodo}
          />
        </Div_FormWrapper>
        <Div_Buttons>
          <Button onClick={() => logic.setFilter('All')}>All</Button>
          <Button onClick={() => logic.setFilter('Active')}>Active</Button>
          <Button onClick={() => logic.setFilter('Completed')}>Completed</Button>
        </Div_Buttons>
      </Div_TodoList>
    </TodoContextProvider>
  )
}

const H1_Styled = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: ${props => props.theme.palette.breakpoints.xs}) {
    font-size: 25px;
  }
`
const Div_TodoList = styled.div`
  min-height: calc(100vh - 200px);
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: space-between;
  padding: 0 20px;
`
const Div_FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const Div_Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`
