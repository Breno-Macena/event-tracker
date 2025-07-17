import { IEvento } from "../../interfaces/IEvento";
import { useSetRecoilState } from "recoil";
import { listDeEventosState } from "../atom";
import { obterId } from "../../util";

const useAdicionarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listDeEventosState);

  const adicionarEvento = (novoEvento: IEvento) => {
    if (novoEvento.inicio >= novoEvento.fim) {
      throw new Error("A data de início deve ser anterior à data de fim.");
    }

    if (novoEvento.inicio < new Date()) {
      throw new Error("A data de início não pode ser no passado.");
    }

    novoEvento.id = obterId()
    setListaDeEventos(listaAntiga => [...listaAntiga, novoEvento]);
  }

  return adicionarEvento;
}

export default useAdicionarEvento;