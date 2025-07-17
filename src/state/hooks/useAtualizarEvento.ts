import { useSetRecoilState } from 'recoil';
import { listDeEventosState } from '../atom';
import { IEvento } from '../../interfaces/IEvento';

const useAtualizarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listDeEventosState);

  const atualizarEvento = (eventoAtualizado: IEvento) => {
    setListaDeEventos(listaAntiga => {
      const index = listaAntiga.findIndex(e => e.id === eventoAtualizado.id);
      if (index === -1) return listaAntiga;
      return [...listaAntiga.slice(0, index), eventoAtualizado, ...listaAntiga.slice(index + 1)];
    });
  }

  return atualizarEvento;
}

export default useAtualizarEvento;