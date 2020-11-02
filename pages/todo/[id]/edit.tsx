import React, { useState, useEffect } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import Form from '../../../src/components/Form'
import { useRecoilState } from 'recoil'
import todoMapState from '../../../src/store/todo'

const TodoNew = () => {
  const router = useRouter()
  const { id } = router.query
  const [todoMap, setTodoMap] = useRecoilState(todoMapState);
  const todo = typeof id === 'string' ? todoMap.get(parseInt(id)) : todoMap.get(parseInt(id[0]))

  const editItem = (newTodo) => {
    todoMap.set(todo.id, {
      id: todo.id,
      timestamp: todo.timestamp,
      completed: todo.completed,
      text: newTodo.text
    })
    setTodoMap(todoMap);
    router.push('/todo/[id]', `/todo/${todo.id}`)
  };

  return (
    <>
      <Grid container direction="column" spacing={2}>
        <Grid item md={6}>
          <h1>Todos</h1>
        </Grid>
        <Grid item md={6}>
          <Link href="/todo/[id]" as={`/todo/${todo.id}`}>
            <Button component="a" variant="contained" color="default">
              Back
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Form onSubmit={editItem} values={todo}/>
    </>
  )
}

export default TodoNew
