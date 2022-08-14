import { Link, Outlet } from 'react-router-dom'
import { URLS } from '../urls'
import styled from 'styled-components'

export const Template = () => {
  return (
    <Div_Wrapper>
      <Header>
        <Link_Styled to={URLS.welcome}>Home</Link_Styled>
        <Link_Styled to={URLS.jsHistory}>JavaScript history</Link_Styled>
        <Link_Styled to={URLS.counter}>Counter App</Link_Styled>
        <Link_Styled to={URLS.todo}>Todo App</Link_Styled>
      </Header>
      <Outlet />
      <Footer>ITAbsolvent 2022</Footer>
    </Div_Wrapper>
  )
}

const Div_Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Header = styled.header`
  width: 80%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Link_Styled = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.palette.secondary.main};
  font-size: 18px;

  &:hover,
  &:focus,
  &:active {
    color: ${props => props.theme.palette.bright.contrastText};
  }
`
const Footer = Header
