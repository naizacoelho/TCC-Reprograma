import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from './pages/Home'
import Historia from './pages/Historia'
import Informacoes from './pages/Informacoes'
import Relatos from './pages/Relatos'
import Footer from './componentes/Footer'
import Header from './componentes/Header'


const Router = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/historia" element={<Historia/>}></Route>
                <Route path="/informacoes" element={<Informacoes/>}></Route>
                <Route path="/relatos" element={<Relatos/>}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router