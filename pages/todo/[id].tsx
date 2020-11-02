import React, { useState, useEffect } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useRecoilValue } from 'recoil'
import todoMapState from '../../src/store/todo'

const TodoShow = () => {
  const router = useRouter()
  const { id } = router.query
  const todoMap = useRecoilValue(todoMapState)
  const todo = typeof id === 'string' ? todoMap.get(parseInt(id)) : todoMap.get(parseInt(id[0]))

  return (
    <>
      <Grid container direction="column" spacing={2}>
        <Grid item md={6}>
          <h1>Todos</h1>
        </Grid>
        <Grid item md={6}>
          <Link href="/">
            <Button component="a" variant="contained" color="default">
              Back
            </Button>
          </Link>
          <Link href="/todo/[id]/edit" as={`/todo/${todo.id}/edit`}>
            <Button component="a" variant="contained" color="primary">
              Edit
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid container direction="column" spacing={2}>
        <Grid item md={6}>
          <Typography variant="h2">
            {todo.text}
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography color="textSecondary">
            created at {new Date(todo.timestamp * 1000).toLocaleString()}
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography>
            {todo.completed ? 'Completed' : 'In progress'}
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default TodoShow
