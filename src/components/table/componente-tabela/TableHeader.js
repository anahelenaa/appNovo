import React, { Fragment } from 'react'

const TableHeader = ({headers}) => {
  return (
    <Fragment>
        <thead className='cf'>
            <tr>
                {
                    headers.map((header) => (
                        header.print != false && (
                            <th>
                                {header.nome}
                            </th>
                        )
                    ))
                }
                <th className='app-cabecalho-tabela p-3 mb-2 bg-success text-white'>

                </th>
            </tr>
        </thead>
    </Fragment>
  )
}

export default TableHeader
