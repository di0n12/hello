import React from 'react'
import { Container, Box, Paper } from '@mui/material'
import Login from './components/login.jsx'

const App = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper 
          elevation={3}
          sx={{
            p: 4,
            width: '100%',
            borderRadius: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.9)'
          }}
        >
          <Login />
        </Paper>
      </Box>
    </Container>
  )
}

export default App