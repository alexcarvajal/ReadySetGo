import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AffirmativeToBe from "./components/Landing/Courses/VerbToBe/Affirmative/AffirmativeToBe";
import NegativeToBe from "./components/Landing/Courses/VerbToBe/Negative/NegativeToBe";
import InterrogativeToBe from "./components/Landing/Courses/VerbToBe/Interrogative/InterrogativeToBe";
import Loading from "./components/LoadingComponent/Loading";
import { useState, useEffect } from "react";
const App = () => {
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
        }, 3000)
    }, []);
    return (
        <>
            <Loading isLoading={isLoading}></Loading>
                <Router>
                    <Routes>
                        <Route index element={<Home darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />} />
                        <Route path="/affirmativeToBe" element={<AffirmativeToBe darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />} />
                        <Route path="/negativeToBe" element={<NegativeToBe />} />
                        <Route path="/interrogativeToBe" element={<InterrogativeToBe />} />
                    </Routes>
                </Router>
       </>
    )
}

export default App;

