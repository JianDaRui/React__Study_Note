import { ADD_PERSON } from '../contant/constant'

export const createAddPersonAction = (person) => ({
  type: ADD_PERSON,
  data: person
})