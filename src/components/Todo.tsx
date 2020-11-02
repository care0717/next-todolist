import React from 'react'
import Link from 'next/link'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'

const Todo = ({ todo, onDelete }) => {

  return (
    <Grid item md={6}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            <Link href={`/todo/${todo.id}`}>{todo.text}</Link>
          </Typography>
          <Typography color="textSecondary">
            created at {new Date(todo.timestamp * 1000).toLocaleString()}
          </Typography>
        </CardContent>
        <CardActions>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Done"
          />
          <Button variant="contained" color="secondary" onClick={onDelete}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Todo
