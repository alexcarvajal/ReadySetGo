import { useState, useEffect } from 'react'
import Home from './pages/Home'
function App() {
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem('darkMode')) || false
  );

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <>
      {/*  <div className="h-screen bg-blue-200 sm:bg-blue-300 md:bg-blue-500 lg:bg-blue-700 
      xl:bg-blue-800 2xl:bg-blue-900"> */}
      <div className={`${darkMode ? 'dark' : ''} transition-colors duration-500`}>
        <div className="min-h-screen bg-custom-dark dark:bg-custom-primary">
          <Home darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        </div>
      </div>
    </>
  )
}

export default App
