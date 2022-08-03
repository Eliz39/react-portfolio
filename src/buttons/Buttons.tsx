import React, { useState } from 'react'
import styled from 'styled-components'

export const Buttons = () => {
  const [value, setValue] = useState(0)
  return (
    <Div_Wrapper>
      <div>
        <p>{value}</p>
        <Button onClick={() => setValue(value + 1)}>+</Button>
        <Button onClick={() => setValue(value - 1)}>-</Button>
      </div>
    </Div_Wrapper>
  )
}

const Div_Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: white;
  text-align: center;
`
const Button = styled.button`
  padding: 5px 10px;
  background-color: #004ffc;
`
