import { useState, useEffect } from 'react'
import Loading from './components/LoadingComponent/Loading';
import Home from './pages/Home'
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem('darkMode')) || false
  );
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 10000)
  }, []);
  return (
    <Loading isLoading={isLoading}>
      <div className={`${darkMode ? 'dark' : ''} transition-colors duration-500`}>
        <div className="min-h-screen animate-fade-in bg-custom-dark dark:bg-custom-shark">
          <Home darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        </div>
      </div>
    </Loading>
  )
}
export default App
