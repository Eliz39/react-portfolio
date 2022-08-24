import { Card } from './MemoryGame'
import Cover from './assets/cover.jpg'
import styled, { css } from 'styled-components'

type SingleCard = {
  card: Card
  handleChoice: (card: Card) => void
  flipped: boolean
  disabled: boolean
}
type FlipCard = {
  flipped: boolean
}

export const SingleCard = (props: SingleCard) => {
  const handleClick = () => {
    if (props.disabled) return
    props.handleChoice(props.card)
  }
  return (
    <div>
      <Img_Front src={props.card.img} flipped={props.flipped} alt='card front' />
      <Img_Cover src={Cover} onClick={handleClick} flipped={props.flipped} alt='card back' />
    </div>
  )
}

const imgStyles = css`
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 6px;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  @media (max-width: ${props => props.theme.palette.breakpoints.sm}) {
    width: 70px;
    height: 70px;
  }
`
const Img_Front = styled.img<FlipCard>`
  ${imgStyles}
  position: absolute;
  transform: ${props => (props.flipped ? 'rotateY(0deg)' : 'rotateY(90deg)')};
`

const Img_Cover = styled.img<FlipCard>`
  ${imgStyles}
  border: 2px solid ${props => props.theme.palette.primary.main};
  transform: ${props => (props.flipped ? 'rotateY(90deg)' : 'rotateY(0deg)')};
  transition-delay: ${props => (props.flipped ? '0.15s' : '0.3s')};

  &:hover {
    border-color: ${props => props.theme.palette.bright.contrastText};
  }
`
