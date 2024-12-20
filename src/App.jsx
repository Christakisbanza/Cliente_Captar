import './App.css'
import { AppPagamentoCredito } from './component/AppPagamentoCredito'
import BancoPagamentoCreditos from './component/BancoPagamentoCreditos'
import DoacaoEscrowCobranca from './component/DoacaoEscrowCobranca'
import { Footer } from './component/Footer'
import { Form } from './component/Form'
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

          <div className='form-app'>
            <Form/>
          </div>

          <div className='footer-app'>
            <Footer/>
          </div>
        </main>

      </div>
    </>
  )
}

export default App
