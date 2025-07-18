import axios from "axios";
import { IEvento } from "../interfaces/IEvento";

const api = axios.create({
  baseURL: "http://localhost:5000",
})

export const getEventos = async (): Promise<IEvento[]> => {
  try {
    const response = await api.get<IEvento[]>("/eventos")
      .then(res => res.data.map(evento => ({
        ...evento,
        inicio: new Date(evento.inicio),
        fim: new Date(evento.fim)
      })))
    return response
  } catch (error) {
    console.error("Erro ao buscar eventos:", error)
    throw error;
  }
}

export const createEvento = async (evento: IEvento): Promise<IEvento> => {
  const response = await api.post<IEvento>("/eventos", evento)
  return response.data
}

export const updateEvento = async (id: number, evento: IEvento): Promise<IEvento> => {
  const response = await api.put<IEvento>(`/eventos/${id}`, evento)
  return response.data
}

export const deleteEvento = async (id: number): Promise<void> => {
  await api.delete(`/eventos/${id}`)
}