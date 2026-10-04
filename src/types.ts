export type CamposPedido = {
  nomeCliente: string
  modelo: string
  placa: string
  tipoLavagem: string
}

export type Ticket = CamposPedido & {
  id: string
}