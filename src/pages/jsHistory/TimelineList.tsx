import styled from 'styled-components'

type EventItemProps = {
  date: string
}

export const JsHistory = () => {
  return (
    <Div_Content>
      <h1>JavaScript history</h1>
      <List>
        <EventItem date='1995'>
          <EventTitle>
            JavaScript was invented by Brendan Eich during his time at Netscape Communications. It
            was inspired by Java, Scheme and Self.
          </EventTitle>
          <Line></Line>
        </EventItem>
        <EventItem date='1997'>
          <EventTitle>JavaScript became an ECMA standard (ECMA-262)</EventTitle>
          <Line></Line>
        </EventItem>
        <EventItem date='1998'>
          <EventTitle>ECMAScriLinet 2 was released</EventTitle>
          <Line></Line>
        </EventItem>
        <EventItem date='1999'>
          <EventTitle>IE 5 was the first browser to support ES2</EventTitle>
          <Line></Line>
        </EventItem>
        <EventItem date='2005'>
          <EventTitle>A paper released by Jesse James Garrett introduced Ajax</EventTitle>
          <Line></Line>
        </EventItem>
        <EventItem date='2008'>
          <EventTitle>Creation of V8 - a high-performance JavaScript engine</EventTitle>
          <Line></Line>
        </EventItem>
        <EventItem date='2009'>
          <EventTitle>
            The creation of Node.js sparked a significant increase in the usage of JavaScript
            outside of web browsers
          </EventTitle>
          <Line></Line>
        </EventItem>
        <EventItem date='2021'>
          <EventTitle>
            There are more JavaScript code repositories than any other language, and that number is
            steadily on the rise.
          </EventTitle>
          <Line></Line>
        </EventItem>
      </List>
    </Div_Content>
  )
}

const Div_Content = styled.div`
  min-height: calc(100vh - 100px);
  color: ${props => props.theme.palette.primary.contrastText};
  margin: 0 auto;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing};
  border-left: 4px solid ${props => props.theme.palette.primary.main};
  border-bottom-right-radius: ${props => props.theme.borderRadius};
  border-top-right-radius: ${props => props.theme.borderRadius};
  background: rgba(255, 255, 255, 0.03);
  color: rgb(245, 228, 228);
  margin: ${props => props.theme.spacing} auto;
  letter-spacing: 0.5px;
  position: relative;
  line-height: 1.4em;
  font-size: 1.03em;
  padding: ${props => props.theme.spacing};
  list-style: none;
  text-align: left;
  font-weight: 100;
  max-width: 50%;
`
const EventItem = styled.li<EventItemProps>`
  border-bottom: 1px dashed ${props => props.theme.palette.secondary.main};
  position: relative;

  &:last-of-type {
    gap: 0;
    padding-bottom: 0;
    margin-bottom: 0;
    border: none;
  }

  &::before,
  &::after {
    position: absolute;
    display: block;
    top: 0;
  }

  &::before {
    left: calc(((${props => props.theme.date} * 0.6 + 50px + 4px + 11px + 4px * 2) * 1.5) * -1);
    color: ${props => props.theme.palette.secondary.main};
    content: ${props => props.date};
    text-align: right;
    font-weight: 100;
    font-size: 0.9em;
    min-width: ${props => props.date};
    font-family: 'Saira', sans-serif;
  }

  &::after {
    box-shadow: 0 0 0 4px #004ffc;
    left: calc((${props => props.theme.spacing} + 4px + 11px * 0.35) * -1);
    border-radius: 50%;
    height: ${props => props.theme.dot};
    width: ${props => props.theme.dot};
    content: '';
    top: 5px;
    background: ${props => props.theme.palette.common.bg};
  }
`

const EventTitle = styled.h3`
  padding: 0;
  margin: 0;
`
const Line = styled.p`
  margin-top: ${props => props.theme.spacing};
`
