export type Cliente = {
  nombre: string
  dni: string
  telefono: string
  correo: string
  estado: string
  tipoCliente: TipoCliente
  idCliente: string
}

export type TipoCliente = {
  nombre: string
  detalle: string
  idTipoCliente: string
}

// Converts JSON strings to/from your types
export class Convert {
  public static toCliente(json: string): Cliente {
    return JSON.parse(json)
  }

  public static clienteToJson(value: Cliente): string {
    return JSON.stringify(value)
  }
}
