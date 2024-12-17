import './App.css'
import { AppPagamentoCredito } from './component/AppPagamentoCredito'
import BancoPagamentoCreditos from './component/BancoPagamentoCreditos'
import DoacaoEscrowCobranca from './component/DoacaoEscrowCobranca'
import Home from './component/Home'
import NavBar from './component/NavBar'
import ServicoCashbackInclui from './component/ServicoCashbackInclui'

function App() {
  
  return (
    <>
      <div className='app'>

        <header className='navBar-app'>
          <NavBar/>
        </header>

        <main>
          <div className='home-app'>
            <Home/>
          </div>

          <div className='ServicoCashbackInclui-app'>
            <ServicoCashbackInclui />
          </div>

          <div className='doacaoEscrowCobranca-app'>
            <DoacaoEscrowCobranca/>
          </div>

          <div className='appPagamentoCredito-app'>
            <AppPagamentoCredito/>
          </div>

          <div className='bancoPagamentoCreditos-app'>
            <BancoPagamentoCreditos/>
          </div>
        </main>

      </div>
    </>
  )
}

export default App
