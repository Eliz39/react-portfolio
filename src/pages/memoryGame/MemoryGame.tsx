import { Button } from '../../components/Button'
import { SingleCard } from './SingleCard'
import { idGenerator } from '../../utils/idGenerator'
import Card01 from './assets/c01.jpg'
import Card02 from './assets/c02.jpg'
import Card03 from './assets/c03.jpg'
import Card04 from './assets/c04.jpg'
import Card05 from './assets/c05.jpg'
import Card06 from './assets/c06.jpg'
import Card07 from './assets/c07.jpg'
import Card08 from './assets/c08.jpg'

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const cardImages = [Card01, Card02, Card03, Card04, Card05, Card06, Card07, Card08]

export type Card = {
  img: string
  id: number
  matched: boolean
}

export const MemoryGame = () => {
  const [cards, setCards] = useState<Card[]>([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState<Card | null>(null)
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null)
  const [disabled, setDisabled] = useState(false)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((img: string) => ({ img: img, id: idGenerator(), matched: false }))
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }

  const handleChoice = (card: Card) => {
    choiceOne === null ? setChoiceOne(card) : setChoiceTwo(card)
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.img === choiceTwo.img && choiceOne.id !== choiceTwo.id) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.img === choiceOne.img) {
              return { img: card.img, id: card.id, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurn => prevTurn + 1)
    setDisabled(false)
  }

  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <Div_Wrapper>
      <div>
        <Button onClick={shuffleCards}>New game</Button>
        <P_Turns>Turns: {turns}</P_Turns>
      </div>

      <Div_Cards>
        {cards.map(card => (
          <SingleCard_Styled
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </Div_Cards>
    </Div_Wrapper>
  )
}
const P_Turns = styled.p`
  color: ${props => props.theme.palette.bright.contrastText};
  margin-top: 15px;
`
const Div_Wrapper = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  align-items: center;
  gap: 50px;
  justify-content: center;
`
const Div_Cards = styled.div`
  margin-top: 50px;
  max-width: 580px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`
const SingleCard_Styled = styled(SingleCard)`
  position: relative;
`
