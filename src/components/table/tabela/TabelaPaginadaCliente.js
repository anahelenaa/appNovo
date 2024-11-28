import React, { Fragment } from 'react'
import Table from '../componente-tabela/Table'
import TableHeader from '../componente-tabela/TableHeader'
import TableBody from '../componente-tabela/TableBody'
import '../componente-tabela/table.css'

const TabelaPaginadaCliente = (headers) => {
  return (
    <Fragment>
        <Table>
            <TableHeader headers={headers}/>
            <TableBody headers={headers}/>
        </Table>
    </Fragment>
  )
}

export default TabelaPaginadaCliente
