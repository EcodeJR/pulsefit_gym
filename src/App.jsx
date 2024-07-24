import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <section className="w-full h-fit">
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </BrowserRouter>
        
      </section>
    </>
  )
}

export default App;
