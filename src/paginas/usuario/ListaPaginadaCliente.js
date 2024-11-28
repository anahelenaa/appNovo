import React, { Fragment } from 'react'
import Navegacao from '../../components/mensagem/Navegacao'
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import { BUTTON_SIZE_SHOW_MESSAGE } from '../../config/Config';
import TabelaPaginadaCliente from '../../components/table/tabela/TabelaPaginadaCliente';

const headers = [
  {nome:'id', field:'idUsuario', sort:false, print:false},
  {nome:'Foto', field:'foto', sort:false, print:true},
  {nome:'Código', field:'codigoUsuario', sort:true, print:true},
  {nome:'E-mail', field:'email', sort:true, print:true},
  {nome:'Tipo', field:'tipo', sort:true, print:true},
  {nome:'Cidade', field:'nome_cidade', sort:true, print:true},
]

const ListaPaginadaCliente = () => {
  return (
    <Fragment>
      <Navegacao 
         titulo="Usuário"
         iconTitulo={< AiIcons.AiFillDashboard size={BUTTON_SIZE_SHOW_MESSAGE}/>}
         descricao="Lista de Usuários"
         iconReturn={<MdIcons.MdList size={BUTTON_SIZE_SHOW_MESSAGE}/>}
         url="/dashboard"
         tituloUrl="Página Principal"
      

      />

      <div className='row justify-content-center'>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-8'>
          <div className='app-windows'>
            <TabelaPaginadaCliente headers={headers}/>
          </div>
        </div>
      </div>
    </Fragment> 
  )
}

export default ListaPaginadaCliente
