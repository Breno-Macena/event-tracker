import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEventos } from "../interfaces/IFiltroDeEventos";

export const listDeEventosState = atom<IEvento[]>({
  key: 'listDeEventosState',
  default: [],
});

export const filtroDeEventosState = atom<IFiltroDeEventos>({
  key: 'filtroDeEventosState',
  default: { data: null, completo: null },
});