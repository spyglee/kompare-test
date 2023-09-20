import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Paper } from '@mui/material'
import { useEffect, useMemo } from 'react'

function App() {
  const getTestData = async () => {
    try {
      const data = await fetch('http://localhost:8000/')
      const res = await data.text()
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  const paperStyle = useMemo(() => ({
    minWidth: '100vw',
    minHeight: '100vh',
    mt: -2,
    mb: -2,
    borderRadius: 0,
  }), []);

  useEffect(() => {
    getTestData()
  }, [])

  return (
    <Paper sx={paperStyle}>
      <p>hello world</p>
    </Paper>
  )
}

export default App
