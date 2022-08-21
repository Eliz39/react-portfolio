import { idGenerator } from './idGenerator'

export const getShuffledCards = (array: string[]) => {
  return array
    .sort(() => Math.random() - 0.5)
    .map(img => ({ img: img, id: idGenerator(), matched: false }))
}
