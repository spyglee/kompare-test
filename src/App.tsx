import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import en from 'date-fns/esm/locale/en-GB';
import { Paper } from '@mui/material'
import { useMemo } from 'react'

import ContextProvider from './context/index'
import Error from './components/common/Error'
import Header from './components/Header';
import Success from './components/common/Success'
import MainForm from './components/MainForm'
import Sidebar from './components/Sidebar';
import Result from './components/Result';

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
          <Header />
          <div style={{ display: 'flex', flexDirection: 'row', minWidth: '100%', }}>
            <MainForm />
            <Sidebar />
          </div>
          <Result />
          <Error />
          <Success />
        </Paper>
      </LocalizationProvider>
    </ContextProvider>
  )
}

export default App
