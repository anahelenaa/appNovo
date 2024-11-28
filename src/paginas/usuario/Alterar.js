
import React, { Fragment } from 'react'
import Navegacao from '../../components/mensagem/Navegacao'
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import { BUTTON_SIZE_SHOW_MESSAGE } from '../../config/Config';

const Alterar = () => {
  return (
    <Fragment>
      <Navegacao 
         titulo="Usuário"
         iconTitulo={< FaIcons.FaUserEdit size={BUTTON_SIZE_SHOW_MESSAGE}/>}
         descricao="Manutenção do cadastro de usuário"
         iconReturn={<MdIcons.MdList size={BUTTON_SIZE_SHOW_MESSAGE}/>}
         caminho="Usuário"
         url="/usuario/listar"
         tituloUrl="listagem de usuários"
      
      />
    </Fragment>

  )
}

export default Alterar
