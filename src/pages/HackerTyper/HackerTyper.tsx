import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const START_MESSAGE =
  'Start typing on your keyboard to run the code. Hit ESCAPE to clear code. Happy Hacking!'
const CHARS_ONKEYDOWN = 7

export const HackerTyper = () => {
  const [codeSource, setCodeSource] = useState('')
  const [codeOutput, setCodeOutput] = useState(START_MESSAGE)
  const [currentIndex, setCurrentIndex] = useState(0)
  const divWrapperRef = useRef<HTMLDivElement | null>(null)
  const bottomParagraphRef = useRef<HTMLParagraphElement | null>(null)
  useEffect(() => {
    divWrapperRef.current?.focus()
    fetch('code.txt')
      .then(res => res.text())
      .then(text => setCodeSource(text))
  }, [])

  return (
    <Div_Wrapper
      onKeyDown={e => {
        if (e.key !== 'Escape') {
          setCurrentIndex(currentIndex + CHARS_ONKEYDOWN)
          setCodeOutput(codeSource.substring(0, currentIndex))
          bottomParagraphRef.current?.scrollIntoView()
        } else setCodeOutput('')
      }}
      tabIndex={0}
      ref={divWrapperRef}
    >
      <Div_Content>{codeOutput}</Div_Content>
      <p ref={bottomParagraphRef}></p>
    </Div_Wrapper>
  )
}

const Div_Wrapper = styled.div`
  min-height: calc(100vh - 100px);
  background-color: ${props => props.theme.palette.standard.main};
  margin: 0;
  overflow: hidden;
  padding: 12px;
  outline: none;
`

const Div_Content = styled.div`
  color: ${props => props.theme.palette.common.code};
  font-family: ${props => props.theme.codeFont}, monospace;
  white-space: pre-wrap;
`
