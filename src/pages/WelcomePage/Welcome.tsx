import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { URLS } from '../../utils/urls'
import styled from 'styled-components'

export const Welcome = () => {
  return (
    <Div_Wrapper>
      <H2_Title>Hola! Click on any button below to see one of my React mini-app</H2_Title>
      <Div_ButtonContainer>
        <Link to={URLS.jsHistory}>
          <Button>JavaScript History</Button>
        </Link>
        <Link to={URLS.counter}>
          <Button>Counter App</Button>
        </Link>
        <Link to={URLS.todo}>
          <Button>Todo App</Button>
        </Link>
        <Link to={URLS.hackerTyper}>
          <Button>Hacker Typer</Button>
        </Link>
        <Link to={URLS.mortageCalculator}>
          <Button>Mortage calculator</Button>
        </Link>
      </Div_ButtonContainer>
    </Div_Wrapper>
  )
}

const Div_Wrapper = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const H2_Title = styled.h2`
  color: ${props => props.theme.palette.bright.contrastText};
  margin-bottom: 20px;
`
const Div_ButtonContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-around;
`
