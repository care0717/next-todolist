import React from 'react'

import Link from 'next/link'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import Todo from '../src/components/Todo'

import { useRecoilState } from 'recoil'
import todoMapState from '../src/store/todo'


const TodoList = () => {
  const [todoMap, setTodoMap] = useRecoilState(todoMapState)
  const deleteItem = (id) => (() => {
    todoMap.delete(id)
    setTodoMap(todoMap);
  });
  return (
    <>
      <Grid container direction="column" spacing={2}>
        <Grid item md={6}>
          <h1>Todos</h1>
        </Grid>
        <Grid item md={6}>
          <Link href="/todo/new">
            <Button component="a" variant="contained" color="primary">
              New
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid container direction="column" spacing={2}>
        {Array.from(todoMap.values()).map((todo) => (
          <Todo key={todo.id} todo={todo} onDelete={deleteItem(todo.id)}/>
        ))}
      </Grid>
    </>
  )
}

export default TodoList
