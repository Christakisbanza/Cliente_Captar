import './App.css'
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
        </main>

      </div>
    </>
  )
}

export default App
