import { Grid, Grid2, TextField, Typography } from '@mui/material'
import React from 'react'

export const LoginPage = () => {
  return (
    <Grid2 
      container spacing={0}
      direction=' column '
      alignItems=' center '
      justifyContent='center'
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}
    >

      <Grid2 item
        className='box-shadow'
        xs={ 3 }
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
      >
        <Typography variant=' h5 ' sx={{ mb: 1}}>
          Login
        </Typography>
        <form>
          <Grid2 container>
            <Grid2 item>
              <TextField 
              label='Correo' 
              type='email' 
              placeholder='Correo'/>
            </Grid2>
          </Grid2>
        </form>

        </Grid2>
    </Grid2>
  )
}
