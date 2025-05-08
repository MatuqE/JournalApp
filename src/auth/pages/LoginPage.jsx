import { Button, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import React from 'react'

export const LoginPage = () => {
  return (
    <Grid 
      container spacing={0}
      direction=' column '
      alignItems=' center '
      justifyContent='center'
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}
    >

      <Grid item
        className='box-shadow'
        xs={ 3 }
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
      >
        <Typography variant=' h5 ' sx={{ mb: 1}}>
          Login
        </Typography>
        <form md={ 6 }>
          <Grid container >

            <Grid item   size={{ xs: 12, sm: 12, md: 12 }} sx={{ mt: 2}} fullWidth >
              <TextField 
              label='Correo' 
              type='email' 
              placeholder='Correo'
              fullWidth/>
            </Grid>

            <Grid item size={{ xs: 12, sm: 12, md: 12 }} sx={{ mt: 2}}  >
              <TextField fui
              label='Contraseña' 
              type='password' 
              placeholder='Contraseña'
              fullWidth/>
            </Grid>

            <Grid container spacing={ 2 }  sx={{ mb: 2}}  >
              <Grid item size={{ xs: 12, sm: 6, md: 6}}>
                <Button variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>
            </Grid>
            

          </Grid>
        </form>

        </Grid>
    </Grid>
  )
}
