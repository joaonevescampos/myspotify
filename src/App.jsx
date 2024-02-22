import Main from './components/Main';
import Header from './components/Header'
import Navbar from './components/Navbar';
import './App.css'

function App() {
  return (
    <div className="app">
        <Navbar />
        <div className='main_container'>
          <Header />
          <Main />
        </div>
      </div>
  )
}

export default App;
