import React from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import Form from '../../src/components/Form'
import todoMapState from '../../src/store/todo'
import { useSetRecoilState } from 'recoil'

let id = 0;
function getId() {
  return id++;
}

const TodosNew = () => {
  const router = useRouter()
  const setTodoMap = useSetRecoilState(todoMapState);

  const addItem = (newTodo) => {
    setTodoMap((todoMap) => {
      const id = getId()
      todoMap.set(id, {
          text: newTodo.text,
          id: id,
          timestamp: Math.floor(Date.now() / 1000),
          completed: false,
      })
      return todoMap
    });
    router.push('/')
  };

  return (
    <>
      <Grid container direction="column" spacing={2}>
        <Grid item md={6}>
          <h1>Todo</h1>
        </Grid>
        <Grid item md={6}>
          <Link href="/">
            <Button component="a" variant="contained" color="default">
              Back
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Form onSubmit={addItem}/>
    </>
  )
}

export default TodosNew
