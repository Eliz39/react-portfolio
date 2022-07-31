import styled from 'styled-components'

type EventItemProps = {
  date: string
}

function TimelineList() {
  return (
    <List>
      <EventItem date='1995'>
        <EventTitle>
          JavaScript was invented by Brendan Eich during his time at Netscape Communications. It was
          inspired by Java, Scheme and Self.
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
          The creation of Node.js sparked a significant increase in the usage of JavaScript outside
          of web browsers
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
  )
}

export default TimelineList

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 50px;
  border-left: 4px solid #004ffc;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  background: rgba(255, 255, 255, 0.03);
  color: rgb(245, 228, 228);
  font-family: 'Chivo', sans-serif;
  margin: 50px auto;
  letter-spacing: 0.5px;
  position: relative;
  line-height: 1.4em;
  font-size: 1.03em;
  padding: 50px;
  list-style: none;
  text-align: left;
  font-weight: 100;
  max-width: 50%;
`
const EventItem = styled.li<EventItemProps>`
  border-bottom: 1px dashed #6c6d6d;
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
    left: calc(((120px * 0.6 + 50px + 4px + 11px + 4px * 2) * 1.5) * -1);
    color: #6c6d6d;
    content: ${props => props.date};
    text-align: right;
    font-weight: 100;
    font-size: 0.9em;
    min-width: 120px;
    font-family: 'Saira', sans-serif;
  }

  &::after {
    box-shadow: 0 0 0 4px #004ffc;
    left: calc((50px + 4px + 11px * 0.35) * -1);
    border-radius: 50%;
    height: 11px;
    width: 11px;
    content: '';
    top: 5px;
    background: #252827;
  }
`

const EventTitle = styled.h3`
  padding: 0;
  margin: 0;
`
const Line = styled.p`
  margin-top: 50px;
`
