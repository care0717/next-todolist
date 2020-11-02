import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const Form = (props) => {
  const { onSubmit, values } = props;
  const { register, handleSubmit, errors, reset, setValue } = useForm()

  useEffect(() => {
    if (!values) return
    setValue('text', values.text)
  })

  const handler = (newTodo: {
    text: string
  }) => {
    onSubmit(newTodo);
    reset();
  }

  const errorMessage = (errors, field) => {
    const message = []
    if (errors[field]?.type == 'required') {
      message.push('required')
    }
    if (errors[field]?.type == 'maxLength') {
      message.push('Exceeded 20 characters')
    }
    return message.join(', ')
  }

  return (
    <form onSubmit={handleSubmit(handler)}>
      <Grid container direction="column" spacing={2}>
        <Grid item md={6}>
          <TextField
            label="Text"
            name="text"
            fullWidth
            inputRef={register({ required: true, maxLength: 20 })}
            error={Boolean(errors.name)}
            helperText={errorMessage(errors, 'text')}
          />
        </Grid>
        <Grid item md={6}>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default Form;
