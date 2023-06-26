import type { ColumnDef } from '@tanstack/react-table'
import axios from 'axios'
import { useEffect, useMemo, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { TableLayout } from './components/Table'
import type { Cliente } from './models/Clientes'

function App() {
  const [clientes, setClientes] = useState([])
  const [tipoClientes, setTipoClientes] = useState([])

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

  const columnsClientes = useMemo<ColumnDef<Cliente>[]>(
    () => [
      {
        header: 'Nombre',
        cell: (row) => row.renderValue(),
        accessorKey: 'nombre'
      },
      {
        header: 'DNI',
        cell: (row) => row.renderValue(),
        accessorKey: 'dni'
      },
      {
        header: 'Telefono',
        cell: (row) => row.renderValue(),
        accessorKey: 'telefono'
      },
      {
        header: 'Correo',
        cell: (row) => row.renderValue(),
        accessorKey: 'correo'
      },
      {
        header: 'Estado',
        cell: (row) => row.renderValue(),
        accessorKey: 'estado'
      },
      {
        header: 'Tipo',
        cell: (row) => row.renderValue(),
        accessorKey: 'tipoCliente.nombre'
      }
    ],
    []
  )

  const columnsTipoClientes = useMemo<ColumnDef<Cliente>[]>(
    () => [
      {
        header: 'Nombre',
        cell: (row) => row.renderValue(),
        accessorKey: 'nombre'
      },
      {
        header: 'Detalle',
        cell: (row) => row.renderValue(),
        accessorKey: 'detalle'
      }
    ],
    []
  )

  const getClientes = async () => {
    const result = await axios(`${API_BASE_URL}/clientes`)
    setClientes(result.data)
  }

  const getTipoCliente = async () => {
    const result = await axios(`${API_BASE_URL}/tipoclientes`)
    setTipoClientes(result.data)
  }

  useEffect(() => {
    getClientes()
    getTipoCliente()
  })

  return (
    <Container style={{ marginTop: 50 }}>
      <Row>
        <TableLayout data={clientes} columns={columnsClientes} />
      </Row>
      <Row style={{ marginTop: 50 }}>
        <TableLayout data={tipoClientes} columns={columnsTipoClientes} />
      </Row>
    </Container>
  )
}

export default App
