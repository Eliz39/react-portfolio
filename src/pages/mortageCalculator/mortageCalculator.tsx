import { useState } from 'react'
import styled from 'styled-components'

export const MortageCalculator = () => {
  const [amount, setAmount] = useState(1_000_000)
  const [period, setPeriod] = useState(5)
  const [percentage, setPercentage] = useState(5)

  let payment = Math.round(
    (((amount * percentage) / 100 / 12) * (1 + percentage / 100 / 12) ** (12 * period)) /
      ((1 + percentage / 100 / 12) ** (12 * period) - 1)
  )

  return (
    <Div_Wrapper>
      <Form_Styled>
        <Input_Styled
          type='number'
          name='amount'
          id='amount'
          value={amount}
          placeholder='loan amount'
          min={1_000_000}
          max={100_000_000}
          step={10_000}
          onChange={e => setAmount(Number(e.target.value))}
        />
        <Input_Styled
          type='number'
          name='percentage'
          id='percentage'
          placeholder='percentage rate'
          min={1}
          max={50}
          step={0.1}
          value={percentage}
          onChange={e => setPercentage(Number(e.target.value))}
        />
        <Input_Styled
          type='number'
          name='period'
          id='period'
          placeholder='loan term'
          min={2}
          max={50}
          step={1}
          value={period}
          onChange={e => setPeriod(Number(e.target.value))}
        />
      </Form_Styled>
      <Div_Text>
        Your payment <Span_BrightText>{payment || 0}</Span_BrightText> kč/month for{' '}
        <Span_BrightText>{period}</Span_BrightText> years
      </Div_Text>
    </Div_Wrapper>
  )
}

const Div_Wrapper = styled.div`
  text-align: center;
`
const Input_Styled = styled.input`
  box-sizing: border-box;
  max-width: 330px;
  width: 100%;
  height: 100%;
  display: block;
  background: ${props => props.theme.palette.common.bg};
  color: ${props => props.theme.palette.bright.contrastText};
  font-size: 14px;
  line-height: 30px;
  overflow: hidden;
  border: none;
  outline: none;
  border-radius: 7px;
  border: 1px solid ${props => props.theme.palette.bright.contrastText};
  padding: 10px;
  box-shadow: 0 0 15px 4px rgb(255 184 0 / 6%);

  &:hover,
  &:focus {
    border-color: ${props => props.theme.palette.primary.main};
  }

  @media (max-width: ${props => props.theme.palette.breakpoints.xs}) {
    max-width: 230px;
  }
`
const Form_Styled = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`
const Div_Text = styled.div`
  margin: 25px;
`
const Span_BrightText = styled.span`
  color: ${props => props.theme.palette.bright.contrastText};
`
