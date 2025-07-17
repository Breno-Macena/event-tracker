import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listDeEventosState } from "../atom";

const useExcluirEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listDeEventosState);

  const excluirEvento = (id: number) => {
    setListaDeEventos(listaAntiga => listaAntiga.filter(evento => evento.id !== id));
  }

  return excluirEvento;
}

export default useExcluirEvento;
