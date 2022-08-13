import { Button } from '../../components/Button'
import React from 'react'
import styled from 'styled-components'

type Props = {}
type State = {
  count: number
}

export class Counter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <Div_Wrapper>
        <div>
          <P_Count>{this.state.count}</P_Count>
          <Button onClick={() => this.setState(p => ({ count: p.count + 1 }))}>+</Button>
          <Button onClick={() => this.setState(p => ({ count: p.count - 1 }))}>-</Button>
        </div>
        <Button onClick={() => this.setState(() => ({ count: 0 }))}>reset</Button>
      </Div_Wrapper>
    )
  }
}

const Div_Wrapper = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  flex-direction: column;
  gap: 5px;
  background: ${props => props.theme.palette.common.bg};
`

const P_Count = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`

// const Button_Styled = styled(Button)`
//   width: 50px;
//   height: 30px;
// `
