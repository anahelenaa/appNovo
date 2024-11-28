
import React, { Fragment } from 'react'
import PrivateRoute from './PrivateRoute'
import Dashboard from '../paginas/Dashboard'
import Incluir from '../paginas/usuario/Incluir'
import Alterar from '../paginas/usuario/Alterar'
import { Route, Routes } from 'react-router-dom'
import ListaPaginadaCliente from '../paginas/usuario/ListaPaginadaCliente'

const Rotas = () => {
  return (
    <Fragment>
        <Routes>
           <Route element={<PrivateRoute/>}>
              <Route path='/' element={<Dashboard/>}/> 
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path="/usuario/listar" element={<ListaPaginadaCliente/>}/>
              <Route path="/usuario/incluir" element={<Incluir/>}/>
              <Route path="/usuario/alterar" element={<Alterar/>}/>
           </Route>
        </Routes>
    </Fragment>
  )
}

export default Rotas
