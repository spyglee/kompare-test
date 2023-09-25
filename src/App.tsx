import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import en from 'date-fns/esm/locale/en-GB'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { Paper } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { useMemo } from 'react'

import router from './router'
import ContextProvider from './context/index'
import Error from './components/common/Error'
import Success from './components/common/Success'

function App() {
  const paperStyle = useMemo(() => ({
    minWidth: '100vw',
    minHeight: '100vh',
    mt: -2,
    mb: -2,
    ml: -1,
    borderRadius: 0,
  }), [])

  return (
    <ContextProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={en}>
        <Paper sx={paperStyle}>
          <RouterProvider router={ router } />
          <Error />
          <Success />
        </Paper>
      </LocalizationProvider>
    </ContextProvider>
  )
}

export default App
