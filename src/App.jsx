import React from "react"
import GlobalStyle from './global'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Produtos from "./Components/Produtos/Produtos"
import Contato from "./Components/Contato/Contato"
import Produto from './Components/Produto/Produto'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <div className="content">
      <Routes>
        <Route path="/" element={<Produtos />}/>
        <Route path="produto/id" element={<Produto />}/>
        <Route path="contato" element={<Contato/>}/>
      </Routes>
      </div>
      <GlobalStyle/>
      </BrowserRouter>
    </div>
  )
}

export default App
