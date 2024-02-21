import Main from './components/Main';
import Header from './components/Header'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import './App.css'

function App() {
  const [windowSize, setWindowSIze] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowSIze(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  let app;

  if (windowSize < 768) {
    app =
      <div className="app">
        <div className='main_container'>
          <Header />
          <Main />
        </div>
      </div>
  } else {
    app =
      <div className="app">
        <Navbar />
        <div className='main_container'>
          <Header />
          <Main />
        </div>
      </div>
  }

  console.log(windowSize)
  
  return (
    <>
      {app}
    </>
  );
}

export default App;
