export type IMaquinaResponse = IMaquina[]

export interface IMaquina {
  id: string
  descripcion: string
  color: string
  estado: string
}

export interface IMaquinaParam {
  descripcion: string
  color: string
  estado: string
}
