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
          <Button
            onClick={() => this.setState(previousState => ({ count: previousState.count + 1 }))}
          >
            +
          </Button>
          <Button
            onClick={() => this.setState(previousState => ({ count: previousState.count - 1 }))}
          >
            -
          </Button>
        </div>
        <ButtonBig onClick={() => this.setState(() => ({ count: 0 }))}>reset</ButtonBig>
      </Div_Wrapper>
    )
  }
}

const Div_Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  flex-direction: column;
  gap: 10px;
  background: ${props => props.theme.palette.common.bg};
`

const P_Count = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bittom: 20px;
`

const Button = styled.button`
  padding: 5px 10px;
  background-color: ${props => props.theme.palette.primary.main};
  width: 50px;
  height: 30px;
`
const ButtonBig = styled(Button)`
  width: 100px;
`
