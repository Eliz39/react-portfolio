import { Link, Outlet } from 'react-router-dom'
import { URLS } from '../../urls'
import styled from 'styled-components'

export const Template = () => {
  return (
    <Div_Wrapper>
      <Header>
        <StyledLink to={URLS.welcome}>Home</StyledLink>
        <StyledLink to={URLS.jsHistory}>JavaScript history</StyledLink>
        <StyledLink to={URLS.btns}>Counter App</StyledLink>
      </Header>
      <Outlet />
      <Footer>ITAbsolvent 2022</Footer>
    </Div_Wrapper>
  )
}

const Div_Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between:
`

const Header = styled.header`
  width: 80%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.palette.secondary.main};
`
const Footer = styled(Header)``
