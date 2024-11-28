import React, { Fragment } from 'react'

const Table = ({children}) => {
  return (
    <Fragment>
        <table className='app-tabela table table-striped table-bordered table-hover cf'>
            {children}
        </table>
    </Fragment>
  )
}

export default Table
