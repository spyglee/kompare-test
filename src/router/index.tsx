import { createBrowserRouter } from 'react-router-dom'
import Calculator from '../components/calculator/Calculator';
import Logs from '../components/logs/Logs';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Calculator />
    ),
    errorElement: <h1>error 404</h1>,
  },
  {
    path: '/logs',
    element: (
      <Logs />
    ),
    errorElement: <h1>error 404</h1>,
  },
])

export default router
