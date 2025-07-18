import { selector } from 'recoil';
import { filtroDeEventosState, listDeEventosState } from '../atom';
import { getEventos } from '../../api';

export const eventosFiltradosState = selector({
  key: 'eventosFiltradosState',
  get: ({ get }) => {
    const todosEventos = get(listDeEventosState);
    const filtro = get(filtroDeEventosState);

    return todosEventos.filter(evento => {
      if (filtro.completo !== null) {
        if (filtro.completo && !evento.completo) return false;
        if (!filtro.completo && evento.completo) return false;
      }
      if (!filtro.data) return true;
      return evento.inicio.toISOString().slice(0, 10) === filtro.data.toISOString().slice(0, 10);
    });
  }
})

export const eventosAsyncState = selector({
  key: 'eventosAsyncState',
  get: async () => await getEventos()
})