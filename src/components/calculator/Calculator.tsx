import Header from './Header'
import MainForm from './MainForm'
import Result from './Result'
import Sidebar from './Sidebar'

const Calculator = () => {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row', minWidth: '100%', }}>
        <MainForm />
        <Sidebar />
      </div>
      <Result />
    </>
  )
}

export default Calculator
