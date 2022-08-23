import { FaHamburger } from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'
import { URLS } from '../utils/urls'
import { useState } from 'react'
import styled, { css } from 'styled-components'

type MenuProp = {
  isOpen: boolean
}

export const Template = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Div_Wrapper>
      <Header>
        <Div_NavMenu isOpen={isOpen}>
          <Link_Styled to={URLS.welcome} onClick={() => setIsOpen(false)}>
            Home
          </Link_Styled>
          <Link_Styled to={URLS.jsHistory} onClick={() => setIsOpen(false)}>
            JavaScript history
          </Link_Styled>
          <Link_Styled to={URLS.counter} onClick={() => setIsOpen(false)}>
            Counter App
          </Link_Styled>
          <Link_Styled to={URLS.todo} onClick={() => setIsOpen(false)}>
            Todo App
          </Link_Styled>
          <Link_Styled to={URLS.hackerTyper} onClick={() => setIsOpen(false)}>
            Hacker Typer
          </Link_Styled>
          <Link_Styled to={URLS.mortageCalculator} onClick={() => setIsOpen(false)}>
            Mortage Calculator
          </Link_Styled>
          <Link_Styled to={URLS.MemoryGame} onClick={() => setIsOpen(false)}>
            Memory Game
          </Link_Styled>
        </Div_NavMenu>
        <FaHamburger_Styled onClick={() => setIsOpen(prevState => !prevState)} />
      </Header>
      <Outlet />
      <Footer>ITAbsolvent 2022</Footer>
      {isOpen && <Div_Backdrop onClick={() => setIsOpen(false)} />}
    </Div_Wrapper>
  )
}

const common = css`
  width: 100%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 30px;
`
const Div_Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Header = styled.header`
  ${common}
  @media (max-width: ${props => props.theme.palette.breakpoints.md}) {
    justify-content: flex-end;
    align-items: baseline;
  }
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
const Footer = styled.footer`
  ${common}
`
const FaHamburger_Styled = styled(FaHamburger)`
  display: none;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 25;

  &:hover,
  &:focus,
  &:active {
    color: ${props => props.theme.palette.bright.contrastText};
  }

  @media (max-width: ${props => props.theme.palette.breakpoints.md}) {
    display: block;
  }
`
const Div_NavMenu = styled.div<MenuProp>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.2s ease-in-out;

  @media (max-width: ${props => props.theme.palette.breakpoints.md}) {
    transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
    flex-direction: column;
    height: 100%;
    width: 300px;
    padding: 2rem;
    background: ${props => props.theme.palette.common.bg};
    box-shadow: 0 5px 5px rgba(102, 68, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    max-width: 350px;
    z-index: 20;
    transition: transform 0.3s ease-out;
  }
`
const Div_Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`
