import './App.css'
import Home from './component/Home'
import NavBar from './component/NavBar'

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
        </main>

      </div>
    </>
  )
}

export default App
