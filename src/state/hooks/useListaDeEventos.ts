import { useRecoilValue } from "recoil";
import { listDeEventosState } from "../atom";


const useListaDeEventos = () => {
  return useRecoilValue(listDeEventosState);
}

export default useListaDeEventos;