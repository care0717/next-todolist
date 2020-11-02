import { atom } from 'recoil'
import { TodoModel } from '../model/Todo'

const todoMapState = atom({
  key: 'todoMapState',
  default: new Map<number, TodoModel>(),
})

export default todoMapState
