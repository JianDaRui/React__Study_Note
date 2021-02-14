import { ADD_PERSON } from '../contant/constant'

export const createAdPersonAction = (person) => ({
  type: ADD_PERSON,
  data: person
})